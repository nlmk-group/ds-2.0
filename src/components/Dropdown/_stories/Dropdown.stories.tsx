import React, { ReactNode } from 'react';

import { EButtonSizes } from '@components/Button/enums';
import { Box, Dropdown, DropdownMenuItem, Typography } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { IDropdownProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => {
  return (
    <Box
      alignItems="flex-start"
      justifyContent="center"
      st={{ height: '300px', marginTop: '40px', borderRadius: '10px' }}
      className={styles.wrapper}
    >
      <Story />
    </Box>
  );
};

export default {
  title: 'Components/Dropdown/Stories',
  component: Dropdown,
  decorators: [withWrapper],
  argTypes: argsTypes
};

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
    <div style={{ position: 'relative' }}>
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
  buttonChildren: 'Dropdown Button',
  size: EButtonSizes.m,
  menuStyle: { width: '200px' }
};

DropdownDefault.storyName = 'Dropdown по умолчанию';
