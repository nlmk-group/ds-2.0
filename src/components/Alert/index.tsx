import React, { FC } from 'react';

import { Button, Icon, Typography } from '@components/index';
import { clsx } from 'clsx';

import { IAlert, IIconSeverityColor } from './types';

import styles from './Alert.module.scss';

import { severityMapping } from './enums';

const Alert: FC<IAlert> = ({ title, severity = severityMapping.success, children, close = null, className }) => {
  const iconColorHandler = (): string => {
    const severityStyles: IIconSeverityColor = {
      [severityMapping.success]: 'var(--ac-alert-success-icon)',
      [severityMapping.error]: 'var(--ac-alert-error-icon)',
      [severityMapping.warning]: 'var(--ac-alert-warning-icon)',
      [severityMapping.info]: 'var(--ac-alert-info-icon)'
    };

    return severityStyles[severity as keyof IIconSeverityColor] || 'var(--success-green-600)';
  };

  return (
    <div data-testid="ALERT_WRAPPER" className={clsx(styles.wrapper, styles[`standard-${severity}`], className)}>
      <div className={styles.info}>
        <div data-testid="ALERT_TITLE" className={styles.title}>
          <div className={styles['icon-wrapper']}>
            <Icon name="IconInfo24" containerSize={24} htmlColor={iconColorHandler()} />
          </div>
          {title}
          {!!close && (
            <div className={styles['action-wrapper']}>
              <Button variant="text" onClick={typeof close === 'boolean' ? undefined : close}>
                <Icon name="IconClose24" containerSize={24} htmlColor="var(--text-primary)" />
              </Button>
            </div>
          )}
        </div>
        <div className={styles['content-wrapper']}>
          <Typography variant="Body2-Medium">{children}</Typography>
        </div>
      </div>
    </div>
  );
};

export default Alert;
