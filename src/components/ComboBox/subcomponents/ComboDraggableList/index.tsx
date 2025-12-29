import React, { useCallback, useMemo, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { Checkbox, Icon, Spinner, Typography } from '@components/index';
import clsx from 'clsx';

import { IComboDraggableListProps } from './types';

import styles from './ComboDraggableList.module.scss';

import { useComboBoxValue, useSearchValue, useSetComboBoxValue } from '../../context';
import { useOptimalHeight, useOptimalWidth } from '../../hooks';
import { AllItemsCheckbox, InfiniteScrollTrigger, Search } from '../../subcomponents';
import type { IComboBoxOption } from '../../types';
import { reorderList } from '../../utils';

const COMBO_ITEM_TYPE = 'combo-item';

interface DragItem {
  id: string;
  index: number;
  type: string;
}

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
  droppableId: _droppableId
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

  const moveItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      if (dragIndex === hoverIndex) return;

      const sourceItem = filteredSearchItems[dragIndex];
      const destinationItem = filteredSearchItems[hoverIndex];

      if (!sourceItem || !destinationItem) {
        return;
      }

      const primarySourceIndex = items.findIndex(item => item.id === sourceItem.id);
      const primaryDestinationIndex = items.findIndex(item => item.id === destinationItem.id);

      if (primarySourceIndex === -1 || primaryDestinationIndex === -1) {
        return;
      }

      onReorder?.(reorderList(items, primarySourceIndex, primaryDestinationIndex));
    },
    [items, onReorder]
  );

  const filteredSearchItems = useMemo(() => {
    if (searchValue) {
      return items.filter(item => item.label.toLowerCase().includes(searchValue.trim().toLowerCase()));
    }

    return items;
  }, [searchValue, items]);

  const DraggableItem = useCallback(
    ({ item, index }: { item: T; index: number }) => {
      const ref = useRef<HTMLDivElement>(null);
      const isChecked = Boolean(comboBoxValue?.find(value => value.id === item.id));
      const isRenderInfinityLoadingAnchor = isInfinityLoading && item.id === offsetItemLoadingId;

      const [{ isDragging }, drag] = useDrag({
        type: COMBO_ITEM_TYPE,
        item: { id: item.id, index, type: COMBO_ITEM_TYPE },
        collect: monitor => ({
          isDragging: monitor.isDragging()
        })
      });

      const [{ isOver: _isOver }, drop] = useDrop({
        accept: COMBO_ITEM_TYPE,
        hover: (draggedItem: DragItem) => {
          if (draggedItem.index !== index) {
            moveItem(draggedItem.index, index);
            draggedItem.index = index;
          }
        },
        collect: monitor => ({
          isOver: monitor.isOver()
        })
      });

      drag(drop(ref));

      return (
        <div
          ref={ref}
          className={clsx(styles['list-item'], styles['list-item--draggable'], {
            [styles['list-item--active']]: isChecked,
            [styles['list-item--dragging']]: isDragging,
            [styles['list-item--disabled']]: Boolean(item.disabled)
          })}
          style={{ opacity: isDragging ? 0.5 : 1 }}
        >
          <span className={styles['drag-indicator']}>
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
      );
    },
    [comboBoxValue, isInfinityLoading, offsetItemLoadingId, isMultiple, handleMultiChange, handleChange, isLoading, infinityLoadingOptions, moveItem]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      {isLoading && <Spinner />}
      {isSearch && <Search />}
      {isCheckAll && <AllItemsCheckbox items={filteredSearchItems} onChange={onChange} />}
      <div className={styles['list-container']}>
        {filteredSearchItems.map((item, index) => (
          <DraggableItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </DndProvider>
  );
};

export default ComboDraggableList;
