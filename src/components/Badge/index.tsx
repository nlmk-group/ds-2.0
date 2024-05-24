import React, { FC } from 'react';

import { colorsMapping, variantsMapping } from '@components/declaration/enums';
import { Typography } from '@components/index';
import clsx from 'clsx';

import { IBadgeProps, ESizesBadgeMapping } from './types';

import styles from './Badge.module.scss';

export const Badge: FC<IBadgeProps> = ({
  color = colorsMapping.primary,
  size = ESizesBadgeMapping.m,
  variant = variantsMapping.solid,
  children,
  className
}) => {
  const sizeClassesMapping: { [K in keyof typeof ESizesBadgeMapping]?: string } = {
    s: styles.compact,
    l: styles.large,
    xs: styles.xs
    // m не нужно указывать, если для этого размера класс не задается
  };

  const badgeClasses = clsx(
    styles.badge,
    styles[color],
    sizeClassesMapping[size],
    variant === 'outline' && [styles[`outline-${color}`], size === 's' && styles['compact-outline']],
    className
  );

  return (
    <div className={badgeClasses} data-testid="BADGE_WRAPPER">
      <Typography variant={size === 'l' ? 'Body1-Bold' : 'Caption-Bold'}>{children}</Typography>
    </div>
  );
};

export default Badge;
