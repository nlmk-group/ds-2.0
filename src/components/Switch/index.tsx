import React, {
  FC,
  MouseEvent,
  useState,
  useEffect
} from 'react';

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

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    setIsChecked(!isChecked);
    if (onChange !== null) {
      onChange(e);
    }
  };

  const trackStyleHelper = () => {
    if (isChecked) {
      if (disabled) {
        return styles['track-active-disabled']
      } else {
        return styles['track-active']
      }
    } else {
      if (disabled) {
        return styles['track-inactive-disabled']
      } else {
        return styles['track-inactive']
      }
    }
  }

  return (
    <label
      className={clsx(styles.wrapper, disabled && styles.disabled, className)}
      tabIndex={!disabled ? 0 : undefined}
      aria-checked={isChecked}
      aria-disabled={disabled}
      role="switch"
      data-testid="SWITCH_WRAPPER"
    >
      <div data-testid="CONTROLLER" className={styles.root} onClick={handleOnClick}>
        <div
          data-testid="TRACK"
          className={clsx(
            styles['track'],
            trackStyleHelper()
          )}
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
          </div>
        </div>
        <div
          data-testid="FOCUS"
          className={clsx(styles.focus, isChecked ? styles['focus-active'] : styles['focus-inactive'])}
        />
      </div>
      {label.length !== 0 && (
        <span
          className={clsx(
            styles.label,
            disabled && styles['label-disabled']
          )}
          data-testid="LABEL"
          onClick={handleOnClick}
        >
          <Typography variant="Body1-Medium">{label}</Typography>
        </span>
      )}
    </label>
  );
};

export default Switch;
