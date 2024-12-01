import React, { FC } from 'react';

import { generateUUID } from '@components/declaration';
import { Typography } from '@components/index';
import clsx from 'clsx';

import { IRadioProps } from './types';

import styles from './Radio.module.scss';

import { ERadioColors } from './enums';

/**
 * Компонент Radio для создания радио-кнопки.
 * @component
 * @param {Object} props - Свойства компонента Radio.
 * @param {string} [props.value] - Значение радио-кнопки.
 * @param {boolean} [props.checked] - Флаг, указывающий, выбрана ли радио-кнопка.
 * @param {boolean} [props.disabled] - Флаг, указывающий, отключена ли радио-кнопка.
 * @param {function} [props.onChange] - Функция обработки изменения состояния радио-кнопки.
 * @param {string} [props.label=''] - Текст метки радио-кнопки.
 * @param {ERadioColors} [props.color='brand'] - Цвет радио-кнопки.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @param {CSSProperties} [props.style] - Inline стили для кастомизации компонента.
 * @returns {JSX.Element} Компонент Radio.
 */

export const Radio: FC<IRadioProps> = ({
  checked,
  disabled,
  value,
  onChange,
  label = '',
  color = ERadioColors.brand,
  className,
  style
}) => {
  const radioID = generateUUID();
  return (
    <div className={clsx(styles.radio, className)} style={style} data-ui-radio>
      <input
        type="radio"
        disabled={disabled}
        checked={onChange ? checked : undefined}
        defaultChecked={!onChange ? checked : undefined}
        value={value}
        onChange={onChange}
        name={radioID}
        id={radioID}
        data-ui-radio-input
        data-color={color}
      />
      {label.length > 0 && (
        <label
          data-testid="radio-label"
          className={clsx(styles.label, disabled && styles['label-disabled'])}
          htmlFor={radioID}
          data-ui-radio-label
        >
          <Typography variant="Body1-Medium" color="var(--steel-90)" data-ui-radio-text>
            {label}
          </Typography>
        </label>
      )}
    </div>
  );
};

export default Radio;
