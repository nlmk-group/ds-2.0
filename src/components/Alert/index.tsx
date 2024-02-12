import React, { FC } from 'react';

import { Button, Icon, Typography } from '@components/index';
import { clsx } from 'clsx';

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

  return (
    <div data-testid="ALERT_WRAPPER" className={clsx(styles.wrapper, styles[`standard-${severity}`], className)}>
      <div className={styles.info}>
        <div data-testid="ALERT_TITLE" className={styles['content-main']}>
          <Icon name="IconInfo24" containerSize={24} htmlColor={iconColorHandler()} />
          <Typography variant="Body2-Bold">
            {title}
          </Typography>
          
          <div className={styles['action-wrapper']}>
            {action !== null && action}
            {!!close && close !== null && (
              <Button
                variant='text'
                onClick={close}
                className={styles['btn-close']}
                size='xs'
              >
                <Icon
                  name="IconClose24"
                  containerSize={16}
                  htmlColor='var(--ac-icon-grey)'
                />
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
