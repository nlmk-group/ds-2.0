import React, { useCallback, useMemo } from 'react';

import { Checkbox, Spinner, Typography } from '@components/index';
import clsx from 'clsx';

import type { IComboGroupListProps } from './types';

import styles from './ComboGroupList.module.scss';

import { useComboBoxValue, useSearchValue, useSetComboBoxValue } from '../../context';
import { useOptimalHeight, useOptimalWidth } from '../../hooks';
import { AllItemsCheckbox, InfiniteScrollTrigger, Search, VirtualizedResizableGrip } from '../../subcomponents';
import type { IComboBoxGroupOption, IListItem } from '../../types';

const createStableKey = (id: string, isGroup: boolean, searchValue: string) => {
  return `${isGroup ? 'group' : 'item'}-${id}-${searchValue || 'no-search'}`;
};

const ComboGroupList = <T extends IComboBoxGroupOption>({
  items,
  onChange,
  isSearch = false,
  isCheckAll = false,
  isLoading = false,
  isMultiple = true,
  isVirtualize = false,
  isInfinityLoading = false,
  infinityLoadingOptions
}: IComboGroupListProps<T>) => {
  const setComboValue = useSetComboBoxValue();
  const comboBoxValue = useComboBoxValue();
  const searchValue = useSearchValue();

  useOptimalWidth(items, isMultiple);
  useOptimalHeight(items, isSearch, isCheckAll);

  const processedData = useMemo(() => {
    const groupsMap = new Map<
      string,
      {
        id: string;
        label: string;
        items: T[];
        filteredItems: T[];
        shouldShow: boolean;
      }
    >();

    items.forEach(item => {
      const groupId = item.groupId || '';
      const groupLabel = item.groupLabel || '';

      if (!groupsMap.has(groupId)) {
        groupsMap.set(groupId, {
          id: groupId,
          label: groupLabel,
          items: [],
          filteredItems: [],
          shouldShow: true
        });
      }

      groupsMap.get(groupId)?.items.push(item);
    });

    if (searchValue && searchValue.trim()) {
      const searchLower = searchValue.trim().toLowerCase();

      groupsMap.forEach(group => {
        group.filteredItems = group.items.filter(item => {
          const itemLabel = (item.label || item.name || item.shortName || '').toLowerCase();
          return itemLabel.includes(searchLower);
        });

        group.shouldShow = group.filteredItems.length > 0;
      });
    } else {
      groupsMap.forEach(group => {
        group.filteredItems = [...group.items];
        group.shouldShow = true;
      });
    }

    const flatList: IListItem[] = [];

    groupsMap.forEach(group => {
      if (group.shouldShow) {
        flatList.push({
          id: group.id,
          label: group.label,
          isGroupLabel: true,
          _key: createStableKey(group.id, true, searchValue || '')
        });

        group.filteredItems.forEach(item => {
          flatList.push({
            ...item,
            id: item.id,
            idMdm: item.idMdm || item.id,
            label: item.label || item.name || item.shortName || '',
            isGroupLabel: false,
            _key: createStableKey(item.id, false, searchValue || '')
          });
        });
      }
    });

    return flatList;
  }, [items, searchValue]);

  const offsetItemLoadingId = infinityLoadingOptions?.offset
    ? processedData[processedData.length - infinityLoadingOptions.offset]?.id
    : null;

  const handleChange = useCallback(
    (item: IListItem) => {
      if (item.isGroupLabel) return;

      const option = items.find(option => option.id === item.id);
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
    },
    [items, onChange, setComboValue]
  );

  const handleMultiChange = useCallback(
    (item: IListItem) => {
      if (item.isGroupLabel) return;

      const option = items.find(option => option.id === item.id);
      if (setComboValue && option) {
        setComboValue(previousValue => {
          const isCheck = Boolean(previousValue?.find(value => value.id === item.id));
          if (isCheck && previousValue) {
            const filteredValue = previousValue.filter(value => value.id !== item.id);
            onChange?.(filteredValue);
            return filteredValue;
          }

          const newValue = [...(previousValue ?? []), option];
          onChange?.(newValue);
          return newValue;
        });
      }
    },
    [items, onChange, setComboValue]
  );

  const renderItem = useCallback(
    (item: IListItem) => {
      const isChecked = Boolean(comboBoxValue?.find(value => value.id === item.id));
      const isRenderInfinityLoadingAnchor = isInfinityLoading && item.id === offsetItemLoadingId;

      return (
        <div
          key={item._key || item.id}
          className={clsx(styles['list-item'], {
            [styles['list-item--active']]: isChecked,
            [styles['list-item--group']]: item.isGroupLabel
          })}
        >
          {item.isGroupLabel && (
            <Typography className={styles['list-item__label']} variant="Caption">
              {item.label}
            </Typography>
          )}

          {!item.isGroupLabel && isMultiple && (
            <Checkbox
              checked={isChecked}
              label={item.label}
              onChange={() => handleMultiChange(item)}
              className={styles['list-item__checkbox']}
            />
          )}

          {!item.isGroupLabel && !isMultiple && (
            <Typography
              variant="Body1-Medium"
              className={styles['list-item__label']}
              onClick={() => handleChange(item)}
            >
              {item.label}
            </Typography>
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
    },
    [
      comboBoxValue,
      handleChange,
      handleMultiChange,
      infinityLoadingOptions,
      isInfinityLoading,
      isLoading,
      isMultiple,
      isVirtualize,
      offsetItemLoadingId
    ]
  );

  const onlyCheckableItems = useMemo(() => processedData.filter(item => !item.isGroupLabel), [processedData]);

  return (
    <>
      {isLoading && <Spinner />}
      {isSearch && <Search />}
      {isCheckAll && <AllItemsCheckbox items={onlyCheckableItems} onChange={onChange} />}

      {isVirtualize ? (
        <VirtualizedResizableGrip
          items={processedData}
          renderItem={renderItem}
          classNameContainer={styles.listContainer}
          isCheckAll={isCheckAll}
          isSearch={isSearch}
        />
      ) : (
        <div className={styles['list-container']}>{processedData.map(renderItem)}</div>
      )}
    </>
  );
};

export default ComboGroupList;
