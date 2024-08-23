import React, { FC } from 'react';

import { customInputColors } from '@components/declaration';
import { Typography } from '@components/index';
import clsx from 'clsx';

import type { IPseudoInputProps } from './types';

import styles from './PseudoInput.module.scss';

/**
 * Компонент PseudoInput для отображения текста с меткой в стиле input.
 * @component
 * @param {Object} props - Свойства компонента PseudoInput.
 * @param {JSX.Element | string} props.label - Текст или элемент для метки PseudoInput.
 * @param {ReactNode} props.children - Содержимое PseudoInput.
 * @param {'m' | 's'} [props.size='m'] - Размер компонента PseudoInput.
 * @param {customInputColors} [props.labelColor=customInputColors.default] - Цвет метки PseudoInput.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @returns {JSX.Element} Компонент PseudoInput.
 */

const PseudoInput: FC<IPseudoInputProps> = ({
  label,
  children,
  size = 'm',
  labelColor = customInputColors.default,
  className
}) => {
  const compact = size === 's';
  const colorClassName = styles[labelColor as keyof typeof styles];

  return (
    <div className={clsx(styles.root, compact && styles.compact, className)}>
      <Typography variant="Body2-Medium" className={clsx(styles.label, colorClassName)}>
        {label}
      </Typography>
      <Typography variant="Body1-Medium" color="var(--steel-90)" className={styles.text}>
        {children}
      </Typography>
    </div>
  );
};

export default PseudoInput;
