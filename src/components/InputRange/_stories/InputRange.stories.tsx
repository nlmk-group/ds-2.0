import React, { useState } from 'react';

import InputRange from '@components/InputRange';

import styles from './InputRange.module.scss';

export default {
  title: 'Components/InputRange/Stories',
  component: InputRange
};

export const InputRangeDefault = (): JSX.Element => {
  const [value, setInputRangeValue] = useState({ min: 20, max: 80 });

  const handleValuesChange = (newValues: { min: number; max: number }) => {
    setInputRangeValue(newValues);
  };

  return (
    <div className={styles.wrapper}>
      <InputRange
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={handleValuesChange}
      />
    </div>
  );
};

InputRangeDefault.storyName = 'Слайдер по умолчанию';

export const InputRangeDisabled = (): JSX.Element => {
  const [value, setInputRangeValue] = useState({ min: 500, max: 800 });

  const handleValuesChange = (newValues: { min: number; max: number }) => {
    setInputRangeValue(newValues);
  };

  return (
    <div className={styles.wrapper}>
      <InputRange
        min={100}
        max={1000}
        step={10}
        value={value}
        onChange={handleValuesChange}
        disabled
      />
    </div>
  );
};

InputRangeDisabled.storyName = 'Неактивный слайдер';
