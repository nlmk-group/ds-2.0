import React, { CSSProperties, FC, ReactNode, useEffect, useState } from 'react';

import { variantsMapping } from '@components/declaration';
import { Button, IconCloseOutlined24, Typography } from '@components/index';
import { clsx } from 'clsx';

import { ISnackbarProps } from './types';

import styles from './Snackbar.module.scss';

import { ESnackbarColors } from './enums';

/**
 * Компонент Snackbar для отображения кратковременных сообщений
 * @component
 * @param {Object} props - Свойства компонента
 * @param {ESnackbarColors} [props.color=ESnackbarColors.dark] - Цвет фона Snackbar
 * @param {variantsMapping} [props.variant=variantsMapping.solid] - Вариант отображения Snackbar
 * @param {() => void} [props.close] - Функция закрытия Snackbar
 * @param {() => void} [props.actionButton] - Функция, вызываемая при нажатии на кнопку действия
 * @param {string} [props.actionText=''] - Текст кнопки действия
 * @param {ReactNode} props.children - Содержимое Snackbar
 * @param {number} [props.autoHideDuration=0] - Время автоматического скрытия в миллисекундах
 * @param {string} [props.className] - Дополнительный CSS класс
 * @param {CSSProperties} [props.style] - Inline стили для компонента
 * @returns {JSX.Element | null} Компонент Snackbar
 */

const Snackbar: FC<ISnackbarProps> = ({
  actionButton,
  actionText = '',
  children,
  close,
  color = ESnackbarColors.dark,
  variant = variantsMapping.solid,
  autoHideDuration = 0,
  className,
  style
}: {
  color?: `${ESnackbarColors}`;
  variant?: `${variantsMapping}`;
  close?: () => void;
  actionButton?: () => void;
  actionText?: string;
  children: ReactNode;
  autoHideDuration?: number;
  className?: string;
  style?: CSSProperties;
}): JSX.Element | null => {
  const [isVisible, setIsVisible] = useState(true);
  const isOutline = variant === variantsMapping.outline;
  const isDarkVariant = [
    ESnackbarColors.dark,
    ESnackbarColors.green,
    ESnackbarColors.red,
    ESnackbarColors.orange
  ].includes(color as ESnackbarColors);

  useEffect(() => {
    if (autoHideDuration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (close) close();
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [autoHideDuration, close]);

  if (!isVisible) return null;

  return (
    <div
      data-testid="SNACKBAR_WRAPPER"
      className={clsx(
        styles.snackbar,
        isOutline ? styles['snackbar-outline'] : styles[`snackbar-${color}`],
        styles[`snackbar-${variant}`],
        isOutline && styles[`indicator-${color}`],
        className
      )}
      style={style}
    >
      <Typography
        variant="Body1-Medium"
        className={clsx(isOutline || !isDarkVariant ? styles['text-dark'] : styles['text-light'])}
      >
        {children}
      </Typography>
      <div className={styles.actions}>
        {actionButton && (
          <Button
            data-testid="SNACKBAR_ACTION"
            variant="primary"
            fill="clear"
            size="m"
            onClick={actionButton}
            className={clsx(
              styles.action,
              isOutline || !isDarkVariant ? styles['action-dark'] : styles['action-light']
            )}
          >
            <Typography variant="Body1-Bold">{actionText.length > 0 ? actionText : 'Посмотреть'}</Typography>
          </Button>
        )}
        {close && (
          <Button
            data-testid="SNACKBAR_CLOSE"
            variant="primary"
            fill="clear"
            size="m"
            onClick={close}
            className={clsx(
              styles.close,
              !isDarkVariant ? styles['close-dark'] : styles['close-light'],
              isOutline && styles['close-outline']
            )}
            iconButton={<IconCloseOutlined24 />}
          />
        )}
      </div>
    </div>
  );
};

export default Snackbar;
