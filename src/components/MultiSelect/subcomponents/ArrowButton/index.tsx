import React, { FC } from 'react';

import { IconColor } from '@components/Icon/types';
import { Icon } from '@components/index';

import { IArrowButtonProps } from './types';

import styles from './ArrowButton.module.scss';

/**
 * Компонент стрелки для выпадающего списка MultiSelect
 *
 * @param {IArrowButtonProps} props - Свойства компонента
 * @returns {JSX.Element} Компонент ArrowButton
 */
const ArrowButton: FC<IArrowButtonProps> = ({ isOpen, color, disabled, toggleDropdown }) => {
  return (
    <button
      type="button"
      className={styles.dropdownButton}
      onClick={toggleDropdown}
      disabled={disabled}
      data-ui-multi-select-dropdown-button
    >
      <Icon
        name={isOpen ? 'IconChevronArrowUpOutlined16' : 'IconChevronArrowDownOutlined16'}
        color={(disabled && 'disabled') || (color as IconColor) || 'primary'}
        className={styles.dropdownIcon}
        containerSize={24}
      />
    </button>
  );
};

export default ArrowButton;
