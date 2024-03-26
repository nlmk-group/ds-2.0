import React, { Children, cloneElement, FC, ReactElement } from 'react';
import clsx from 'clsx';

import { IButtonProps } from '@components/Button/types';

import { IButtonGroup } from './types';
import { orientationMapping } from './enums';
import { EFill, ESizes, EVariant } from '@components/Button/enums'

import styles from './ButtonGroup.module.scss';

const ButtonGroup: FC<IButtonGroup> = ({
  children,
  className,
  disabled = false,
  size = ESizes.m,
  variant = EVariant.primary,
  fill = EFill.solid,
  orientation = orientationMapping.horizontal
}) => {
  const renderChildren = () => {
    return Children.map(children as ReactElement<IButtonProps>, (child: ReactElement<IButtonProps>) => {
      return cloneElement(child, {
        variant: variant,
        fill: fill,
        size: size,
        disabled: disabled
      });
    });
  };

  return (
    <div className={clsx(
      styles.wrapper,
      styles[`wrapper-${orientation}`],
      className
    )}
    >
      {renderChildren()}
    </div>
  );
};

export default ButtonGroup;
