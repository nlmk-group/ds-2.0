import React, { useMemo } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

import { Box, Checkbox, Icon, Spinner, Typography } from '@components/index';
import clsx from 'clsx';

import { IComboDraggableGroupListProps } from './types';

import styles from './ComboDraggableGroupList.module.scss';

import { useComboBoxValue, useSearchValue, useSetComboBoxValue } from '../../context';
import { useOptimalHeight, useOptimalWidth } from '../../hooks';
import { AllItemsCheckbox, InfiniteScrollTrigger, Search } from '../../subcomponents';
import type { IGroupDraggableOption } from '../../types';
import { reorderList } from '../../utils';

const ComboDraggableGroupList = <T extends IGroupDraggableOption>({
  items,
  onChange,
  onReorder,
  onGroupsReorder,
  isSearch = false,
  isCheckAll = false,
  isLoading = false,
  isMultiple = true,
  isVirtualize = false,
  isInfinityLoading = false,
  infinityLoadingOptions,
  droppableId
}: IComboDraggableGroupListProps<T>) => {
  const setComboValue = useSetComboBoxValue();
  const comboBoxValue = useComboBoxValue();
  const searchValue = useSearchValue();

  const flatOptions = useMemo(() => {
    return items.reduce<T[]>((result, item) => {
      result.push({ id: item.id, label: item.label, isGroupLabel: item.isGroupLabel } as T);
      item.items?.forEach(item => {
        result.push(item as T);
      });
      return result;
    }, []);
  }, [items]);

  useOptimalWidth(flatOptions, isMultiple);
  useOptimalHeight(flatOptions, isSearch, isCheckAll);

  const offsetItemLoadingId = infinityLoadingOptions?.offset
    ? flatOptions[flatOptions.length - infinityLoadingOptions.offset]?.id
    : null;

  const handleChange = (item: T) => {
    const option = flatOptions.find(option => option.id === item.id);
    if (setComboValue && option) {
      setComboValue(previousValue => {
        const isCheck = Boolean(previousValue?.find(value => value.id === item.id));
        if (isCheck) {
          onChange?.([]);
          return [];
        }
        onChange?.([option]);
        return [option];
      });
    }
  };
  const handleMultiChange = (item: T) => {
    const option = flatOptions.find(option => option.id === item.id);
    if (setComboValue && option) {
      setComboValue(previousValue => {
        const isCheck = Boolean(previousValue?.find(value => value.id === item.id));
        if (isCheck && previousValue) {
          const filteredValue = previousValue.filter(value => value.id !== item.id);
          onChange?.(filteredValue as T[]);
          return filteredValue;
        }

        const newValue = [...(previousValue ?? []), option];
        onChange?.(newValue as T[]);
        return newValue;
      });
    }
  };

  const handleDragEnd = (result: DropResult, items: T[]) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }
    const newOrder = reorderList(items, result.source.index, result.destination.index);
    if (items.find(item => item.isGroupLabel)) {
      onGroupsReorder?.(newOrder);
    } else {
      onReorder?.(newOrder);
    }
  };

  const renderItem = (item: T, index: number) => {
    const isChecked = Boolean(comboBoxValue?.find(value => value.id === item.id));
    const isRenderInfinityLoadingAnchor = isInfinityLoading && item.id === offsetItemLoadingId;
    const isGroupLabel = item.isGroupLabel;

    return (
      <>
        <Draggable key={item.id} draggableId={`${droppableId}-${item.id}`} index={index}>
          {(provided, { isDragging }) => {
            return (
              <div
                ref={provided.innerRef}
                className={clsx(styles['list-item'], {
                  [styles['list-item--active']]: isChecked,
                  [styles['list-item--dragging']]: isDragging,
                  [styles['list-item--group']]: isGroupLabel
                })}
                {...provided.draggableProps}
              >
                <Box
                  gap={8}
                  className={clsx({
                    [styles['drag-group-label']]: isGroupLabel
                  })}
                >
                  <span {...provided.dragHandleProps} className={styles['drag-indicator']}>
                    <Icon name="IconDragIndicatorDotsOutlined16" />
                  </span>
                  {isGroupLabel && (
                    <Typography className={styles['list-item__label']} variant="Caption">
                      {item.label}
                    </Typography>
                  )}
                  {!isGroupLabel && isMultiple && (
                    <Checkbox
                      checked={isChecked}
                      label={item.label}
                      onChange={() => handleMultiChange(item)}
                      className={styles['list-item__checkbox']}
                    />
                  )}
                  {!isGroupLabel && !isMultiple && (
                    <Typography
                      variant="Body1-Medium"
                      className={styles['list-item__label']}
                      onClick={() => handleChange(item)}
                    >
                      {item.label}
                    </Typography>
                  )}
                </Box>
                {item.items && item.items.length > 0 && (
                  <Box gap={8}>
                    <DroppableList items={item.items as T[]} droppableId={`${droppableId}-${item.id}`} />
                  </Box>
                )}
                {isRenderInfinityLoadingAnchor && (
                  <InfiniteScrollTrigger
                    isVirtualize={isVirtualize}
                    isLoading={isLoading}
                    infinityLoadingOptions={infinityLoadingOptions}
                  />
                )}
              </div>
            );
          }}
        </Draggable>
      </>
    );
  };

  const filteredSearchItems = useMemo(() => {
    if (searchValue) {
      const filteredItems = items
        .map(item => {
          return {
            ...item,
            items: item.items?.filter(option => option.label.toLowerCase().includes(searchValue.trim().toLowerCase()))
          };
        })
        .filter(item => (item.items?.length ?? 0) > 0);

      return filteredItems;
    }

    return items;
  }, [searchValue, items]);

  const onlyCheckableItems = useMemo(
    () =>
      filteredSearchItems.reduce<T[]>((result, item) => {
        item.items?.forEach(item => {
          result.push(item as T);
        });
        return result;
      }, []),
    [filteredSearchItems]
  );

  const DroppableList = ({ items, droppableId }: { items: T[]; droppableId: string }) => (
    <DragDropContext onDragEnd={result => handleDragEnd(result, items)}>
      <Droppable droppableId={droppableId}>
        {provided => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={clsx(styles['list-container'], styles['list-container--draggable-groups'])}
          >
            {items.map((item, index) => renderItem(item, index))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );

  return (
    <>
      {isLoading && <Spinner />}
      {isSearch && <Search />}
      {isCheckAll && <AllItemsCheckbox items={onlyCheckableItems} onChange={onChange} />}
      <DroppableList items={filteredSearchItems} droppableId={droppableId} />
    </>
  );
};

export default ComboDraggableGroupList;
