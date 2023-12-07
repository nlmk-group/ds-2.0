import React, { FC, MouseEvent } from 'react';
import { clsx } from 'clsx';
import { IToggleButtonGroupItemWithProps } from './types';
import styles from './ToggleButtonGroup.module.scss'
import BadgeHelper from './BadgeHelper'
import IconHelper from './IconHelper';
import { Typography, Tooltip } from '@components/index';

const ToggleButton: FC<IToggleButtonGroupItemWithProps> = ({
  id,
  label,
  size,
  withIcon = false,
  customIcon = null,
  actionNumber = '',
  status,
  disabled = false,
  active = false,
  action = null,
  onBtnClick
}) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    onBtnClick(id, active)
    action !== null && action(e)
  }
  return (
    <div
      onClick={handleClick}
      data-testid='TOGGLE_BUTTON'
      className={clsx(
        styles['btn-wrapper'],
        styles[`btn-size-${size}`],
        styles[`btn-${status}`],
        active && styles[`btn-active-${status}`],
        disabled && styles['btn-disabled']
      )}
    >
      {withIcon && (
        <IconHelper
          size={size}
          customIcon={customIcon}
        />
      )}
      <div className={styles['label-wrapper']}>
        <Tooltip description={label}>
          <Typography variant={'Body1-Bold'}>
            {label}
          </Typography>
        </Tooltip>
      </div>
      {!!actionNumber.length && (
        <BadgeHelper
          size={size}
          status={status}
          actionNumber={actionNumber}
        />
      )}
    </div>
  )
}

export default ToggleButton;
