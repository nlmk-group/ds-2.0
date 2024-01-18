import React, { useState } from 'react';

import InputSlider from '@components/InputSlider';

import styles from './InputSlider.module.scss';

export default {
  title: 'Components/InputSlider/Stories',
  component: InputSlider
};

export const InputSliderDefault = (): JSX.Element => {
  const [value, setInputSliderValue] = useState(20);

  const handleValuesChange = (newValue: number) => {
    setInputSliderValue(newValue);
  };

  return (
    <div className={styles.wrapper}>
      <InputSlider min={0} max={100} step={1} value={value} onChange={handleValuesChange} />
    </div>
  );
};

InputSliderDefault.storyName = 'Слайдер по умолчанию';

export const InputSliderDisabled = (): JSX.Element => {
  const [value, setInputSliderValue] = useState(500);

  const handleValuesChange = (newValue: number) => {
    setInputSliderValue(newValue);
  };

  return (
    <div className={styles.wrapper}>
      <InputSlider min={100} max={1000} step={10} value={value} onChange={handleValuesChange} disabled />
    </div>
  );
};

InputSliderDisabled.storyName = 'Неактивный слайдер';
