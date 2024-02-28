import React, { FC } from 'react';
import { clsx } from 'clsx';
import { ISnackbar } from './types';
import styles from './Snackbar.module.scss';
import ActionButton from './ActionBtn';
import CloseBtn from './CloseBtn';
import { colorMapping } from './enums';
import IconHelper from './IconHelper';
import { Typography } from '@components/.'

const Snackbar: FC<ISnackbar> = ({
  className,
  actionButton = null,
  actionButtonText = '',
  bgOpacity = 100,
  children,
  close = null,
  color = colorMapping.grey,
  customIcon = null,
  withIcon = false
}) => {

  return (
    <div
      className={clsx(
        styles.wrapper,
        styles[`background-${color}`],
        className
      )}
      data-testid='SNACKBAR_WRAPPER'
      style={{ opacity: `${bgOpacity}%` }}
    >
      {withIcon && (
        <div data-testid={`SNACKBAR_ICON_${color}`}>
          {customIcon !== null ? customIcon : <IconHelper color={color as colorMapping} />}
        </div>
      )}
      <Typography variant='Body1-Medium'>
        {children}
      </Typography>
      <div className={styles['btn-wrapper']}>
        {actionButton !== null && (
          <ActionButton color={color} actionButtonText={actionButtonText} actionButton={actionButton} />
        )}
        {close !== null && <CloseBtn close={close} color={color} />}
      </div>
    </div>
  );
};

export default Snackbar;
