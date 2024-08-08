import React, { FC } from 'react';

import { variantsMapping } from '@components/declaration/enums';
import { Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';
import clsx from 'clsx';

import { IBadgeProps } from './types';

import styles from './Badge.module.scss';

import { EBadgeColors, EBadgeSizes } from './enums';

/**
 * Компонент Badge используется для отображения меток (badges), таких как лейблы, тэги, статусы и т.д. Обычно Badge используют внутри или в непосредственной близости от другого более крупного компонента интерфейса.
 * @component
 * @param {Object} props - Свойства компонента Badge.
 * @param {EBadgeColors} [props.color=EBadgeColors.primary] - Цвет бейджа.
 * @param {EBadgeSizes} [props.size=EBadgeSizes.m] - Размер бейджа.
 * @param {variantsMapping} [props.variant=variantsMapping.solid] - Вариант отображения бейджа.
 * @param {string|number} [props.children] - Контент бейджа.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @returns {JSX.Element} Компонент Badge.
 */

export const Badge: FC<IBadgeProps> = ({
  color = EBadgeColors.primary,
  size = EBadgeSizes.m,
  variant = variantsMapping.solid,
  children,
  className
}: {
  color?: `${EBadgeColors}`;
  size?: `${EBadgeSizes}`;
  variant?: `${variantsMapping}`;
  children?: string | number;
  className?: string;
}): JSX.Element => {
  const sizeClassesMapping: { [K in keyof typeof EBadgeSizes]?: string } = {
    s: styles.compact,
    l: styles.large,
    xs: styles.xs,
    m: undefined
  };

  const typographyVariants: Record<EBadgeSizes, ETypographyVariants> = {
    [EBadgeSizes.l]: ETypographyVariants['Body1-Bold'],
    [EBadgeSizes.m]: ETypographyVariants['Caption-Bold'],
    [EBadgeSizes.s]: ETypographyVariants['Caption-Bold'],
    [EBadgeSizes.xs]: ETypographyVariants['Additional-Bold']
  };

  const badgeClasses = clsx(
    styles.badge,
    styles[color],
    sizeClassesMapping[size],
    variant === 'outline' && styles[`outline-${color}`],
    className
  );

  return (
    <div className={badgeClasses} data-testid="BADGE_WRAPPER">
      <Typography variant={typographyVariants[size]}>{children}</Typography>
    </div>
  );
};

export default Badge;
