import React, { forwardRef } from 'react';

import { Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';
import { clsx } from 'clsx';

import { IButtonProps } from './types';

import styles from './Button.module.scss';

import { EButtonColor, EButtonNodesPosition, EButtonSize, EButtonVariant } from './enums';
import { ButtonBadge } from './subcomponents';

/**
 * Компонент Button для создания кнопок различных стилей и размеров.
 * @component
 * @param {Object} props - Свойства компонента Button.
 * @param {ReactNode} [props.children] - Содержимое кнопки.
 * @param {EButtonVariant} [props.variant=EButtonVariant.primary] - Вариант стиля кнопки.
 * @param {EButtonColor} [props.color=EButtonColor.brand] - Цветовая схема кнопки.
 * @param {ReactNode} [props.startIcon] - Иконка в начале кнопки.
 * @param {ReactNode} [props.endIcon] - Иконка в конце кнопки.
 * @param {string|number} [props.startBadge] - Бейдж в начале кнопки.
 * @param {string|number} [props.endBadge] - Бейдж в конце кнопки.
 * @param {EButtonSize} [props.size=EButtonSize.m] - Размер кнопки.
 * @param {ReactNode} [props.iconButton] - Иконка для кнопки-иконки.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @param {CSSProperties} [props.style] - Inline стили для кастомизации компонента.
 * @returns {JSX.Element} Компонент Button.
 */

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      variant = EButtonVariant.primary,
      color = EButtonColor.brand,
      startIcon,
      endIcon,
      startBadge = null,
      endBadge = null,
      size = EButtonSize.m,
      iconButton,
      className,
      style,
      ...props
    },
    ref
  ): JSX.Element => {
    const config = {
      size: {
        [EButtonSize.m]: {
          typographyVariant: ETypographyVariants['Body1-Bold'],
          buttonClass: null,
          iconButtonClass: null
        },
        [EButtonSize.s]: {
          typographyVariant: ETypographyVariants['Body1-Bold'],
          buttonClass: styles.compact,
          iconButtonClass: styles['icon-button-compact']
        },
        [EButtonSize.xs]: {
          typographyVariant: ETypographyVariants['Body2-Bold'],
          buttonClass: styles['extra-compact'],
          iconButtonClass: styles['icon-button-extra-compact']
        }
      }
    } as const;

    const getIconClass = (position: EButtonNodesPosition) =>
      clsx(styles.icon, styles[`icon--${position}--size-${size}`]);

    const classes = clsx(
      className,
      styles.button,
      styles[`${color}-${variant}`],
      iconButton && styles['icon-button'],
      config.size[size].buttonClass,
      iconButton && config.size[size].iconButtonClass
    );

    if (iconButton) {
      return (
        <button ref={ref} className={classes} {...props} data-ui-icon-button>
          {iconButton}
        </button>
      );
    }

    return (
      <button ref={ref} className={classes} style={style} {...props} data-ui-button>
        {startBadge != null && (
          <span className={getIconClass(EButtonNodesPosition.left)} data-ui-button-badge-left>
            <ButtonBadge badge={startBadge} size={size} />
          </span>
        )}
        {startIcon && <span className={getIconClass(EButtonNodesPosition.left)}>{startIcon}</span>}
        <Typography className={styles.typography} variant={config.size[size].typographyVariant} data-ui-button-text>
          {children}
        </Typography>
        {endIcon && <span className={getIconClass(EButtonNodesPosition.right)}>{endIcon}</span>}
        {endBadge != null && (
          <span className={getIconClass(EButtonNodesPosition.right)} data-ui-button-badge-right>
            <ButtonBadge badge={endBadge} size={size} />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
