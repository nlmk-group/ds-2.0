import React, { FC } from 'react';

import { generateUUID } from '@components/declaration';
import { Typography } from '@components/index';
import clsx from 'clsx';

import { IRadioProps } from './types';

import styles from './Radio.module.scss';

/**
 * Компонент Radio для создания радио-кнопки.
 * @component
 * @param {Object} props - Свойства компонента Radio.
 * @param {string} [props.value] - Значение радио-кнопки.
 * @param {boolean} [props.checked] - Флаг, указывающий, выбрана ли радио-кнопка.
 * @param {boolean} [props.disabled] - Флаг, указывающий, отключена ли радио-кнопка.
 * @param {function} [props.onChange] - Функция обработки изменения состояния радио-кнопки.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @param {string} [props.label=''] - Текст метки радио-кнопки.
 * @returns {JSX.Element} Компонент Radio.
 */

export const Radio: FC<IRadioProps> = ({ checked, disabled, value, onChange, className, label = '' }) => {
  const radioID = generateUUID();
  return (
    <div className={clsx(styles.radio, className)}>
      <input
        type="radio"
        disabled={disabled}
        checked={onChange ? checked : undefined}
        defaultChecked={!onChange ? checked : undefined}
        value={value}
        onChange={onChange}
        name={radioID}
        id={radioID}
      />
      {label.length > 0 && (
        <label
          data-testid="radio-label"
          className={clsx(styles.label, disabled && styles['label-disabled'])}
          htmlFor={radioID}
        >
          <Typography variant="Body1-Medium" color="var(--steel-90)">
            {label}
          </Typography>
        </label>
      )}
    </div>
  );
};

export default Radio;
