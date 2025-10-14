import React, { FC } from 'react';

import { IconColor } from '@components/Icon/types';
import { Button, IconChevronArrowDownOutlined24 } from '@components/index';
import clsx from 'clsx';

import { IArrowButtonProps } from './types';

import styles from './ArrowButton.module.scss';

import { EArrowButtonColor } from './enums';

type TIconColor = `${IconColor}`;

const ArrowButton: FC<IArrowButtonProps> = ({
  disabled,
  color = EArrowButtonColor.primary,
  isOpen,
  toggleDropdown,
  buttonRef
}) => {
  const colorsArray = Object.values(EArrowButtonColor);
  const getIconColor = (): TIconColor => {
    if (colorsArray.includes(EArrowButtonColor[color])) {
      return color;
    }
    return EArrowButtonColor.primary;
  };

  return (
    <Button
      ref={buttonRef}
      type="button"
      iconButton={
        <div className={clsx(styles.arrow, isOpen && styles.open)}>
          <IconChevronArrowDownOutlined24 color={getIconColor()} />
        </div>
      }
      color="ghost"
      variant="secondary"
      size="s"
      onMouseDown={toggleDropdown}
      className={clsx(styles.button, {
        [styles.disabled]: disabled
      })}
      disabled={disabled}
      data-ui-select-arrow-button
      data-testid="ARROW_BUTTON"
    />
  );
};

export default ArrowButton;
