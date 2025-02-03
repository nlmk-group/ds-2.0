import React, { FC } from 'react';

import Typography from '@components/Typography';
import { ETypographyVariants } from '@components/Typography/enums';
import { clsx } from 'clsx';

import { ILink } from './types';

import styles from './Link.module.scss';

import { sizeMapping, targetMapping } from './enums';
import { getTypography } from './helpers';

/**
 * Компонент Link для создания ссылок с различными стилями и размерами.
 * @component
 * @param {Object} props - Свойства компонента Link.
 * @param {ReactNode} props.children - Содержимое ссылки.
 * @param {string} props.href - URL ссылки.
 * @param {boolean} [props.preventRedirect=false] - Флаг предотвращения перенаправления.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @param {string} [props.size='body'] - Размер ссылки (h1, h2, h3, h4, sub1, sub2, sub3, body, body1, body2, caption).
 * @param {string} [props.target='_parent'] - Целевое окно для открытия ссылки.
 * @param {boolean} [props.disabled=false] - Флаг отключения ссылки.
 * @param {ReactNode} [props.leftIcon] - Иконка слева от текста ссылки.
 * @param {ReactNode} [props.rightIcon] - Иконка справа от текста ссылки.
 * @returns {JSX.Element} Компонент Link.
 */

const Link: FC<ILink> = ({
  children,
  href,
  preventRedirect = false,
  target = targetMapping.parent,
  size = sizeMapping.body,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  className,
  onClick
}) => {
  return (
    <div
      className={clsx(styles.wrapper, disabled && styles.disabled, className)}
      data-ui-link-left-icon
      data-testid="WRAPPER"
    >
      {leftIcon !== null && (
        <div className={clsx(styles['icon-wrapper'], styles[`icon-${size}`])} data-testid="LEFT_ICON">
          {leftIcon}
        </div>
      )}
      <a
        href={preventRedirect ? 'javascript:void(0);' : href}
        target={target as targetMapping}
        rel="noreferrer noopener"
        className={className}
        onClick={onClick}
        data-ui-link
        data-testid="LINK"
      >
        <Typography variant={getTypography(size as sizeMapping) as ETypographyVariants}>{children}</Typography>
      </a>
      {rightIcon !== null && (
        <div
          className={clsx(styles['icon-wrapper'], styles[`icon-${size}`])}
          data-ui-link-right-icon
          data-testid="RIGHT_ICON"
        >
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default Link;
