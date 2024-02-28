import React, { Children, cloneElement, FC, ReactElement } from 'react';

import { IButtonProps } from '@components/Button/types';
import { sizesMappingInput } from '@components/declaration';
import clsx from 'clsx';

import { IButtonGroup } from './types';

import styles from './ButtonGroup.module.scss';

import { gradientMapping, orientationMapping } from './enums';

const ButtonGroup: FC<IButtonGroup> = ({
  children,
  className,
  disabled = false,
  size = sizesMappingInput.m,
  variant = gradientMapping.primary,
  orientation = orientationMapping.horizontal
}) => {
  const renderChildren = () => {
    return Children.map(children as ReactElement<IButtonProps>, (child: ReactElement<IButtonProps>) => {
      return cloneElement(child, {
        variant: variant,
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
