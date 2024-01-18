import React, { useState } from 'react';

import Checkbox from '@components/Checkbox';
import { Meta } from '@storybook/react';

import styles from './Checkbox.module.scss';

import { ICheckboxProps } from '../types';
import { argsTypes } from './argsTypes';

const withThemeProvider = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/Checkbox/Stories',
  component: Checkbox,
  argTypes: argsTypes,
  decorators: [withThemeProvider]
} as Meta<typeof Checkbox>;

export const CheckboxDefault = (argTypes: ICheckboxProps): JSX.Element => <Checkbox {...argTypes} />;
CheckboxDefault.storyName = 'Чекбокс по умолчанию';
