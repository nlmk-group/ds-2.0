import React from 'react';

import { IconAutoRenewReloadOutlined24, Spinner } from '@components/index';

import style from './Spinner.stories.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { ESizesSpinner } from '../enums';
import { ISpinnerProps } from '../types';
import argsTypes from './argsTypes';
import { COLORS, DEFAULT_TEXT, ICON, ICON_PERCENT, TEXT_M_SIZE } from './text';

const withWrapper = (Story: any) => <div className={style.wrapper}>{Story()}</div>;

export default {
  title: 'Components/Spinner/Stories',
  component: Spinner,
  decorators: [withWrapper],
  argTypes: argsTypes
};

export const SpinnerDefault = (args: ISpinnerProps): JSX.Element => {
  return (
    <div>
      <Spinner {...args} />
    </div>
  );
};
SpinnerDefault.storyName = DEFAULT_TEXT;

export const SpinnerMSize = (args: ISpinnerProps): JSX.Element => {
  return (
    <div>
      <Spinner size="m" />
    </div>
  );
};
SpinnerMSize.storyName = TEXT_M_SIZE;

export const SpinnerChangeColor = (args: ISpinnerProps): JSX.Element => {
  return (
    <div>
      <Spinner bgColor="#ff6e40" color="#1e3d59" />
    </div>
  );
};
SpinnerChangeColor.storyName = COLORS;

export const SpinnerWithIcon = (args: ISpinnerProps): JSX.Element => {
  return (
    <div>
      <Spinner>
        <IconAutoRenewReloadOutlined24 htmlColor="var(--ac-loader-stroke-progress)" />
      </Spinner>
    </div>
  );
};
SpinnerWithIcon.storyName = ICON;

export const SpinnerWithPercent = (args: ISpinnerProps): JSX.Element => {
  return (
    <div
      className={styles.row}
      style={{
        display: 'flex',
        gap: 20
      }}
    >
      <Spinner size={ESizesSpinner.xxl} percent={96} />
      <Spinner size={ESizesSpinner.xl} percent={56} />
      <Spinner size={ESizesSpinner.l} percent={40} />
      <Spinner size={ESizesSpinner.m} percent={32} />
    </div>
  );
};
SpinnerWithPercent.storyName = ICON_PERCENT;
