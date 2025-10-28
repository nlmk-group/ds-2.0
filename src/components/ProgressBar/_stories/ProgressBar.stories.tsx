import React from 'react';

import ProgressBar from '@components/ProgressBar';
import { IProgressBarProps } from '@components/ProgressBar/types';
import { Meta } from '@storybook/react-vite';

import styles from './Progressar.module.scss';

import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story/>}</div>;

export default {
  title: 'Components/ProgressBar/Stories',
  component: ProgressBar,
  argTypes: argsTypes,
  decorators: [withWrapper]
};

export const ProgressBarDefault = (argsTypes: IProgressBarProps): JSX.Element => {
  return (
    <div style={{ width: '400px' }}>
      <ProgressBar {...argsTypes} />
    </div>
  );
};
ProgressBarDefault.storyName = 'ProgressBar по умолчанию';

export const ProgressBarWithLabel = (argsTypes: IProgressBarProps): JSX.Element => {
  return (
    <div style={{ width: '400px' }}>
      <ProgressBar label="Общий прогресс" {...argsTypes} />
    </div>
  );
};
ProgressBarWithLabel.storyName = 'ProgressBar с лейблом';
ProgressBarWithLabel.args = {
  percentage: 50
};
