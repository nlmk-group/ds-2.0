import React, { FC } from 'react';

import Badge from '@components/Badge';
import { IBadgeProps, TBadgeColors } from '@components/Badge/types';
import { IChipProps } from '@components/Chip/types';
import { colorsMapping, sizesMapping, variantsMapping } from '@components/declaration/enums';
import { Typography } from '@components/index';
import { ITypographyProps } from '@components/Typography/types';
import clsx from 'clsx';

import styles from './Chip.module.scss';

export const Chip: FC<IChipProps> = ({
  color = colorsMapping.primary,
  size = sizesMapping.m,
  variant = variantsMapping.solid,
  label,
  children,
  suffix,
  className
}) => {
  const compact = size === sizesMapping.s;
  const primary = color === colorsMapping.primary;

  const typographyVariant = compact ? 'Caption-Medium' : 'Body2-Medium';
  const suffixVariant = compact ? 'Caption-Bold' : 'Body2-Bold';
  const suffixColor = primary ? 'hint' : color;

  return (
    <div className={clsx(styles.chip, className)}>
      <Typography
        className={clsx(styles.label, compact ? styles['label-compact'] : styles['label-large'])}
        variant={typographyVariant}
        color="hint"
      >
        {label}
      </Typography>
      <div className={styles.container}>
        <Badge
          color={color as TBadgeColors}
          variant={variant}
          size={size as IBadgeProps['size']}
          className={clsx(styles['clear-style'], compact ? styles.compact : styles.large)}
        >
          {children}
        </Badge>
        {suffix && (
          <Typography
            variant={suffixVariant}
            color={suffixColor as ITypographyProps['color']}
            className={clsx(styles.suffix, !compact && styles['suffix-large'])}
          >
            {suffix}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Chip;
