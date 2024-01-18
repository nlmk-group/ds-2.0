import React, { ChangeEvent, useState } from 'react';

import Typography from '@components/Typography';

import './Radio.stories.scss';

import Radio from '..';
import { IRadioProps } from '../types';
import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{Story()}</div>;

export default {
  title: 'Components/Radio/Stories',
  component: Radio,
  decorators: [withPadding],
  argTypes: argsTypes
};

export const RadioDefault = (argTypes: IRadioProps): JSX.Element => {
  const [checked, setChecked] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };
  return (
    <div className="wrapper">
      <Radio {...argTypes} checked={checked === argTypes.value} onChange={handleChange} />
      <Radio checked={checked === 'option 2'} onChange={handleChange} value="option 2" />
      <Typography variant="Body1-Bold">Выбранная опция: {checked}</Typography>
    </div>
  );
};
RadioDefault.storyName = 'Дефолтное переключение Radio';
RadioDefault.args = {
  value: 'option 1'
};
