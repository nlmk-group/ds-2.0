import React, { FC } from 'react';

import { IconColor } from '@components/Icon/types';
import { Button, IconChevronArrowDownOutlined24 } from '@components/index';
import clsx from 'clsx';

import { ECustomInputColors, IArrowButtonProps } from './types';

import styles from './ArrowButton.module.scss';

type TIconColor = `${IconColor}`;

const ArrowButton: FC<IArrowButtonProps> = ({
  disabled,
  color = ECustomInputColors.primary,
  isOpen,
  toggleDropdown
}) => {
  const colorsArray = Object.values(ECustomInputColors);
  const getIconColor = (): TIconColor => {
    if (colorsArray.includes(ECustomInputColors[color])) {
      return color;
    }
    return ECustomInputColors.primary;
  };

  return (
    <Button
      type="button"
      iconButton={
        <div className={clsx(styles.arrow, isOpen && styles.open)}>
          <IconChevronArrowDownOutlined24 color={getIconColor()} />
        </div>
      }
      color="ghost"
      variant="secondary"
      size="s"
      onClick={toggleDropdown}
      className={clsx(styles.button, {
        [styles.disabled]: disabled
      })}
      disabled={disabled}
      data-ui-select-arrow-button
    />
  );
};

export default ArrowButton;
