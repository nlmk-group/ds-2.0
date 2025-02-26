import React, { useMemo } from 'react';

import { Checkbox, Spinner, Typography } from '@components/index';
import clsx from 'clsx';

import type { IComboGroupListProps } from './types';

import styles from './ComboGroupList.module.scss';

import { useComboBoxValue, useSearchValue, useSetComboBoxValue } from '../../context';
import { useOptimalHeight, useOptimalWidth } from '../../hooks';
import { AllItemsCheckbox, InfiniteScrollTrigger, Search, VirtualizedResizableGrip } from '../../subcomponents';
import type { IComboBoxGroupOption, IListItem } from '../../types';

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

  const options = useMemo(() => {
    const groups = items.reduce<
      {
        id: string;
        label: string;
        items: { id: string; label: string; areaId?: string; idMdm?: string; name?: string; shortName?: string }[];
      }[]
    >((result, item) => {
      const group = result.find(groupItem => groupItem.id === item.groupId);
      if (group) {
        group.items.push({
          id: item.id,
          idMdm: item.idMdm || item.id,
          label: item.label || item.name || item.shortName || '',
          areaId: item.areaId
        });
      } else {
        result.push({
          id: item.groupId ?? '',
          label: item.groupLabel ?? '',
          items: [{ ...item, id: item.id, label: item.label || item.name || item.shortName, idMdm: item.idMdm }]
        });
      }
      return result;
    }, []);
    const options = groups.reduce<IListItem[]>((result, item) => {
      result.push({ id: item.id, label: item.label, isGroupLabel: true });
      item.items.forEach(item => {
        result.push({
          ...item,
          id: item.id,
          idMdm: item.idMdm || item.id,
          label: item.label || item.name || item.shortName || '',
          isGroupLabel: false
        });
      });
      return result;
    }, []);
    return options;
  }, [items]);

  const offsetItemLoadingId = infinityLoadingOptions?.offset
    ? options[options.length - infinityLoadingOptions.offset]?.id
    : null;

  const handleChange = (item: { id: string; label: string; isGroupLabel: boolean }) => {
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
  };
  const handleMultiChange = (item: { id: string; label: string; isGroupLabel: boolean }) => {
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
  };

  const renderItem = (item: { id: string; label: string; isGroupLabel: boolean }) => {
    const isChecked = Boolean(comboBoxValue?.find(value => value.id === item.id));
    const isRenderInfinityLoadingAnchor = isInfinityLoading && item.id === offsetItemLoadingId;
    const isGroupLabel = item.isGroupLabel;

    return (
      <div
        key={item.id}
        className={clsx(styles['list-item'], {
          [styles['list-item--active']]: isChecked,
          [styles['list-item--group']]: isGroupLabel
        })}
      >
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
          <Typography variant="Body1-Medium" className={styles['list-item__label']} onClick={() => handleChange(item)}>
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
  };

  const filteredSearchItems = useMemo(() => {
    if (searchValue) {
      const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchValue.trim().toLowerCase())
      );
      const groupIds = filteredOptions.filter(option => option.isGroupLabel).map(option => option.id);
      const groupsChildrenIds = filteredOptions.filter(option => !option.isGroupLabel).map(option => option.id);
      const groupsChildren = items.filter(item => groupIds.includes(item.groupId ?? '')).map(item => item.id);
      const groupsIds = items.filter(item => groupsChildrenIds.includes(item.id)).map(item => item.groupId ?? '');
      const filteredOptionsIds = filteredOptions.map(option => option.id);
      const uniqueIds = Array.from(new Set([...groupsIds, ...filteredOptionsIds, ...groupsChildren]));

      return options.filter(option => uniqueIds.includes(option.id));
    }

    return options;
  }, [searchValue, options, items]);

  const onlyCheckableItems = useMemo(
    () => filteredSearchItems.filter(item => !item.isGroupLabel),
    [filteredSearchItems]
  );

  return (
    <>
      {isLoading && <Spinner />}
      {isSearch && <Search />}
      {isCheckAll && <AllItemsCheckbox items={onlyCheckableItems} onChange={onChange} />}
      {isVirtualize ? (
        <VirtualizedResizableGrip
          items={filteredSearchItems}
          renderItem={renderItem}
          classNameContainer={styles.listContainer}
          isCheckAll={isCheckAll}
          isSearch={isSearch}
        />
      ) : (
        <div className={styles['list-container']}>{filteredSearchItems.map(renderItem)}</div>
      )}
    </>
  );
};

export default ComboGroupList;