import React, { FC, ReactElement, ReactNode } from 'react';

import { Button, IconCloseOutlined24, Typography } from '@components/index';
import { clsx } from 'clsx';

import { IAlertProps } from './types';

import styles from './Alert.module.scss';

import { EAlertSeverity } from './enums';
import AlertIcon from './subcomponents/AlertIcon';

/**
 * Компонент Alert для отображения информационных сообщений различных типов.
 * @component
 * @param {Object} props - Свойства компонента Alert.
 * @param {string} props.title - Заголовок сообщения Alert.
 * @param {EAlertSeverity} [props.severity=EAlertSeverity.success] - Тип сообщения (успех, ошибка, предупреждение, информация).
 * @param {ReactNode} [props.children] - Дочерние элементы для отображения дополнительного содержимого.
 * @param {() => void} [props.close] - Функция обратного вызова для закрытия Alert.
 * @param {ReactNode} [props.action] - Дополнительный элемент действия.
 * @param {string} [props.className] - Дополнительные CSS классы.
 * @returns {ReactElement} Компонент Alert.
 */

const Alert: FC<IAlertProps> = ({
  title,
  severity = EAlertSeverity.success,
  children,
  close,
  action,
  className
}: {
  title: string;
  severity?: `${EAlertSeverity}`;
  children?: ReactNode;
  close?: () => void;
  action?: ReactNode;
  className?: string;
}): ReactElement => {
  return (
    <div
      data-testid="ALERT_WRAPPER"
      className={clsx(styles.wrapper, styles[`wrapper-${severity}`], className)}
      data-ui-alert-container
    >
      <div className={styles.content} data-ui-alert-title data-testid="ALERT_TITLE">
        <AlertIcon severity={severity} />
        <Typography variant="Body1Mono-Bold">{title}</Typography>
        <div className={styles['action-wrapper']} data-ui-alert-actions>
          {action && action}
          {close && (
            <Button
              color="ghost"
              variant="secondary"
              onClick={close}
              className={styles.close}
              size="m"
              iconButton={<IconCloseOutlined24 htmlColor="var(--steel-70)" />}
              data-ui-alert-close-button
            />
          )}
        </div>
      </div>
      {children && (
        <div className={styles['content-description']} data-ui-alert-description>
          <Typography variant="Body1Mono-Medium">{children}</Typography>
        </div>
      )}
    </div>
  );
};

export default Alert;
