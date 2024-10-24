import React, { ChangeEvent, useEffect, useState } from 'react';

import { Box, Radio, Typography } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { IRadioProps } from '../types';
import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div className={styles.wrapper}>{<Story/>}</div>;

export default {
  title: 'Components/Radio/Stories',
  component: Radio,
  decorators: [withPadding],
  argTypes: argsTypes
};

export const RadioDefault = ({ checked: initialChecked, ...args }: IRadioProps): JSX.Element => {
  const [checked, setChecked] = useState(initialChecked ? args.value : '');

  useEffect(() => {
    setChecked(initialChecked ? args.value : '');
  }, [initialChecked, args.value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };

  return (
    <Box flexDirection="column" gap="8px">
      <Radio {...args} checked={checked === args.value} onChange={handleChange} />
      <Radio checked={checked === 'option 2'} onChange={handleChange} value="option 2" label="Привет мир!" />
      <Typography variant="Body1-Bold" color="var(--steel-90)">
        Выбранная опция: {checked}
      </Typography>
    </Box>
  );
};

RadioDefault.storyName = 'Дефолтное переключение Radio';
RadioDefault.args = {
  value: 'option 1',
  label: 'Вариант 1',
  checked: false
};
