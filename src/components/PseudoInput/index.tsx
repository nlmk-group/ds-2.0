import React, { forwardRef } from 'react';

import { customInputColors } from '@components/declaration';
import { Badge, Typography } from '@components/index';
import clsx from 'clsx';

import type { IPseudoInputProps } from './types';

import styles from './PseudoInput.module.scss';

import { EPseudoInputSizes } from './enums';
import { Suffix } from './subcomponents/Suffix';
import { EBadgeSizes } from '@components/Badge/enums';

/**
 * Компонент PseudoInput для отображения текста с меткой в стиле input.
 * @component
 * @param {Object} props - Свойства компонента PseudoInput.
 * @param {JSX.Element | string} props.label - Текст или элемент для метки PseudoInput.
 * @param {ReactNode} props.children - Содержимое PseudoInput.
 * @param {'m' | 's' | 'xs'} [props.size='m'] - Размер компонента PseudoInput.
 * @param {customInputColors} [props.labelColor=customInputColors.default] - Цвет метки PseudoInput.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @param {ReactNode} [props.suffix] - Дополнительный текст справа от псевдо-ввода.
 * @param {string | number} [props.badgeChildren] - Содержимое бейджа.
 * @param {boolean} [props.fullWidth] - Флаг, добавляющий ширину в 100%.
 * @param {EBadgeColors} [props.color=EBadgeColors.brand] - Цвет бейджа (пропс от Badge).
 * @param {variantsMapping} [props.variant=variantsMapping.solid] - Вариант отображения бейджа (пропс от Badge).
 * @returns {JSX.Element} Компонент PseudoInput.
 */

export const PseudoInput = forwardRef<HTMLDivElement, IPseudoInputProps>(
  (
    {
      label,
      children,
      size = EPseudoInputSizes.m,
      labelColor = customInputColors.default,
      className,
      suffix,
      badgeChildren,
      fullWidth,
      color,
      variant,
      ...badgeProps
    },
    ref
  ) => {
    const compact = size === 's';
    const small = size === 'xs';
    const badgeSize = size === EPseudoInputSizes.m ? EBadgeSizes.l : EBadgeSizes.s;
    const colorClassName = styles[labelColor as keyof typeof styles];

    return (
      <div
        className={clsx(styles.pseudo, compact && styles.s, small && styles.xs, className)}
        style={fullWidth ? { width: '100%' } : {}}
        data-ui-pseudo-input
        ref={ref}
      >
        <Typography
          variant={small ? 'Caption-Medium' : 'Body2-Medium'}
          className={clsx(styles.label, colorClassName)}
          data-ui-pseudo-input-label
        >
          {label}
        </Typography>
        <div className={clsx(styles.suffix)} data-ui-pseudo-input-suffix-container>
          <Typography variant="Body1-Medium" color="var(--steel-90)" data-ui-pseudo-input-children>
            {children}
          </Typography>
          {badgeChildren && (
            <Badge color={color} variant={variant} {...badgeProps} size={badgeSize} data-ui-pseudo-input-badge>
              {badgeChildren}
            </Badge>
          )}
          {suffix && <Suffix data-ui-pseudo-input-suffix>{suffix}</Suffix>}
        </div>
      </div>
    );
  }
);

PseudoInput.displayName = 'PseudoInput';

export default PseudoInput;
