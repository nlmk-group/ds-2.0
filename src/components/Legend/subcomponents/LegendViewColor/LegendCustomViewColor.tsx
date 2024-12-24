import { FC } from 'react';

import clsx from 'clsx';

import { ILegendViewColorProps } from './types';

import styles from '../../Legend.module.scss';

import { COMPONENT_NAME } from './constants';

export const LegendCustomViewColor: FC<ILegendViewColorProps> = ({
  color,
  onColorChange,
  isActive = false,
  isSelectable = false
}) => {
  // Стили компонента
  const className = clsx(
    styles['color-container-view'],
    isSelectable ? styles['color-container-view--selectable'] : {},
    COMPONENT_NAME
  );

  return color.viewColor?.({ color, isActive, isSelectable, onColorChange, className }) ?? null;
};

export default LegendCustomViewColor;
