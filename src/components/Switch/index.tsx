import React, { ChangeEvent, FC, MouseEvent } from 'react';

import Typography from '@components/Typography';
import { clsx } from 'clsx';

import { ISwitchProps } from './types';

import styles from './Switch.module.scss';

import { ESwitchColors } from './enums';

/**
 * Компонент Switch предоставляет переключатель с возможностью настройки состояния, иконок и метки.
 *
 * @param {object} props - Свойства компонента Switch.
 * @param {string} [props.className] - Дополнительный CSS-класс.
 * @param {boolean} props.checked - Состояние переключателя.
 * @param {(checked: boolean) => void} props.onChange - Функция обработки изменения состояния.
 * @param {boolean} [props.disabled=false] - Отключает переключатель.
 * @param {string} [props.label] - Метка для переключателя.
 * @param {ReactNode} [props.activeIcon] - Иконка для активного состояния.
 * @param {ReactNode} [props.inactiveIcon] - Иконка для неактивного состояния.
 * @param {ESwitchColors} [props.color=ESwitchColors.brand] - Цвет бейджа.
 * @param {CSSProperties} [props.style] - Inline стили для кастомизации компонента.
 * @returns {JSX.Element} Компонент Switch.
 */

const Switch: FC<ISwitchProps> = ({
  className = '',
  checked = false,
  onChange,
  disabled = false,
  label = '',
  activeIcon = null,
  inactiveIcon = null,
  color = ESwitchColors.brand,
  style
}) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onChange(!checked);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onChange(e.target.checked);
  };

  return (
    <div
      className={clsx(styles.switch, className, { [styles.disabled]: disabled })}
      style={style}
      role="switch"
      data-testid="SWITCH"
      data-ui-switch
    >
      <div className={styles.controller} onClick={handleClick} data-ui-switch-controller data-testid="CONTROLLER">
        <div
          className={clsx(styles.track, styles[`track-${color}`], {
            [styles[`track-active-${color}`]]: checked,
            [styles[`track-inactive-${color}`]]: !checked,
            [styles['track-disabled']]: disabled
          })}
          data-ui-switch-track
          data-testid="TRACK"
        >
          <div
            className={clsx(styles.touch, {
              [styles[`touch-active-${color}`]]: checked,
              [styles[`touch-inactive-${color}`]]: !checked,
              [styles['touch-disabled']]: disabled
            })}
            data-ui-swtich-touch
            data-testid="TOUCH"
          >
            <div className={styles.icon}>{checked ? activeIcon : inactiveIcon}</div>
          </div>
        </div>
        {!disabled && (
          <div
            className={clsx(styles.focus, {
              [styles['focus-active']]: checked,
              [styles['focus-inactive']]: !checked
            })}
            data-ui-switch-focus
            data-testid="FOCUS"
          />
        )}
      </div>
      {label && (
        <label
          className={clsx(styles.label, { [styles['label-disabled']]: disabled })}
          data-ui-switch-label
          data-testid="LABEL"
        >
          <input
            type="checkbox"
            checked={checked}
            onChange={handleInputChange}
            className={styles.checkbox}
            data-ui-switch-input
          />
          <Typography variant="Body1-Medium">{label}</Typography>
        </label>
      )}
    </div>
  );
};

export default Switch;
