import React, { FC, MouseEvent, useState } from 'react';

import Typography from '@components/Typography';
import { clsx } from 'clsx';

import { ISwitch } from './types';

import styles from './Switch.module.scss';

const Switch: FC<ISwitch> = ({
  className = '',
  checked = false,
  onChange = null,
  disabled = false,
  label = '',
  activeIcon = null,
  inactiveIcon = null
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    setIsChecked(!isChecked);
    if (onChange !== null) {
      onChange(e);
    }
  };

  return (
    <label
      className={clsx(className, styles.wrapper, disabled && styles.disabled)}
      tabIndex={!disabled ? 0 : undefined}
      aria-checked={isChecked}
      aria-disabled={disabled}
      role="switch"
      data-testid="SWITCH_WRAPPER"
    >
      <div data-testid="CONTROLLER" className={styles.root} onClick={handleOnClick}>
        <div
          data-testid="TRACK"
          className={clsx(styles['track'], isChecked ? styles['track-active'] : styles['track-inactive'])}
        >
          <div
            data-testid="TOUCH"
            className={clsx(
              styles.touch,
              disabled && !isChecked && styles['touch-disabled'],
              isChecked ? styles.active : styles.inactive
            )}
          >
            <div className={styles.iconWrapper}>
              {isChecked && activeIcon !== null && activeIcon}
              {!isChecked && inactiveIcon !== null && inactiveIcon}
            </div>
            <div
              data-testid="FOCUS"
              className={clsx(styles.focus, isChecked ? styles['focus-active'] : styles['focus-inactive'])}
            />
          </div>
        </div>
      </div>
      {label.length !== 0 && (
        <span className={styles.label} data-testid="LABEL" onClick={handleOnClick}>
          <Typography variant="Body1-Medium">{label}</Typography>
        </span>
      )}
    </label>
  );
};

export default Switch;
