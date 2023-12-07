import React, { FC } from 'react';
import { ISnackbar } from './types';
import styles from './Snackbar.module.scss';
import { clsx } from 'clsx';
import { colorMapping } from './enums';
import IconHelper from './IconHelper';
import ActionButton from './ActionBtn';
import CloseBtn from './CloseBtn';

const Snackbar: FC<ISnackbar> = ({
  actionButton = null,
  actionButtonText = '',
  bgOpacity = 100,
  children,
  close = null,
  color = colorMapping.grey,
  customIcon = null,
  withIcon = false
}) => {
  const darkRedGreenCondition = [
    colorMapping.dark,
    colorMapping.red,
    colorMapping.green
  ];

  return (
    <div
      className={clsx(styles.wrapper, styles[`background-${color}`])}
      data-testid='SNACKBAR_WRAPPER'
      style={{ opacity: `${bgOpacity}%` }}
    >
      {withIcon && (
        <div data-testid={`SNACKBAR_ICON_${color}`}>
          {
            customIcon !== null
              ? customIcon
              : <IconHelper color={color as colorMapping} />
          }
        </div>
      )}
      <div
        className={styles['child-wrapper']}
        style={{
          color: darkRedGreenCondition.includes(color as colorMapping)
            ? 'var(--default-second)'
            : 'var(--text-grey-900)'
        }}
      >
        {children}
      </div>
      <div className={styles['btn-wrapper']}>
        {actionButton !== null && (
          <ActionButton
            color={color}
            actionButtonText={actionButtonText}
            actionButton={actionButton}
          />
        )}
        {close !== null && (
          <CloseBtn close={close} color={color} />
        )}
      </div>
    </div>
  )
}

export default Snackbar