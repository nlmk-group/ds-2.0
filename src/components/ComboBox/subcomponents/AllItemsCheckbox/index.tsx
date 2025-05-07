import React, { useMemo } from 'react';

import { Checkbox, findManyParentsIds } from '@components/index';

import { IAllItemsCheckboxProps } from './types';

import styles from './AllItemsCheckbox.module.scss';

import { useComboBoxValue, useSetComboBoxValue } from '../../context';
import { IComboBoxOption } from '../../types';

const AllItemsCheckbox = <T extends IComboBoxOption>({ items, onChange, treeOptions }: IAllItemsCheckboxProps<T>) => {
  const comboBoxValue = useComboBoxValue();
  const setComboValue = useSetComboBoxValue();

  const { allItemsSelected, someItemsSelected } = useMemo(() => {
    const allSelected = items.length > 0 && items.every(item => comboBoxValue?.some(value => value.id === item.id));
    const someSelected = (comboBoxValue?.length ?? 0) > 0 && !allSelected;

    return { allItemsSelected: allSelected, someItemsSelected: someSelected };
  }, [items, comboBoxValue]);

  const handleCheckAll = () => {
    if (allItemsSelected) {
      setComboValue?.([]);
      onChange?.([]);
      return;
    }

    if (treeOptions) {
      const itemIds = items.map(item => item.id);
      const parentIds = findManyParentsIds(itemIds, treeOptions);
      const parentItems = treeOptions.filter(item => parentIds.includes(item.id));

      const selectedData = [...items, ...parentItems];
      setComboValue?.(selectedData);
      onChange?.(selectedData);
    } else {
      setComboValue?.(items);
      onChange?.(items);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Checkbox
        checked={allItemsSelected || someItemsSelected}
        multiple={someItemsSelected}
        label="Выбрать все"
        onChange={handleCheckAll}
        className={styles.checkbox}
      />
    </div>
  );
};

export default AllItemsCheckbox;
