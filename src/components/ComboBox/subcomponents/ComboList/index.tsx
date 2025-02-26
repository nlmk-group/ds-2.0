import React, { useMemo } from 'react';

import { Box, Checkbox, Icon, Spinner, Typography } from '@components/index';
import clsx from 'clsx';

import { IComboListProps } from './types';

import styles from './ComboList.module.scss';

import { useComboBoxValue, useSearchValue, useSetComboBoxValue } from '../../context';
import { useOptimalHeight, useOptimalWidth } from '../../hooks';
import { AllItemsCheckbox, InfiniteScrollTrigger, Search, VirtualizedResizableGrip } from '../../subcomponents';
import type { IComboBoxOption } from '../../types';

const ComboList = <T extends IComboBoxOption>({
  items,
  onChange,
  isSearch = false,
  isCheckAll = false,
  isLoading = false,
  isVirtualize = false,
  isMultiple = true,
  isInfinityLoading = false,
  isSingleChoiceCheckbox = false,
  infinityLoadingOptions
}: IComboListProps<T>) => {
  const setComboValue = useSetComboBoxValue();
  const comboBoxValue = useComboBoxValue();
  const searchValue = useSearchValue();

  useOptimalWidth(items, isMultiple);
  useOptimalHeight(items, isSearch, isCheckAll, isMultiple);

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
          onChange?.(filteredValue);
          return filteredValue;
        }
        const newValue = [...(previousValue ?? []), item];
        onChange?.(newValue);
        return newValue;
      });
    }
  };

  const renderItem = (item: T) => {
    const isChecked = Boolean(comboBoxValue?.find(value => value.id === item.id));
    const isRenderInfinityLoadingAnchor = isInfinityLoading && item.id === offsetItemLoadingId;

    return (
      <div
        key={item.id}
        className={clsx(styles.listItem, {
          [styles.listItemActive]: isChecked,
          [styles.listItemDisabled]: Boolean(item?.disabled)
        })}
      >
        {(isMultiple || isSingleChoiceCheckbox) && (
          <Checkbox
            checked={isChecked}
            disabled={Boolean(item?.disabled)}
            label={item.label}
            onChange={isSingleChoiceCheckbox ? () => handleChange(item) : () => handleMultiChange(item)}
            className={styles.listItemCheckbox}
          />
        )}

        {!isMultiple && !isSingleChoiceCheckbox && (
          <Box className={styles.listItemLabelWrapper} gap={8} onClick={() => !item?.disabled && handleChange(item)}>
            <Typography
              variant="Body1-Medium"
              className={clsx(styles.listItemLabel, {
                [styles.labelBreak]: item.hasLineBreak,
                [styles.listItemTextDisabled]: Boolean(item?.disabled)
              })}
            >
              {item.label}
            </Typography>
            {isChecked && (
              <Box className={styles.listItemDone} color="primary">
                <Icon color="primary" name="IconDoneCheckOutlined24" />
                {/* <IconDone24 /> */}
              </Box>
            )}
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
  };

  const filteredSearchItems = useMemo(() => {
    if (searchValue) {
      return items.filter(item => item.label.toLowerCase().includes(searchValue.trim().toLowerCase()));
    }

    return items;
  }, [searchValue, items]);

  return (
    <>
      {isLoading && <Spinner />}
      {isSearch && <Search />}
      {isCheckAll && <AllItemsCheckbox items={filteredSearchItems} onChange={onChange} />}
      {isVirtualize ? (
        <VirtualizedResizableGrip
          items={filteredSearchItems}
          renderItem={renderItem}
          classNameContainer={styles.listContainer}
          isCheckAll={isCheckAll}
          isSearch={isSearch}
        />
      ) : (
        <div className={styles.listContainer}>{filteredSearchItems.map(renderItem)}</div>
      )}
    </>
  );
};

export default ComboList;
