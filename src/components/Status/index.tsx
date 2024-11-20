import React, { FC } from 'react';

import { TContainerSize } from '@components/Icon/types';
import { Icon, Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';
import clsx from 'clsx';

import { IStatusProps } from './types';

import styles from './Status.module.scss';

import { EStatusColor, EStatusFill, EStatusSize } from './enums';

const childrenVariants: Record<EStatusSize, ETypographyVariants> = {
  [EStatusSize.l]: ETypographyVariants['Subheading3-Medium'],
  [EStatusSize.m]: ETypographyVariants['Body1-Medium'],
  [EStatusSize.s]: ETypographyVariants['Body2-Medium']
};

const iconColors: Record<EStatusColor, string> = {
  [EStatusColor.default]: 'var(--brand-sapphire-60)',
  [EStatusColor.error]: 'var(--spectrum-red-60)',
  [EStatusColor.success]: 'var(--spectrum-green-60)',
  [EStatusColor.warning]: 'var(--spectrum-yellow-60)',
  [EStatusColor.grey]: 'var(--steel-70)'
};

const iconContainerSizes: Record<EStatusFill, Record<EStatusSize, TContainerSize>> = {
  [EStatusFill.clear]: { [EStatusSize.l]: 24, [EStatusSize.m]: 16, [EStatusSize.s]: 16 },
  [EStatusFill.solid]: { [EStatusSize.l]: 24, [EStatusSize.m]: 24, [EStatusSize.s]: 16 }
};

/**
 * Компонент Status для отображения статуса.
 * @component
 * @param {Object} props - Свойства компонента Status.
 * @param {EStatusColor} [props.color=EStatusColors.primary] - Цвет статуса.
 * @param {EStatusSize} [props.size=EStatusSize.m] - Размер статуса.
 * @param {EStatusFill} [props.fill=EStatusFill.solid] - Заливка фона статуса.
 * @param {TIconName | JSX.Element} props.icon - Иконка статуса. Если передана строкой - будет использован компонент Icon с цветом статуса.
 * Если передан JSX.Element - цвет иконки не будет изменен.
 * @param {string} props.children - Основной контент статуса.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @returns {JSX.Element} Компонент Status.
 */
export const Status: FC<IStatusProps> = ({
  color = EStatusColor.default,
  size = EStatusSize.m,
  fill = EStatusFill.solid,
  icon,
  children,
  className
}): JSX.Element => {
  const classes = clsx(
    styles.status,
    className,
    styles[`fill-${fill}`],
    styles[`color-${color}`],
    styles[`size-${size}`]
  );

  return (
    <div className={classes}>
      {typeof icon === 'string' ? (
        <Icon name={icon} containerSize={iconContainerSizes[fill][size]} htmlColor={iconColors[color]} />
      ) : (
        icon
      )}
      {children && (
        <Typography variant={childrenVariants[size]} className={styles.content}>
          {children}
        </Typography>
      )}
    </div>
  );
};

export default Status;
