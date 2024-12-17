import React, { ReactNode } from 'react';

import { EButtonSize } from '@components/Button/enums';
import { Box, Dropdown, DropdownMenuItem, Typography } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { IDropdownProps } from '../types';
import { argsTypes } from './argsTypes';

const WrapperDecorator = (Story: any) => {
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
  decorators: [WrapperDecorator],
  argTypes: argsTypes
};

const dropdownOptions = [
  { value: 'Сталь' },
  { value: 'Железо' },
  { value: 'Чугун', disabled: true },
  { value: 'Медь' },
  { value: 'Цинк' },
  { value: 'Титан' },
  { value: 'Хром' }
];

export const DefaultDropdown = (args: IDropdownProps): ReactNode => {
  return (
    <Dropdown {...args}>
      {dropdownOptions.map(({ value, disabled }) => (
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
  );
};
DefaultDropdown.args = {
  buttonChildren: 'Dropdown Button',
  size: EButtonSize.m,
  menuStyle: { width: '200px' },
};

DefaultDropdown.storyName = 'Dropdown по умолчанию';

export const PortalDropdown = (args: IDropdownProps): ReactNode => {
  return (
    <Dropdown {...args}>
      {dropdownOptions.map(({ value, disabled }) => (
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
  );
};
PortalDropdown.args = {
  buttonChildren: 'Dropdown Button',
  size: EButtonSize.m,
  menuStyle: { width: '200px' },
  withPortal: true
};

PortalDropdown.storyName = 'Dropdown с порталом';
