import React, { CSSProperties, FC, ReactNode } from 'react';

import clsx from 'clsx';

import { ITypographyProps } from './types';

import styles from './Typography.module.scss';

import { ETypographyVariants } from './enums';

/**
 * Компонент Typography для стилизованного отображения текста.
 * @component
 * @param {Object} props - Свойства компонента Typography.
 * @param {ETypographyVariants} [props.variant=ETypographyVariants.Body1] - Вариант типографики.
 * @param {React.ReactNode} props.children - Текстовое содержимое.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @param {CSSProperties['color']} [props.color] - Цвет текста.
 * @param {CSSProperties} [props.style] - Дополнительные встроенные стили.
 * @returns {JSX.Element} Компонент Typography.
 */

const Typography: FC<ITypographyProps> = ({
  variant = ETypographyVariants.Body1,
  children,
  className,
  color,
  style,
  ...props
}: {
  variant?: `${ETypographyVariants}`;
  children: ReactNode;
  className?: string;
  color?: CSSProperties['color'];
  style?: CSSProperties;
}): JSX.Element => {
  const variantClass = styles[`typography--variant-${variant}`];

  return (
    <span
      data-testid="typography-wrapper"
      className={clsx(variantClass, styles.typography, className)}
      style={{ color, ...style }}
      {...props}
    >
      {children}
    </span>
  );
};

export default Typography;
