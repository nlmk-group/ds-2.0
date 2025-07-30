import React, { useCallback, useEffect, useMemo } from 'react';

import { Icon, Input } from '@components/index';
import clsx from 'clsx';

import styles from '../../ComboBox.module.scss';

import { useComboBoxValue, useSetComboBoxValue } from '../../context';
import { IComboBoxInputProps, IComboBoxOption } from '../../types';

const showSelected = (values: IComboBoxOption[]) => {
  if (values.length === 0) return '';
  if (values.length > 1) return `Выбрано ${values.length}`;
  return `${values[0]?.label}`;
};

const InputComboBox = ({
  inputRef,
  isDisabled,
  isOpen,
  label,
  onFocusSearchInput,
  onOpenClick,
  value,
  initialValue,
  onCloseClick,
  displayEnumerated,
  displayChildCount,
  countOnlyLevel,
  className,
  style
}: IComboBoxInputProps) => {
  const comboBoxValue = useComboBoxValue();
  const setComboValue = useSetComboBoxValue();

  const handleIconClick = useCallback(() => {
    if (!isDisabled) {
      if (isOpen) {
        onCloseClick();
      } else {
        onOpenClick();
      }
    }
  }, [isOpen, isDisabled]);

  const inputValue = useMemo(() => {
    if (comboBoxValue && comboBoxValue.length > 1 && displayChildCount) {
      const childValues = comboBoxValue.filter(child => child.parentId);
      return showSelected(childValues);
    }
    if (comboBoxValue && comboBoxValue.length > 1 && countOnlyLevel) {
      if (countOnlyLevel === -1) {
        const parentIdsSet = new Set<string>();
        comboBoxValue.forEach(option => {
          if (option.parentId) {
            parentIdsSet.add(option.parentId);
          }
        });

        const leafValues = comboBoxValue.filter(child => !parentIdsSet.has(child.id));
        return showSelected(leafValues);
      } else {
        const values = comboBoxValue.filter(child => child.level === countOnlyLevel);
        return showSelected(values);
      }
    }

    if (comboBoxValue && comboBoxValue.length > 1 && displayEnumerated) {
      return comboBoxValue.reduce((acc, item) => `${acc}${acc ? ', ' : ''}${item.label}`, '');
    }
    if (comboBoxValue && comboBoxValue.length > 1) {
      return `Выбрано ${comboBoxValue.length}`;
    }
    if (comboBoxValue) {
      const [option] = comboBoxValue;
      return option?.label ?? '';
    }
    return '';
  }, [comboBoxValue, displayChildCount, countOnlyLevel, displayEnumerated]);

  useEffect(() => {
    if (setComboValue && initialValue) {
      setComboValue(initialValue);
    }
  }, []);

  useEffect(() => {
    if (setComboValue && value) {
      setComboValue(value);
    }
  }, [value]);

  return (
    <Input
      inputRef={inputRef}
      disabled={isDisabled}
      value={inputValue}
      className={clsx(styles.input, className)}
      label={label}
      readOnly
      onFocus={onFocusSearchInput}
      icon={
        <div className={styles.inputIcon} onClick={handleIconClick}>
          {isOpen ? <Icon name="IconChevronArrowUpOutlined24" /> : <Icon name="IconChevronArrowDownOutlined24" />}
        </div>
      }
      style={style}
    />
  );
};

export default InputComboBox;
