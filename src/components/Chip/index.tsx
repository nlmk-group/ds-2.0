import React, { FC } from 'react';

import { sizesMapping, variantsMapping } from '@components/declaration/enums';
import { Badge, Box, Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';
import clsx from 'clsx';

import { IChipProps } from './types';

import styles from './Chip.module.scss';

import { EChipColors } from './enums';

/**
 * Компонент Chip для отображения компактной информации с возможностью добавления метки и суффикса.
 * @component
 * @param {Object} props - Свойства компонента Chip.
 * @param {EChipColors} [props.color=EChipColors.brand] - Цвет чипа.
 * @param {TChipSize} [props.size=sizesMapping.m] - Размер чипа.
 * @param {variantsMapping} [props.variant=variantsMapping.solid] - Вариант отображения чипа.
 * @param {string} [props.label] - Метка чипа.
 * @param {string|number} props.children - Основной контент чипа.
 * @param {string} [props.suffix] - Суффикс чипа.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @param {CSSProperties} [props.style] - Inline стили для кастомизации компонента.
 * @returns {JSX.Element} Компонент Chip.
 */

export const Chip: FC<IChipProps> = ({
  color = EChipColors.brand,
  size = sizesMapping.m,
  variant = variantsMapping.solid,
  label,
  children,
  suffix,
  className,
  style
}) => {
  if (!children && children !== 0) return null;

  const suffixVariant: Record<string, ETypographyVariants> = {
    [sizesMapping.m]: ETypographyVariants['Body2-Bold'],
    [sizesMapping.s]: ETypographyVariants['Caption-Bold']
  };

  return (
    <div className={clsx(styles.chip, className)} style={style} data-ui-chip>
      {label && (
        <Typography
          className={styles.label}
          variant={ETypographyVariants['Body2-Medium']}
          color="var(--steel-70)"
          data-ui-chip-label
        >
          {label}
        </Typography>
      )}
      <Box alignItems="center" justifyContent="flex-start" gap="0" width="fit-content" data-ui-chip-content>
        <Badge color={color} variant={variant} size={size}>
          {children}
        </Badge>
        {suffix && (
          <Typography
            variant={suffixVariant[size]}
            color="var(--steel-70)"
            className={styles.suffix}
            data-ui-chip-suffix
          >
            {suffix}
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default Chip;
