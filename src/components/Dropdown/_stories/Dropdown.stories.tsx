import React, { ReactNode } from 'react';

import { EButtonSizes } from '@components/Button/enums';
import { Box, Dropdown, DropdownMenuItem, Typography } from '@components/index';
import { Meta } from '@storybook/react';

import styles from './Dropdown.module.scss';

import { IDropdownProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => {
  return (
    <Box alignItems="center" justifyContent="center" st={{ height: '100vh' }} className={styles.wrapper}>
      <Story />
    </Box>
  );
};

export default {
  title: 'Components/Dropdown/Stories',
  component: Dropdown,
  decorators: [withWrapper],
  argTypes: argsTypes,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof Dropdown>;

const positions = [
  { value: 'Сталь' },
  { value: 'Железо' },
  { value: 'Чугун', disabled: true },
  { value: 'Медь' },
  { value: 'Цинк' },
  { value: 'Титан' },
  { value: 'Хром' }
];

export const DropdownDefault = (args: IDropdownProps): ReactNode => {
  return (
    <div className={styles.dropdown__container}>
      <Dropdown {...args}>
        {positions.map(({ value, disabled }) => (
          <DropdownMenuItem
            key={value}
            value={value}
            disabled={disabled}
            onClick={() => {
              console.log(value);
            }}
          >
            <Typography variant="Body1-Medium">{value}</Typography>
          </DropdownMenuItem>
        ))}
      </Dropdown>
    </div>
  );
};
DropdownDefault.args = {
  buttonText: 'Dropdown Button',
  size: EButtonSizes.m
};
DropdownDefault.storyName = 'Dropdown по умолчанию';
