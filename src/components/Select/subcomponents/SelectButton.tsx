import React, { FC } from 'react';

import { customInputColors } from '@components/declaration';
import { IconColor } from '@components/Icon/types';
import { Button, IconChevronArrowDownOutlined24 } from '@components/index';
import clsx from 'clsx';

import styles from '../Select.module.scss';

import { ISelectButton } from '../types';

type TIconColor = `${IconColor}` | 'default';

const SelectButton: FC<ISelectButton> = ({ disabled, color, isOpen, toggleDropdown }) => {
  const colorsArray = Object.values(customInputColors);
  const colorIconHelper = (): TIconColor => {
    if (colorsArray.includes(customInputColors[color])) {
      return color;
    }
    return 'primary';
  };

  return (
    <Button
      type="button"
      iconButton={
        <div className={clsx(styles['toggle-list-btn'], isOpen && styles['toggle-list-btn-open'])}>
          <IconChevronArrowDownOutlined24 color={colorIconHelper()} />
        </div>
      }
      color="ghost"
      variant="secondary"
      size="s"
      onClick={toggleDropdown}
      className={clsx(styles.select__arrow, {
        [styles.disabled]: disabled
      })}
      disabled={disabled}
    />
  );
};

export default SelectButton;
