import React, { ReactNode, useState } from 'react';

import { Box, Snackbar } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { ESnackbarColors, ESnackbarTypes } from '../enums';
import { ISnackbarProps } from '../types';
import argsTypes from './argsTypes';

const withWrapper = (Story: any) => (
  <Box p="0" justifyContent="center" alignItems="center" className={styles.wrapper}>
    {<Story />}
  </Box>
);

export default {
  title: 'Components/Snackbar/Stories',
  component: Snackbar,
  decorators: [withWrapper],
  argTypes: argsTypes
};

export const DefaultSnackbar = (argTypes: ISnackbarProps): ReactNode => {
  return <Snackbar {...argTypes}>Snackbar по умолчанию</Snackbar>;
};
DefaultSnackbar.storyName = 'Snackbar по умолчанию';

export const SnackbarColors = (argTypes: ISnackbarProps): ReactNode => {
  const colors = Object.values(ESnackbarColors);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {colors.map(color => (
        <Snackbar {...argTypes} color={color} key={color}>
          Текст
        </Snackbar>
      ))}
    </div>
  );
};
SnackbarColors.storyName = 'Snackbar с разными вариантами цветов';
SnackbarColors.args = {
  startIcon: true,
  actionButton: true
};
SnackbarColors.parameters = {
  controls: { disable: true }
};

export const SnackbarIndicationColors = (argTypes: ISnackbarProps): ReactNode => {
  const colors = Object.values(ESnackbarColors);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {colors.map(color => (
        <Snackbar {...argTypes} color={color} key={color} type={ESnackbarTypes.indication}>
          Текст
        </Snackbar>
      ))}
    </div>
  );
};
SnackbarIndicationColors.storyName = 'Snackbar с разными вариантами цветов и типом indication';
SnackbarIndicationColors.args = {
  startIcon: true,
  actionButton: true
};
SnackbarIndicationColors.parameters = {
  controls: { disable: true }
};

export const SnackbarTimer = (argTypes: ISnackbarProps): ReactNode => {
  const [key, setKey] = useState(0);

  const handleClose = () => {
    setKey(prev => prev + 1);
  };

  return (
    <Snackbar {...argTypes} showCountdown onClose={handleClose} key={key} autoHideDuration={10000}>
      Snackbar с таймером
    </Snackbar>
  );
};
SnackbarTimer.storyName = 'Snackbar с таймером';
SnackbarTimer.parameters = {
  controls: { disable: true }
};
