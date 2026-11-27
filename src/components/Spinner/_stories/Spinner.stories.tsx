import React from 'react';

import { Box, IconAutoRenewReloadOutlined24, Spinner, Typography } from '@components/index';

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
SpinnerDefault.storyName = 'Индикатор загрузки · Spinner';

export const SpinnerMSize = (args: ISpinnerProps): JSX.Element => {
  return (
    <div>
      <Spinner size="m" />
    </div>
  );
};
SpinnerMSize.storyName = 'Spinner размера medium';

export const SpinnerChangeColor = (args: ISpinnerProps): JSX.Element => (
  <Box role="status" flexDirection="column" alignItems="center" gap={16}>
    <Spinner {...args} />
    <Typography variant="Body1-Medium">Готовим сменный отчёт…</Typography>
  </Box>
);
SpinnerChangeColor.storyName = 'Цвет дуги и дорожки';
SpinnerChangeColor.args = {
  size: 'xl',
  progressPercentage: 0.35,
  color: 'var(--brand-sapphire-60)',
  bgColor: 'var(--brand-sapphire-20)'
};

export const SpinnerWithIcon = (args: ISpinnerProps): JSX.Element => {
  return (
    <div>
      <Spinner>
        <IconAutoRenewReloadOutlined24 htmlColor="var(--brand-sapphire-60)" />
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
        border: '1px solid var(--unique-divider)'
      }}
    >
      <Spinner {...args} />
    </div>
  );
};
SpinnerStretchedContainer.storyName = 'Spinner в растянутом контейнере';
