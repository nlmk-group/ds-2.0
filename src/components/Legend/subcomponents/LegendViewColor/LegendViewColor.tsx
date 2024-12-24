import React, { FC, MouseEventHandler, useState } from 'react';

import Icon from '@components/Icon';
import clsx from 'clsx';

import { ILegendViewColorProps } from './types';

import styles from '../../Legend.module.scss';

import { COMPONENT_NAME } from './constants';
import { getBackgroundColor } from './utils';

export const LegendViewColor: FC<ILegendViewColorProps> = ({
  color,
  onColorChange,
  isActive = false,
  isSelectable = false
}) => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
    setIsHover(true);
  };

  const onMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setIsHover(false);
  };

  const onClick: MouseEventHandler<HTMLDivElement> = () => {
    onColorChange?.(color);
  };

  // Стили компонента
  const className = clsx(
    styles['color-container-view'],
    styles['color-transition'],
    isActive ? styles['color-container-view--active'] : {},
    isSelectable ? styles['color-container-view--selectable'] : {},
    COMPONENT_NAME
  );
  const backgroundColor = getBackgroundColor(color, { isHover, isActive });

  return (
    <div
      onClick={onClick}
      className={className}
      data-testid={COMPONENT_NAME}
      onMouseLeave={isSelectable ? onMouseLeave : undefined}
      onMouseEnter={isSelectable ? onMouseEnter : undefined}
      style={{ backgroundColor }}
    >
      {isActive ? <Icon htmlColor="var(--steel-90)" name="IconDoneCheckFilled16" /> : null}
    </div>
  );
};
