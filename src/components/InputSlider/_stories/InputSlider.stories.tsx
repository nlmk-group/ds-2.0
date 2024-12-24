import React, { useState } from 'react';

import InputSlider from '@components/InputSlider';

import styles from './InputSlider.module.scss';

import { IInputSliderProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;
export default {
  title: 'Components/InputSlider/Stories',
  component: InputSlider,
  decorators: [withWrapper],
  argTypes: argsTypes
};

export const InputSliderDefault = (argsTypes: IInputSliderProps): JSX.Element => {
  const [value, setInputSliderValue] = useState(20);

  const handleValuesChange = (newValue: number) => {
    setInputSliderValue(newValue);
  };

  return <InputSlider {...argsTypes} value={value} onChange={handleValuesChange} />;
};

InputSliderDefault.storyName = 'InputSlider по умолчанию';
InputSliderDefault.args = {
  min: 20,
  max: 80,
  step: 1,
  label: 'Прозрачность'
};
export const InputSliderDisabled = (argsTypes: IInputSliderProps): JSX.Element => {
  const [value, setInputSliderValue] = useState(20);

  const handleValuesChange = (newValue: number) => {
    setInputSliderValue(newValue);
  };

  return <InputSlider {...argsTypes} value={value} onChange={handleValuesChange} disabled />;
};

InputSliderDisabled.storyName = 'InputSlider в состоянии disabled';
InputSliderDisabled.args = {
  min: 0,
  max: 80,
  step: 1,
  label: 'Отключено'
};
