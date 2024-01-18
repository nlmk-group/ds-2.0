import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { Slider } from '@components/Slider';

import { IInputRangeProps } from './types';

const InputRange: FC<IInputRangeProps> = ({ min, max, step = 1, value, onChange, disabled = false }) => {
  const [minValue, setMinValue] = useState(value ? value.min : min);
  const [maxValue, setMaxValue] = useState(value ? value.max : max);

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
        />
        <Slider.Input
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxRangeChange}
          disabled={disabled}
        />
      </Slider.InputWrapper>
      <Slider.ControlWrapper>
        <Slider.Control position={minRangePos} value={value.min} disabled={disabled} />
        <Slider.Rail maxPosition={maxRangePos} minPosition={minRangePos} disabled={disabled} />
        <Slider.Control position={maxRangePos} value={value.max} disabled={disabled} />
      </Slider.ControlWrapper>
    </Slider.Wrapper>
  );
};

export default InputRange;
