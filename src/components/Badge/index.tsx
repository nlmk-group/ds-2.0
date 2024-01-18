import React, { FC, useMemo } from 'react';

import { colorsMapping, sizesMapping, variantsMapping } from '@components/declaration/enums';
import { Typography } from '@components/index';
import clsx from 'clsx';

import { IBadgeProps } from './types';

import styles from './Badge.module.scss';

export const Badge: FC<IBadgeProps> = ({
  color = colorsMapping.primary,
  size = sizesMapping.m,
  variant = variantsMapping.solid,
  children,
  className
}) => {
  const sizeClassesMapping = {
    [sizesMapping.s]: styles.compact,
    [sizesMapping.m]: null,
    [sizesMapping.l]: styles.large
  };

  const large = size === sizesMapping.l;
  const compact = size === sizesMapping.s;
  const outline = variant === variantsMapping.outline;

  const classes = useMemo(() => {
    return clsx(
      styles[color as keyof typeof styles],
      styles.badge,
      sizeClassesMapping[size],
      outline && styles[`outline-${String(color)}` as keyof typeof styles],
      outline && compact && styles[`compact-outline` as keyof typeof styles],
      className
    );
  }, [color, compact, outline, className]);

  return (
    <div className={classes}>
      <Typography variant={large ? 'Body1-Bold' : 'Caption-Bold'}>{children}</Typography>
    </div>
  );
};

export default Badge;
