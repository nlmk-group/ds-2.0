import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { Slider } from '@components/Slider';

import { IInputRangeProps } from './types';

/**
 * Компонент InputRange предоставляет интерфейс двойного ползунка для выбора диапазона значений.
 *
 * @param {object} props - Свойства компонента InputRange.
 * @param {number} props.min - Минимальное значение диапазона.
 * @param {number} props.max - Максимальное значение диапазона.
 * @param {number} [props.step=1] - Шаг изменения значения.
 * @param {{ min: number; max: number }} props.value - Текущее значение диапазона.
 * @param {(value: { min: number; max: number }) => void} [props.onChange] - Функция, вызываемая при изменении диапазона.
 * @param {boolean} [props.disabled=false] - Отключает ползунок.
 * @param {`${ESliderThumbValuePosition}`} [props.thumbValuePosition='top'] - Позиция текущего значения ползунка.
 * @returns {JSX.Element} - Компонент InputRange.
 */

const InputRange: FC<IInputRangeProps> = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  disabled = false,
  thumbValuePosition = 'top'
}) => {
  const [minValue, setMinValue] = useState(value ? value.min : min);
  const [maxValue, setMaxValue] = useState(value ? value.max : max);
  const [leftControlHover, setLeftControlHover] = useState(false);
  const [rightControlHover, setRightControlHover] = useState(false);

  useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMinValue = Math.min(+e.target.value, maxValue - step);
    if (onChange) {
      onChange({ min: newMinValue, max: maxValue });
    } else {
      setMinValue(newMinValue);
    }
  };

  const handleMaxRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMaxValue = Math.max(+e.target.value, minValue + step);
    if (onChange) {
      onChange({ min: minValue, max: newMaxValue });
    } else {
      setMaxValue(newMaxValue);
    }
  };

  const rangePos = (value: number) => ((value - min) / (max - min)) * 100;
  const minRangePos = rangePos(minValue);
  const maxRangePos = rangePos(maxValue);

  return (
    <Slider.Wrapper>
      <Slider.InputWrapper>
        <Slider.Input
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinRangeChange}
          disabled={disabled}
          setHover={setLeftControlHover}
        />
        <Slider.Input
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxRangeChange}
          disabled={disabled}
          setHover={setRightControlHover}
        />
      </Slider.InputWrapper>
      <Slider.ControlWrapper>
        <Slider.Control
          thumbValuePosition={thumbValuePosition}
          position={minRangePos}
          value={value.min}
          disabled={disabled}
          hover={leftControlHover}
        />
        <Slider.Rail maxPosition={maxRangePos} minPosition={minRangePos} disabled={disabled} />
        <Slider.Control
          thumbValuePosition={thumbValuePosition}
          position={maxRangePos}
          value={value.max}
          disabled={disabled}
          hover={rightControlHover}
        />
      </Slider.ControlWrapper>
    </Slider.Wrapper>
  );
};

export default InputRange;
