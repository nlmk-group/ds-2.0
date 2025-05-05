import React from 'react';

import { Checkbox, findManyParentsIds } from '@components/index';

import { IAllItemsCheckboxProps } from './types';

import styles from './AllItemsCheckbox.module.scss';

import { useComboBoxValue, useSetComboBoxValue } from '../../context';
import { IComboBoxOption } from '../../types';

const AllItemsCheckbox = <T extends IComboBoxOption>({ items, onChange, treeOptions }: IAllItemsCheckboxProps<T>) => {
  const comboBoxValue = useComboBoxValue();
  const setComboValue = useSetComboBoxValue();

  const comboBoxLength = comboBoxValue?.length ?? 0;
  const allItemsSelected = items.every(leaf => comboBoxValue?.some(v => v.id === leaf.id));
  const someItemsSelected = comboBoxLength > 0 && !allItemsSelected;

  const handleCheckAll = () => {
    let selectedData;

    if (treeOptions) {
      const itemIds = items.map(item => item.id);

      const parentIds = findManyParentsIds(itemIds, treeOptions);

      selectedData = allItemsSelected ? [] : [...items, ...treeOptions.filter(item => parentIds.includes(item.id))];
    } else {
      selectedData = allItemsSelected ? [] : items;
    }

    setComboValue?.(selectedData);
    onChange?.(selectedData);
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
