import React, { ChangeEvent, useEffect, useState } from 'react';

import { Box, Radio, Typography } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { ERadioColors } from '../enums';
import { IRadioProps } from '../types';
import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div className={styles.wrapper}>{<Story />}</div>;

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
      <Radio checked={checked === 'option 2'} onChange={handleChange} value="option 2" label="Москва" />
      <Typography variant="Body1-Bold" color="var(--steel-90)">
        Выбранная опция: {checked}
      </Typography>
    </Box>
  );
};

RadioDefault.storyName = 'Переключение Radio по умолчанию';
RadioDefault.args = {
  value: 'option 1',
  label: 'Липецк',
  checked: false
};

export const RadioColors = (): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(() =>
    Object.values(ERadioColors).reduce(
      (acc, color) => ({
        ...acc,
        [color]: `${color}-1`
      }),
      {}
    )
  );

  const handleChange = (color: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValues(prev => ({
      ...prev,
      [color]: event.target.value
    }));
  };

  return (
    <Box flexDirection="column" gap="24px">
      {Object.values(ERadioColors).map(color => (
        <Box key={color} flexDirection="column" gap="8px">
          <Typography variant="Body1-Bold" color="var(--steel-90)">
            {color}
          </Typography>
          <Box flexDirection="column" gap="8px">
            <Radio
              color={color}
              value={`${color}-1`}
              label="Анализ содержания углерода"
              checked={selectedValues[color] === `${color}-1`}
              onChange={handleChange(color)}
            />
            <Radio
              color={color}
              value={`${color}-2`}
              label="Коррозионные испытания"
              checked={selectedValues[color] === `${color}-2`}
              onChange={handleChange(color)}
            />
            <Radio
              color={color}
              value={`${color}-3`}
              label="Тест на твердость (disabled)"
              checked={selectedValues[color] === `${color}-3`}
              onChange={handleChange(color)}
              disabled
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

RadioColors.storyName = 'Варианты цветов Radio';
RadioColors.parameters = {
  controls: { disable: true }
};
