import React, { FC, useEffect, useState } from 'react';

import {
  Button,
  IconCloseOutlined24,
  IconDoneCheckOutlined24,
  IconInfoOutlined24,
  Typography
} from '@components/index';
import { clsx } from 'clsx';

import { ISnackbarProps } from './types';

import styles from './Snackbar.module.scss';

import { ESnackbarColors, ESnackbarTypes } from './enums';

/**
 * Компонент Snackbar для отображения кратковременных сообщений
 * @component
 * @param {Object} props - Свойства компонента
 * @param {ESnackbarColors} [props.color=ESnackbarColors.sky] - Цвет фона Snackbar
 * @param {variantsMapping} [props.type=ESnackbarType.fill] - Вариант отображения Snackbar
 * @param {() => void} [props.onClose] - Функция закрытия Snackbar
 * @param {() => void} [props.actionButton] - Функция, вызываемая при нажатии на кнопку действия
 * @param {() => void} [props.showCountdown] - Отображение таймера с момента появления Snackbar
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
  onClose,
  color = ESnackbarColors.sky,
  type = ESnackbarTypes.fill,
  autoHideDuration = 0,
  className,
  showCountdown = false,
  startIcon,
  style
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [remainingTime, setRemainingTime] = useState(autoHideDuration);

  useEffect(() => {
    if (autoHideDuration > 0) {
      const interval = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime <= 1000) {
            setIsVisible(false);
            onClose?.();
            clearInterval(interval);
            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [autoHideDuration, onClose]);

  const iconsConfig = {
    [ESnackbarColors.sky]: <IconInfoOutlined24 />,
    [ESnackbarColors.green]: <IconDoneCheckOutlined24 />,
    [ESnackbarColors.red]: <IconInfoOutlined24 />,
    [ESnackbarColors.yellow]: <IconInfoOutlined24 />,
    [ESnackbarColors['light-sky']]: <IconDoneCheckOutlined24 />,
    [ESnackbarColors['light-grey']]: <IconDoneCheckOutlined24 />,
    [ESnackbarColors['light-red']]: <IconInfoOutlined24 />,
    [ESnackbarColors['light-green']]: <IconDoneCheckOutlined24 />
  };

  const icon = startIcon ? iconsConfig[color] : null;

  const isDarkVariant = [
    ESnackbarColors.sky,
    ESnackbarColors.green,
    ESnackbarColors.red,
    ESnackbarColors.yellow
  ].includes(color as ESnackbarColors);

  if (!isVisible) return null;

  const formattedTime = `${String(Math.floor(remainingTime / 60000)).padStart(2, '0')}:${String(
    (remainingTime % 60000) / 1000
  ).padStart(2, '0')}`;

  return (
    <div
      className={clsx(
        styles.snackbar,
        type === ESnackbarTypes.indication ? styles['snackbar-outline'] : styles[`snackbar-${color}`],
        styles[`snackbar-${type}`],
        type === ESnackbarTypes.indication && styles[`indicator-${color}`],
        className
      )}
      style={style}
      data-ui-snackbar-color
      data-testid="SNACKBAR_WRAPPER"
    >
      <div className={styles['text-block']} data-ui-snackbar-text>
        {icon && (
          <div
            className={clsx(styles.icon, {
              [styles['icon-dark']]: type === ESnackbarTypes.indication || !isDarkVariant,
              [styles['icon-light']]: type !== ESnackbarTypes.indication && isDarkVariant,
              [styles['icon-green']]:
                (type === ESnackbarTypes.indication && color === ESnackbarColors.green) ||
                color === ESnackbarColors['light-green'],
              [styles['icon-red']]:
                (type === ESnackbarTypes.indication && color === ESnackbarColors.red) ||
                color === ESnackbarColors['light-red'],
              [styles['icon-yellow']]: type === ESnackbarTypes.indication && color === ESnackbarColors.yellow
            })}
            data-ui-snackbar-icon
          >
            {icon}
          </div>
        )}
        <Typography
          variant="Body1-Medium"
          className={clsx(
            type === ESnackbarTypes.indication || !isDarkVariant ? styles['text-dark'] : styles['text-light']
          )}
          data-ui-snackbar-children
        >
          {children}
        </Typography>
      </div>
      <div className={styles.actions} data-ui-snackbar-actions>
        {actionButton && (
          <Button
            data-testid="SNACKBAR_ACTION"
            color="ghost"
            variant="secondary"
            size="xs"
            onClick={actionButton}
            className={clsx(
              styles.action,
              type === ESnackbarTypes.indication && styles['action-indication'],
              isDarkVariant ? styles['action-dark'] : styles['action-light']
            )}
            data-ui-snackbar-action
          >
            <Typography variant="Body1Mono-Bold">{actionText || 'Посмотреть'}</Typography>
          </Button>
        )}
        {showCountdown && (
          <Typography
            variant="Body1Mono-Medium"
            className={clsx(
              styles.timer,
              type === ESnackbarTypes.indication || !isDarkVariant ? styles['text-dark'] : styles['text-light']
            )}
            data-ui-snackbar-timer
          >
            {formattedTime}
          </Typography>
        )}
        {onClose && (
          <Button
            style={{ padding: '0' }}
            data-testid="SNACKBAR_CLOSE"
            color="ghost"
            variant="secondary"
            size="xs"
            onClick={onClose}
            className={clsx(
              styles.close,
              !isDarkVariant ? styles['close-dark'] : styles['close-light'],
              type === ESnackbarTypes.indication && styles['close-indication']
            )}
            iconButton={<IconCloseOutlined24 />}
            data-ui-snackbar-close
          />
        )}
      </div>
    </div>
  );
};

export default Snackbar;
