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
 * @param {EBadgeColors} [props.color=EBadgeColors.brand] - Цвет бейджа.
 * @param {EBadgeSizes} [props.size=EBadgeSizes.m] - Размер бейджа.
 * @param {variantsMapping} [props.variant=variantsMapping.solid] - Вариант отображения бейджа.
 * @param {string|number} [props.children] - Контент бейджа.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @param {CSSProperties} [props.style] - Inline стили для кастомизации компонента.
 * @returns {JSX.Element} Компонент Badge.
 */

export const Badge: FC<IBadgeProps> = ({
  color = EBadgeColors.brand,
  size = EBadgeSizes.m,
  variant = variantsMapping.solid,
  children,
  className,
  style
}) => {
  if (!children && children !== 0) return null;

  const sizeConfig = {
    [EBadgeSizes.l]: {
      typographyVariant: ETypographyVariants['Body1-Bold'],
      className: styles.large
    },
    [EBadgeSizes.m]: {
      typographyVariant: ETypographyVariants['Caption-Bold'],
      className: undefined
    },
    [EBadgeSizes.s]: {
      typographyVariant: ETypographyVariants['Caption-Bold'],
      className: styles.compact
    },
    [EBadgeSizes.xs]: {
      typographyVariant: ETypographyVariants['Additional-Bold'],
      className: styles.xs
    }
  };

  const badgeClasses = clsx(
    styles.badge,
    styles[color],
    sizeConfig[size].className,
    variant === 'outline' && styles[`outline-${color}`],
    className
  );

  return (
    <div className={badgeClasses} data-testid="BADGE_WRAPPER" data-ui-badge style={style}>
      <Typography variant={sizeConfig[size].typographyVariant} data-ui-badge-content>
        {children}
      </Typography>
    </div>
  );
};

export default Badge;
