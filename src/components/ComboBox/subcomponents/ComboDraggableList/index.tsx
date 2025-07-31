import React, { useMemo } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

import { Checkbox, Icon, Spinner, Typography } from '@components/index';
import clsx from 'clsx';

import { IComboDraggableListProps } from './types';

import styles from './ComboDraggableList.module.scss';

import { useComboBoxValue, useSearchValue, useSetComboBoxValue } from '../../context';
import { useOptimalHeight, useOptimalWidth } from '../../hooks';
import { AllItemsCheckbox, InfiniteScrollTrigger, Search } from '../../subcomponents';
import type { IComboBoxOption } from '../../types';
import { reorderList } from '../../utils';

const ComboDraggableList = <T extends IComboBoxOption>({
  items,
  onChange,
  onReorder,
  isSearch = false,
  isCheckAll = false,
  isLoading = false,
  isMultiple = true,
  isInfinityLoading = false,
  infinityLoadingOptions,
  droppableId
}: IComboDraggableListProps<T>) => {
  const setComboValue = useSetComboBoxValue();
  const comboBoxValue = useComboBoxValue();
  const searchValue = useSearchValue();

  useOptimalWidth(items, isMultiple, true);
  useOptimalHeight(items, isSearch, isCheckAll);

  const offsetItemLoadingId = infinityLoadingOptions?.offset
    ? items[items.length - infinityLoadingOptions.offset]?.id
    : null;

  const handleChange = (item: T) => {
    if (setComboValue) {
      setComboValue(previousValue => {
        const isCheck = Boolean(previousValue?.find(value => value.id === item.id));
        if (isCheck) {
          onChange?.([]);
          return [];
        }
        onChange?.([item]);
        return [item];
      });
    }
  };

  const handleMultiChange = (item: T) => {
    if (setComboValue) {
      setComboValue(previousValue => {
        const isCheck = Boolean(previousValue?.find(value => value.id === item.id));
        if (isCheck && previousValue) {
          const filteredValue = previousValue.filter(value => value.id !== item.id);
          onChange?.(filteredValue as T[]);
          return filteredValue;
        }
        const newValue = [...(previousValue ?? []), item];
        onChange?.(newValue as T[]);
        return newValue;
      });
    }
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }
    const sourceItem = filteredSearchItems[result.source.index];
    const destinationItem = filteredSearchItems[result.destination.index];

    if (!sourceItem || !destinationItem) {
      return;
    }

    const primarySourceIndex = items.findIndex(item => item.id === sourceItem.id);
    const primaryDestinationIndex = items.findIndex(item => item.id === destinationItem.id);

    if (primarySourceIndex === -1 || primaryDestinationIndex === -1) {
      return;
    }

    onReorder?.(reorderList(items, primarySourceIndex, primaryDestinationIndex));
  };

  const filteredSearchItems = useMemo(() => {
    if (searchValue) {
      return items.filter(item => item.label.toLowerCase().includes(searchValue.trim().toLowerCase()));
    }

    return items;
  }, [searchValue, items]);

  const renderItem = (item: T, index: number) => {
    const isChecked = Boolean(comboBoxValue?.find(value => value.id === item.id));
    const isRenderInfinityLoadingAnchor = isInfinityLoading && item.id === offsetItemLoadingId;

    return (
      <Draggable key={item.id} draggableId={`${droppableId}-${item.id}`} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={clsx(styles['list-item'], styles['list-item--draggable'], {
              [styles['list-item--active']]: isChecked,
              [styles['list-item--dragging']]: snapshot.isDragging,
              [styles['list-item--disabled']]: Boolean(item.disabled)
            })}
            {...provided.draggableProps}
            style={provided.draggableProps.style}
          >
            <span {...provided.dragHandleProps} className={styles['drag-indicator']}>
              <Icon name="IconDragIndicatorDotsOutlined24" />
            </span>
            {isMultiple && (
              <Checkbox
                checked={isChecked}
                disabled={Boolean(item.disabled)}
                label={item.label}
                onChange={() => handleMultiChange(item)}
                className={styles['list-item__checkbox']}
              />
            )}
            {!isMultiple && (
              <Typography
                variant="Body1-Medium"
                className={styles['list-item__label']}
                onClick={() => !item.disabled && handleChange(item)}
              >
                {item.label}
              </Typography>
            )}
            {isRenderInfinityLoadingAnchor && (
              <InfiniteScrollTrigger
                isVirtualize={false}
                isLoading={isLoading}
                infinityLoadingOptions={infinityLoadingOptions}
              />
            )}
          </div>
        )}
      </Draggable>
    );
  };

  return (
    <>
      {isLoading && <Spinner />}
      {isSearch && <Search />}
      {isCheckAll && <AllItemsCheckbox items={filteredSearchItems} onChange={onChange} />}
      <DragDropContext onDragEnd={handleDragEnd} enableDefaultSensors>
        <Droppable droppableId={droppableId}>
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef} className={styles['list-container']}>
              {filteredSearchItems.map((item, index) => renderItem(item, index))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default ComboDraggableList;
