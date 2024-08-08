import React, { FC } from 'react';

import { sizesMapping, variantsMapping } from '@components/declaration/enums';
import { Badge, Box, Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';
import clsx from 'clsx';

import { ChipSize, IChipProps } from './types';

import styles from './Chip.module.scss';

import { EChipColors } from './enums';

/**
 * Компонент Chip для отображения компактной информации с возможностью добавления метки и суффикса.
 * @component
 * @param {Object} props - Свойства компонента Chip.
 * @param {EChipColors} [props.color=EChipColors.primary] - Цвет чипа.
 * @param {ChipSize} [props.size=sizesMapping.m] - Размер чипа.
 * @param {variantsMapping} [props.variant=variantsMapping.solid] - Вариант отображения чипа.
 * @param {string} [props.label] - Метка чипа.
 * @param {string|number} props.children - Основной контент чипа.
 * @param {string} [props.suffix] - Суффикс чипа.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @returns {JSX.Element} Компонент Chip.
 */

export const Chip: FC<IChipProps> = ({
  color = EChipColors.primary,
  size = sizesMapping.m,
  variant = variantsMapping.solid,
  label,
  children,
  suffix,
  className
}: {
  color?: `${EChipColors}`;
  size?: ChipSize;
  variant?: `${variantsMapping}`;
  label?: string;
  children: string | number;
  suffix?: string;
  className?: string;
}): JSX.Element => {
  const suffixVariant: Record<string, ETypographyVariants> = {
    [sizesMapping.m]: ETypographyVariants['Body2-Bold'],
    [sizesMapping.s]: ETypographyVariants['Caption-Bold']
  };

  return (
    <div className={clsx(styles.chip, className)}>
      {label && (
        <Typography className={styles.label} variant={ETypographyVariants['Body2-Medium']} color="var(--steel-70)">
          {label}
        </Typography>
      )}
      <Box alignItems="center" justifyContent="flex-start" gap="0">
        <Badge color={color} variant={variant} size={size}>
          {children}
        </Badge>
        {suffix && (
          <Typography variant={suffixVariant[size]} color="var(--steel-70)" className={styles.suffix}>
            {suffix}
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default Chip;
