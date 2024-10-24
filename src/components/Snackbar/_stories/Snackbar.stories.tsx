import React, { ReactNode } from 'react';

import { Box, Snackbar } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { ISnackbarProps } from '../types';
import argsTypes from './argsTypes';

const withWrapper = (Story: any) => (
  <Box justifyContent="center" alignItems="center" className={styles.wrapper}>
    {<Story/>}
  </Box>
);

export default {
  title: 'Components/Snackbar/Stories',
  component: Snackbar,
  decorators: [withWrapper],
  argTypes: argsTypes
};

export const DefaultSnackbar = (argTypes: ISnackbarProps): ReactNode => {
  return <Snackbar {...argTypes} />;
};

DefaultSnackbar.storyName = 'Snackbar по умолчанию';
DefaultSnackbar.args = {
  children: 'Snackbar по умолчанию'
};
