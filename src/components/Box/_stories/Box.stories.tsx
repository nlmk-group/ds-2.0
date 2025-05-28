import React from 'react';

import Box from '@components/Box';

import styles from '@components/_storybook/styles.module.scss';

import { IBox } from '../types';
import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{<Story />}</div>;

export default {
  title: 'Components/Box/Stories',
  component: Box,
  decorators: [withPadding],
  argTypes: argsTypes
};

export const BoxDefault = (argTypes: IBox): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Box {...argTypes}>
        <div>Контент 1</div>
        <div>Контент 2</div>
      </Box>
    </div>
  );
};
BoxDefault.storyName = 'Box по умолчанию';
