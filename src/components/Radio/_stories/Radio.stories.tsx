import React, { ChangeEvent, useState } from 'react';

import Typography from '@components/Typography';

import './Radio.stories.scss';
import styles from '@components/_storybook/styles.module.scss';


import Radio from '..';
import { IRadioProps } from '../types';
import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div className={styles.wrapper}>{Story()}</div>;

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}
    >
      <Radio {...argTypes} checked={checked === argTypes.value} onChange={handleChange} />
      <Radio checked={checked === 'option 2'} onChange={handleChange} value="option 2" label="Привет мир!" />
      <div style={{ color: 'var(--text-grey-900)'}}>
        <Typography variant="Body1-Bold">Выбранная опция: {checked}</Typography>
      </div>
    </div>
  );
};
RadioDefault.storyName = 'Дефолтное переключение Radio';
RadioDefault.args = {
  value: 'option 1'
};
