import React from 'react';

import { IconAutoRenewReloadOutlined24, Spinner } from '@components/index';

import style from './Spinner.stories.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { ESizesSpinner } from '../enums';
import { ISpinnerProps } from '../types';
import argsTypes from './argsTypes';

const withWrapper = (Story: any) => <div className={style.wrapper}>{<Story />}</div>;

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
SpinnerDefault.storyName = 'Spinner по умолчанию';

export const SpinnerMSize = (args: ISpinnerProps): JSX.Element => {
  return (
    <div>
      <Spinner size="m" />
    </div>
  );
};
SpinnerMSize.storyName = 'Spinner размера medium';

export const SpinnerChangeColor = (args: ISpinnerProps): JSX.Element => {
  return (
    <div>
      <Spinner bgColor="#ff6e40" color="#1e3d59" />
    </div>
  );
};
SpinnerChangeColor.storyName = 'Spinner с разными цветами';

export const SpinnerWithIcon = (args: ISpinnerProps): JSX.Element => {
  return (
    <div>
      <Spinner>
        {/* FIXME: --ac-loader-stroke-progress not found */}
        <IconAutoRenewReloadOutlined24 htmlColor="var(--ac-loader-stroke-progress)" />
      </Spinner>
    </div>
  );
};
SpinnerWithIcon.storyName = 'Spinner где Icon, как children (JSX.Element)';

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
SpinnerWithPercent.storyName = 'Spinner c процентом';

export const SpinnerStretchedContainer = (args: ISpinnerProps): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '300px',
        backgroundColor: '#fff',
        /* FIXME: --ac-border-primary not found */
        border: '1px solid var(--ac-border-primary)'
      }}
    >
      <Spinner {...args} />
    </div>
  );
};
SpinnerStretchedContainer.storyName = 'Spinner в растянутом контейнере';
