import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { Slider } from '@components/Slider';

import { IInputSliderProps } from './types';

const InputSlider: FC<IInputSliderProps> = ({ min, max, step = 1, value: outerValue, onChange, disabled = false }) => {
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
      <Slider.InputWrapper>
        <Slider.Input value={value} min={min} max={max} step={step} onChange={handleChange} disabled={disabled} setHover={setControlHover}/>
      </Slider.InputWrapper>
      <Slider.ControlWrapper>
        <Slider.Rail maxPosition={rangePos} minPosition={0} disabled={disabled} />
        <Slider.Control position={rangePos} value={value} disabled={disabled} hover={controlHover} />
      </Slider.ControlWrapper>
    </Slider.Wrapper>
  );
};

export default InputSlider;
