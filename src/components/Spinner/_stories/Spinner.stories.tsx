import React from 'react';

import { IconAutoRenewReloadOutlined24, Spinner } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { sizes } from '../types';
import argsTypes from './argsTypes';
import { COLORS, DEFAULT_TEXT, ICON, ICON_PERCENT, TEXT_M_SIZE } from './text';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{Story()}</div>;

export default {
  title: 'Components/Spinner/Stories',
  component: Spinner,
  decorators: [withPadding],
  argTypes: argsTypes
};

export const SpinnerDefault = (): JSX.Element => {
  return (
    <div className={styles.wrapper} style={{ width: 40 }}>
      <div className={styles.row}>
        <Spinner />
      </div>
    </div>
  );
};
SpinnerDefault.storyName = DEFAULT_TEXT;

export const SpinnerMSize = (): JSX.Element => {
  return (
    <div className={styles.wrapper} style={{ width: 32 }}>
      <div className={styles.row}>
        <Spinner size="m" />
      </div>
    </div>
  );
};
SpinnerMSize.storyName = TEXT_M_SIZE;

export const SpinnerChangeColor = (): JSX.Element => {
  return (
    <div className={styles.wrapper} style={{ width: 40 }}>
      <div className={styles.row}>
        <Spinner bgColor="#ff6e40" color="#1e3d59" />
      </div>
    </div>
  );
};
SpinnerChangeColor.storyName = COLORS;

export const SpinnerWithIcon = (): JSX.Element => {
  return (
    <div className={styles.wrapper} style={{ width: 30 }}>
      <div className={styles.row}>
        <Spinner>
          <IconAutoRenewReloadOutlined24 htmlColor="var(--ac-loader-stroke-progress)" />
        </Spinner>
      </div>
    </div>
  );
};
SpinnerWithIcon.storyName = ICON;

export const SpinnerWithPercent = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.row}
        style={{
          width: 500,
          display: 'flex',
          gap: 20
        }}
      >
        <Spinner size={sizes.EXTRA_EXTRA_LARGE} percent={96} />
        <Spinner size={sizes.EXTRA_LARGE} percent={56} />
        <Spinner size={sizes.LARGE} percent={40} />
        <Spinner size={sizes.MEDIUM} percent={32} />
      </div>
    </div>
  );
};
SpinnerWithPercent.storyName = ICON_PERCENT;
