import React, { FC, MouseEvent } from 'react';

import Typography from '@components/Typography';
import { clsx } from 'clsx';

import { ISwitch } from './types';

import styles from './Switch.module.scss';

const Switch: FC<ISwitch> = ({
  className = '',
  checked = false,
  onChange,
  disabled = false,
  label = '',
  activeIcon = null,
  inactiveIcon = null
}) => {
  const handleOnChange = (e: MouseEvent<HTMLDivElement>) => {
    if (onChange && !disabled) {
      onChange(e, !checked);
    }
  };

  const getTrackStyle = () => {
    if (checked) {
      return disabled ? styles['track-active-disabled'] : styles['track-active'];
    }
    return disabled ? styles['track-inactive-disabled'] : styles['track-inactive'];
  };

  return (
    <div
      className={clsx(styles.wrapper, disabled && styles.disabled, className)}
      tabIndex={!disabled ? 0 : undefined}
      aria-checked={checked}
      aria-disabled={disabled}
      role="switch"
      data-testid="SWITCH_WRAPPER"
    >
      <div data-testid="CONTROLLER" className={styles.root} onClick={handleOnChange}>
        <div data-testid="TRACK" className={clsx(styles['track'], getTrackStyle())}>
          <div
            data-testid="TOUCH"
            className={clsx(
              styles.touch,
              disabled && !checked && styles['touch-disabled'],
              checked ? styles.active : styles.inactive
            )}
          >
            <div className={styles['icon-wrapper']}>
              {checked && activeIcon !== null && activeIcon}
              {!checked && inactiveIcon !== null && inactiveIcon}
            </div>
          </div>
        </div>
        <div
          data-testid="FOCUS"
          className={clsx(styles.focus, checked ? styles['focus-active'] : styles['focus-inactive'])}
        />
      </div>
      {label.length > 0 && (
        <label className={clsx(styles.label, disabled && styles['label-disabled'])} data-testid="LABEL">
          <input type="checkbox" onClick={handleOnChange} checked={checked} className={styles.checkbox} />
          <Typography variant="Body1-Medium">{label}</Typography>
        </label>
      )}
    </div>
  );
};

export default Switch;
