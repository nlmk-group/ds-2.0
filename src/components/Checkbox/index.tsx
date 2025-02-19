import React, { FC } from 'react';

import { IconDeleteMinusFilled16, IconDoneCheckFilled16, Typography } from '@components/index';
import clsx from 'clsx';

import type { ICheckboxProps } from './types';

import styles from './Checkbox.module.scss';

import { ECheckboxColors } from './enums';

/**
 * Компонент Checkbox для создания чекбокса с меткой.
 * @component
 * @param {Object} props - Свойства компонента Checkbox.
 * @param {string} [props.id] - Уникальный идентификатор чекбокса.
 * @param {string} [props.label] - Текст метки чекбокса.
 * @param {boolean} [props.checked] - Флаг, указывающий, выбран ли чекбокс.
 * @param {boolean} [props.disabled=false] - Флаг, указывающий, отключен ли чекбокс.
 * @param {ECheckboxColors} [props.color='brand'] - Цветовой вариант компонента.
 * @param {boolean} [props.multiple=false] - Флаг множественного выбора (показывает минус вместо галочки).
 * @param {boolean} [props.colored=false] - Флаг для цветовой индикации (например, показать изменилось ли значение).
 * @param {function} [props.onChange] - Функция обработки изменения состояния.
 * @param {string} [props.value] - Значение чекбокса.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @param {CSSProperties} [props.style] - Inline стили для кастомизации компонента.
 * @returns {JSX.Element} Компонент Checkbox.
 */

const Checkbox: FC<ICheckboxProps> = ({
  id,
  label,
  checked,
  disabled = false,
  color = ECheckboxColors.brand,
  multiple = false,
  colored = false,
  onChange,
  value,
  className,
  style
}) => {
  return (
    <label
      className={clsx(styles.label, { [styles.colored]: colored }, className)}
      style={style}
      data-ui-checkbox
      data-testid="checkbox"
    >
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id={id}
          checked={onChange ? checked : undefined}
          defaultChecked={!onChange ? checked : undefined}
          disabled={disabled}
          className={styles.checkbox}
          onChange={onChange}
          value={value}
          aria-label={label || 'checkbox'}
          data-ui-checkbox-input
          data-color={color}
        />
        <span className={styles.checkmark} data-ui-checkbox-checkmark>
          {checked && (
            multiple ? (
              <IconDeleteMinusFilled16 htmlColor="var(--ac-checkbox-checked-bg)" data-ui-checkbox-icon />
            ) : (
              <IconDoneCheckFilled16 htmlColor="var(--ac-checkbox-checked-bg)" data-ui-checkbox-icon />
            )
          )}
        </span>
      </div>
      {label && (
        <Typography variant="Body1-Medium" color="var(--steel-90)" className={styles.text} data-disabled={disabled} data-ui-checkbox-label>
          {label}
        </Typography>
      )}
    </label>
  );
};

export default Checkbox;
