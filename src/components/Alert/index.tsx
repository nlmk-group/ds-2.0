import React, { FC, ReactElement, ReactNode } from 'react';

import {
  Button,
  IconCloseOutlined16,
  Typography
} from '@components/index';
import { clsx } from 'clsx';

import { IAlertProps, IIconSeverityColor } from './types';

import styles from './Alert.module.scss';

import { EAlertSeverity } from './enums';
import { Icon } from '@components/Icon';

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
  const AlertIcon = () => {
    const severityStyles: IIconSeverityColor = {
      [EAlertSeverity.success]: 'var(--spectrum-green-60)',
      [EAlertSeverity.error]: 'var(--spectrum-red-60)',
      [EAlertSeverity.warning]: 'var(--spectrum-orange-60)',
      [EAlertSeverity.info]: 'var(--spectrum-sky-60)'
    };

    switch (severity) {
      case EAlertSeverity.success:
        return <Icon name="IconSuccessOutlined24" htmlColor={severityStyles[severity]} />;
      case EAlertSeverity.error:
        return <Icon name="IconAttentionWarningAlertErrorOutlined24" htmlColor={severityStyles[severity]} />;
      case EAlertSeverity.warning:
        return <Icon name="IconAttentionWarningAlertErrorOutlined24" htmlColor={severityStyles[severity]} />;
      case EAlertSeverity.info:
        return <Icon name="IconInfoOutlined24" htmlColor={severityStyles[severity]} />;
      default:
        return <Icon name="IconSuccessOutlined24" htmlColor={severityStyles[severity] || 'var(--spectrum-green-60)'} />;
    }
  };

  return (
    <div data-testid="ALERT_WRAPPER" className={clsx(styles.wrapper, styles[`wrapper-${severity}`], className)}>
      <div data-testid="ALERT_TITLE" className={styles.content}>
        <AlertIcon />
        <Typography variant="Body2-Bold">{title}</Typography>
        <div className={styles['action-wrapper']}>
          {action && action}
          {close && (
            <Button
              variant="grey"
              fill="clear"
              onClick={close}
              className={styles.close}
              size="xs"
              iconButton={<IconCloseOutlined16 htmlColor="var(--steel-80)" />}
            />
          )}
        </div>
      </div>
      {children && (
        <div className={styles['content-description']}>
          <Typography variant="Body2-Medium">{children}</Typography>
        </div>
      )}
    </div>
  );
};

export default Alert;
