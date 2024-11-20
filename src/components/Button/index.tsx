import React, { forwardRef } from 'react';

import { EBadgeSizes } from '@components/Badge/enums';
import { ButtonBadge } from '@components/Button/subcomponents';
import Typography from '@components/Typography';
import { ETypographyVariants } from '@components/Typography/enums';
import { clsx } from 'clsx';

import { IButtonProps } from './types';

import styles from './Button.module.scss';

import { EButtonFill, EButtonNodesPosition, EButtonSizes, EButtonVariant } from './enums';

/**
 * Компонент Button для создания кнопок различных стилей и размеров.
 * @component
 * @param {Object} props - Свойства компонента Button.
 * @param {ReactNode} props.children - Содержимое кнопки.
 * @param {EButtonVariant} [props.variant=EButtonVariant.primary] - Вариант стиля кнопки.
 * @param {EButtonFill} [props.fill=EButtonFill.solid] - Тип заливки кнопки.
 * @param {ReactNode} [props.startIcon] - Иконка в начале кнопки.
 * @param {ReactNode} [props.endIcon] - Иконка в конце кнопки.
 * @param {string|number} [props.startBadge] - Бейдж в начале кнопки.
 * @param {string|number} [props.endBadge] - Бейдж в конце кнопки.
 * @param {EButtonSizes} [props.size=EButtonSizes.m] - Размер кнопки.
 * @param {ReactNode} [props.iconButton] - Иконка для кнопки-иконки.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @returns {JSX.Element} Компонент Button.
 */

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      variant = EButtonVariant.primary,
      fill = variant === EButtonVariant.info ? EButtonFill.clear : EButtonFill.solid,
      startIcon,
      endIcon,
      startBadge,
      endBadge,
      size = EButtonSizes.m,
      iconButton,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const sizeClasses = {
      s: { default: styles.compact, icon: styles['icon-button-compact'] },
      xs: { default: styles['extra-compact'], icon: styles['icon-button-extra-compact'] },
      m: { default: null, icon: null }
    };

    const getIconClass = (position: EButtonNodesPosition) =>
      clsx(styles.icon, styles[`icon--${position}--size-${size}`]);

    const typographyVariants: Record<EButtonSizes, ETypographyVariants> = {
      [EBadgeSizes.m]: ETypographyVariants['Body1-Bold'],
      [EBadgeSizes.s]: ETypographyVariants['Body1-Bold'],
      [EBadgeSizes.xs]: ETypographyVariants['Caption-Bold']
    };

    const classes = clsx(
      className,
      styles[`${variant}-${fill}`],
      styles.button,
      fill === EButtonFill.outline && styles.outline,
      iconButton && styles['icon-button'],
      sizeClasses[size].default,
      iconButton && sizeClasses[size].icon
    );

    if (iconButton) {
      return (
        <button ref={ref} className={classes} {...props}>
          {iconButton}
        </button>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {startBadge != null && (
          <span className={getIconClass(EButtonNodesPosition.left)}>
            <ButtonBadge {...{ badge: startBadge, variant, fill, size }} />
          </span>
        )}
        {startIcon && <span className={getIconClass(EButtonNodesPosition.left)}>{startIcon}</span>}
        <Typography className={styles['label-wrapper']} variant={typographyVariants[size]}>
          {children}
        </Typography>
        {endIcon && <span className={getIconClass(EButtonNodesPosition.right)}>{endIcon}</span>}
        {endBadge != null && (
          <span className={getIconClass(EButtonNodesPosition.right)}>
            <ButtonBadge {...{ badge: endBadge, variant, fill, size }} />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
