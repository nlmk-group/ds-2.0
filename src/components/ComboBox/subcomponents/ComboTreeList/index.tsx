import React, { useCallback, useMemo, useState } from 'react';

import { Button, Checkbox, Icon, Spinner, Typography } from '@components/index';
import clsx from 'clsx';

import { IComboTreeListProps } from './types';

import styles from './ComboTreeList.module.scss';

import { useComboBoxValue, useSearchValue, useSetComboBoxValue } from '../../context';
import { useOptimalHeight, useOptimalWidth } from '../../hooks';
import { AllItemsCheckbox, Search, VirtualizedResizableGrip } from '../../subcomponents';
import type { IComboBoxTree, IComboBoxTreeOption } from '../../types';
import { findChildIds, findManyParentsIds, findParentsIds, getTreeOptions } from '../../utils';

const ComboTreeList = <T extends IComboBoxTree>({
  items,
  onChange,
  maxLevel,
  isSearch = false,
  isCheckAll = false,
  isLoading = false,
  isMultiple = true,
  isVirtualize = false,
  checkableSimple = false
}: IComboTreeListProps<T>) => {
  const setComboValue = useSetComboBoxValue();
  const comboBoxValue = useComboBoxValue();
  const searchValue = useSearchValue();

  const [expandIds, setExpandIds] = useState<string[]>([]);

  const treeOptions = useMemo(() => getTreeOptions(items), [items]);

  useOptimalHeight(treeOptions, isSearch, isCheckAll, true);
  useOptimalWidth(treeOptions, isMultiple);

  const checkedIds = useMemo(() => comboBoxValue?.map(value => value.id) ?? [], [comboBoxValue]);

  const handleChangeExpand = (id: string) => {
    setExpandIds(prevIds => {
      if (prevIds.includes(id)) {
        const childIds = findChildIds(id, treeOptions);
        return prevIds.filter(id => !childIds.includes(id));
      }
      return [...prevIds, id];
    });
  };

  const handleChangeChecked = (item: IComboBoxTreeOption) => {
    if (!isMultiple) {
      if (isLeafNode(item)) {
        const newValue = [item];
        setComboValue?.(newValue);
        onChange?.(newValue);
      }
    } else {
      setComboValue?.(previousValue => {
        const isCheck = Boolean(previousValue?.find(value => value.id === item.id));

        if (checkableSimple) {
          if (isCheck && previousValue) {
            const filteredValue = previousValue.filter(value => value.id !== item.id);
            onChange?.(filteredValue);
            return filteredValue;
          } else {
            const newValue = [...(previousValue ?? []), item];
            onChange?.(newValue);
            return newValue;
          }
        }

        const childIds = findChildIds(item.id, treeOptions).filter(element => element !== item.id);
        const parentsIds = findParentsIds(item.parentId, treeOptions);

        if (isCheck && previousValue) {
          const filteredValue = previousValue.filter(value => {
            return !childIds.includes(value.id) && value.id !== item.id && !parentsIds.includes(value.id);
          });
          onChange?.(filteredValue);
          return filteredValue;
        }

        const isLastCheckedChild = treeOptions
          .filter(option => option.parentId === item.parentId && option.id !== item.id)
          .every(option => Boolean(previousValue?.find(value => value.id === option.id)));

        const parentOptions = treeOptions.filter(option => parentsIds.includes(option.id));
        const options = treeOptions.filter(option => childIds.includes(option.id) || item.id === option.id);
        const newValue = [...(previousValue ?? [])];

        (isLastCheckedChild && parentOptions.length > 0 ? [...parentOptions, ...options] : [...options]).forEach(
          option => {
            const isHaveOption = newValue.findIndex(newOption => newOption.id === option.id) !== -1;
            if (!isHaveOption) {
              newValue.push(option);
            }
          }
        );

        onChange?.(newValue);
        return newValue;
      });
    }
  };

  const parentCheckedIds = useMemo(() => {
    if (checkableSimple) return [];

    const parentsIds = findManyParentsIds(checkedIds, treeOptions);
    return Array.from(new Set(parentsIds));
  }, [treeOptions, checkedIds, checkableSimple]);

  const parentIdsSet = useMemo(() => {
    const ids = new Set<string>();
    treeOptions.forEach(option => {
      if (option.parentId) ids.add(option.parentId);
    });
    return ids;
  }, [treeOptions]);

  const isLeafNode = useCallback(
    (item: IComboBoxTreeOption) => (maxLevel !== undefined && item.level === maxLevel) || !parentIdsSet.has(item.id),
    [maxLevel, parentIdsSet]
  );

  const renderItem = (item: IComboBoxTreeOption) => {
    const isExpanded = expandIds.includes(item.id);
    const isChecked = checkedIds.includes(item.id);
    const isIndeterminate = parentCheckedIds.includes(item.id);
    const isLastChildren = isLeafNode(item);

    // Базовый паддинг для всех уровней
    const basePadding = 8;
    // Дополнительный паддинг для каждого уровня
    const levelPadding = ((item.level ?? 1) - 1) * 32;
    // Дополнительный паддинг для последнего уровня
    const lastChildrenPadding = isLastChildren ? 16 : 0;
    const optionPadding = basePadding + levelPadding + lastChildrenPadding;

    const handleItemClick = (item: IComboBoxTreeOption, isMultiple: boolean, isLastChildren: boolean) => {
      if (!isMultiple) {
        if (!isLastChildren) {
          handleChangeExpand(item.id);
        } else {
          handleChangeChecked(item);
        }
      }
    };

    return (
      <div
        key={item.id}
        className={clsx(styles['list-item-expanded'], {
          [styles['list-item-active']]: isChecked || isIndeterminate
        })}
        style={{ paddingLeft: optionPadding }}
        onClick={() => handleItemClick(item, isMultiple, isLastChildren)}
      >
        {!isLastChildren ? (
          <Button
            className={styles['list-item-expanded-button']}
            color="ghost"
            variant="secondary"
            onClick={event => {
              event.stopPropagation();
              handleChangeExpand(item.id);
            }}
            iconButton={
              <Icon
                htmlColor="var(--steel-90)"
                name={isExpanded ? 'IconStackExpandedTriangleDown24' : 'IconStackCollapsed24'}
              />
            }
          />
        ) : (
          <div className={styles['list-item-last-children']}></div>
        )}
        {isMultiple && (
          <Checkbox
            checked={checkableSimple ? isChecked : isChecked || isIndeterminate}
            multiple={!checkableSimple && !isChecked && isIndeterminate}
            label={item.label}
            onChange={() => handleChangeChecked(item)}
            className={styles['list-item-checkbox']}
          />
        )}
        {!isMultiple && (
          <Typography
            variant="Body1-Medium"
            className={clsx(styles['list-item-label'], {
              [styles['list-item-active']]: isChecked || isIndeterminate
            })}
          >
            {item.label}
          </Typography>
        )}
      </div>
    );
  };

  const filteredSearchItems = useMemo(() => {
    if (searchValue) {
      const searchFilteredOptions = treeOptions.filter(option =>
        option.label.toLowerCase().includes(searchValue.trim().toLowerCase())
      );

      const searchFilteredOptionsIds = searchFilteredOptions.map(option => option.id);
      const searchFilteredOptionsParentIds = searchFilteredOptions.map(option => option.parentId);
      const parentIds = Array.from(new Set(searchFilteredOptionsParentIds)).reduce<string[]>((result, id) => {
        if (id) {
          const parentsIds = findParentsIds(id, treeOptions);
          return [...result, ...parentsIds];
        }
        return result;
      }, []);
      const uniqParentIds = Array.from(new Set(parentIds));

      const searchUniqIds = Array.from(new Set([...uniqParentIds, ...searchFilteredOptionsIds]));

      const searchOption = treeOptions.filter(option => searchUniqIds.includes(option.id));

      return searchOption;
    }
    return treeOptions;
  }, [searchValue, treeOptions]);

  const expandedFilterOptions = useMemo(
    () => filteredSearchItems.filter(option => option.parentId === null || expandIds.includes(option.parentId ?? '')),
    [filteredSearchItems, expandIds]
  );

  const leafItems = useMemo(() => treeOptions.filter(isLeafNode), [treeOptions, isLeafNode]);

  return (
    <>
      {isLoading && <Spinner />}
      {isSearch && <Search />}
      {isCheckAll && <AllItemsCheckbox treeOptions={treeOptions} items={leafItems} onChange={onChange} />}
      {isVirtualize ? (
        <VirtualizedResizableGrip
          items={expandedFilterOptions}
          renderItem={renderItem}
          classNameContainer={styles['list-container']}
          isCheckAll={isCheckAll}
          isSearch={isSearch}
        />
      ) : (
        <div className={styles['list-container']}>{expandedFilterOptions.map(renderItem)}</div>
      )}
    </>
  );
};

export default ComboTreeList;
