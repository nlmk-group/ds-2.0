import React, { useState } from 'react';

import InputRange from '@components/InputRange';

import styles from './InputRange.module.scss';

import { IInputRangeProps } from '../types';
import argsTypes from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/InputRange/Stories',
  component: InputRange,
  decorators: [withWrapper],
  argTypes: argsTypes
};

export const InputRangeDefault = (argsTypes: IInputRangeProps): JSX.Element => {
  const [value, setInputRangeValue] = useState({ min: 20, max: 80 });

  const handleValuesChange = (newValues: { min: number; max: number }) => {
    setInputRangeValue(newValues);
  };

  return <InputRange {...argsTypes} value={value} onChange={handleValuesChange} />;
};

InputRangeDefault.storyName = 'InputRange по умолчанию';
InputRangeDefault.args = {
  min: 20,
  max: 80,
  step: 1
};

export const InputRangeDisabled = (argsTypes: IInputRangeProps): JSX.Element => {
  const [value, setInputRangeValue] = useState({ min: 0, max: 80 });

  const handleValuesChange = (newValues: { min: number; max: number }) => {
    setInputRangeValue(newValues);
  };

  return <InputRange {...argsTypes} value={value} onChange={handleValuesChange} disabled />;
};
InputRangeDisabled.args = {
  min: 0,
  max: 80,
  step: 1
};

InputRangeDisabled.storyName = 'InputRange в состоянии disabled';
