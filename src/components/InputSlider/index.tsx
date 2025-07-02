import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { Slider } from '@components/Slider';
import Typography from '@components/Typography';

import { IInputSliderProps } from './types';

import style from './InputSlider.module.scss';

import { EInputSliderValuePosition } from './enums';

/**
 * Компонент InputSlider предоставляет интерфейс ползунка для выбора числового значения.
 *
 * @param {object} props - Свойства компонента InputSlider.
 * @param {number} [props.min=0] - Минимальное значение диапазона.
 * @param {string} [props.label] - Текст метки.
 * @param {number} [props.max=100] - Максимальное значение диапазона.
 * @param {number} [props.step=1] - Шаг изменения значения.
 * @param {number} props.value - Текущее значение ползунка.
 * @param {(value: number) => void} [props.onChange] - Функция, вызываемая при изменении значения.
 * @param {boolean} [props.showValue=true] - Показывать ли текущее значение.
 * @param {`${EInputSliderValuePosition}`} [props.valuePosition=EInputSliderValuePosition.top] - Позиция текущего значения.
 * @param {string} [props.valueSuffix='%'] - Суффикс для отображаемого значения. Передайте '' для скрытия суффикса.
 * @param {boolean} [props.disabled=false] - Отключает ползунок.
 * @returns {JSX.Element} - Компонент InputSlider.
 */

const InputSlider: FC<IInputSliderProps> = ({
  min = 0,
  label,
  max = 100,
  step = 1,
  value: outerValue,
  onChange,
  showValue = true,
  valuePosition = EInputSliderValuePosition.top,
  valueSuffix = '%',
  disabled = false
}) => {
  const [value, setValue] = useState(outerValue ?? min);
  const [controlHover, setControlHover] = useState(false);

  useEffect(() => {
    if (outerValue !== undefined) setValue(outerValue);
  }, [outerValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMaxValue = +e.target.value;
    if (onChange) {
      onChange(newMaxValue);
    } else {
      setValue(newMaxValue);
    }
  };

  const getRangePos = (value: number) => ((value - min) / (max - min)) * 100;

  const rangePos = getRangePos(value);

  return (
    <Slider.Wrapper>
      <Typography className={style['label']} variant="Caption-Medium">
        {label}
      </Typography>
      <Slider.InputWrapper>
        <Slider.Input
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
          disabled={disabled}
          setHover={setControlHover}
        />
      </Slider.InputWrapper>
      <Slider.ControlWrapper>
        <Slider.Rail maxPosition={rangePos} minPosition={0} disabled={disabled} />
        <Slider.Control showValue={false} position={rangePos} value={value} disabled={disabled} hover={controlHover} />
      </Slider.ControlWrapper>
      {showValue && valuePosition === 'top' && (
        <div className={style.top}>
          <Typography variant="Caption-Medium">{`${value}${valueSuffix}`}</Typography>
        </div>
      )}
      {showValue && valuePosition === 'right' && (
        <div className={style.right}>
          <Typography variant="Caption-Medium">{`${value}${valueSuffix}`}</Typography>
        </div>
      )}
    </Slider.Wrapper>
  );
};

export default InputSlider;
