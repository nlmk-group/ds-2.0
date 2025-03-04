import React from 'react';

import { Checkbox } from '@components/index';

import { IAllItemsCheckboxProps } from './types';

import styles from './AllItemsCheckbox.module.scss';

import { useComboBoxValue, useSetComboBoxValue } from '../../context';
import { IComboBoxOption } from '../../types';

const AllItemsCheckbox = <T extends IComboBoxOption>({ items, onChange }: IAllItemsCheckboxProps<T>) => {
  const comboBoxValue = useComboBoxValue();
  const setComboValue = useSetComboBoxValue();

  const comboBoxLength = comboBoxValue?.length ?? 0;
  const allItemsSelected = comboBoxLength === items.length;
  const someItemsSelected = comboBoxLength > 0 && !allItemsSelected;

  const handleCheckAll = () => {
    const newValue = allItemsSelected ? [] : items;
    setComboValue?.(newValue);
    onChange?.(newValue);
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
