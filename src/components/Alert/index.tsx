import React, { FC } from 'react';
import { clsx } from 'clsx';
import {
  Button,
  IconAttentionWarningAlertErrorOutlined24,
  IconCloseOutlined24,
  IconInfoOutlined24,
  IconSuccessOutlined24,
  Typography
} from '@components/index';

import { IAlert, IIconSeverityColor } from './types';

import styles from './Alert.module.scss';

import { severityMapping } from './enums';

const Alert: FC<IAlert> = ({
  title,
  severity = severityMapping.success,
  children = null,
  close = null,
  action = null,
  className
}) => {
  const iconColorHandler = (): string => {
    const severityStyles: IIconSeverityColor = {
      [severityMapping.success]: 'var(--ac-alert-success-icon)',
      [severityMapping.error]: 'var(--ac-alert-error-icon)',
      [severityMapping.warning]: 'var(--ac-alert-warning-icon)',
      [severityMapping.info]: 'var(--ac-alert-info-icon)'
    };

    return severityStyles[severity as keyof IIconSeverityColor] || 'var(--success-green-600)';
  };


  const IconHelper = ({htmlColor}: {htmlColor: string}) => {
    switch(severity) {
      case severityMapping.success:
        return <IconSuccessOutlined24 htmlColor={htmlColor} />;
      case severityMapping.error:
        return <IconAttentionWarningAlertErrorOutlined24 htmlColor={htmlColor} />;
      case severityMapping.warning:
        return <IconAttentionWarningAlertErrorOutlined24 htmlColor={htmlColor} />;
      case severityMapping.info:
        return <IconInfoOutlined24 htmlColor={htmlColor} />;
      default:
        return <IconInfoOutlined24 htmlColor={htmlColor} />;
    }
  }

  return (
    <div data-testid="ALERT_WRAPPER" className={clsx(styles.wrapper, styles[`standard-${severity}`], className)}>
      <div className={styles.info}>
        <div data-testid="ALERT_TITLE" className={styles['content-main']}>
          <div className={styles['icon-wrapper']}>
            <IconHelper htmlColor={iconColorHandler()}/>
          </div>
          <Typography variant="Body2-Bold">{title}</Typography>

          <div className={styles['action-wrapper']}>
            {action !== null && action}
            {!!close && close !== null && (
              <Button variant="primary" fill="clear" onClick={close} className={styles['btn-close']} size="xs">
                <IconCloseOutlined24 />
              </Button>
            )}
          </div>
        </div>
        {children !== null && (
          <div className={styles['content-wrapper']}>
            <Typography variant="Body2-Medium">{children}</Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
