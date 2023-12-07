import React from 'react';

import {Spinner, Icon} from '@components/index';
import { withDesign } from 'storybook-addon-designs';

import styles from '@components/_storybook/styles.module.scss';

import argsTypes from './argsTypes';

import { DEFAULT_TEXT, TEXT_M_SIZE, COLORS, ICON } from './text';

const withPadding = (Story: () => any) => (
  <div style={{ minHeight: 80 }}>{Story()}</div>
);

export default {
  title: 'Components/Spinner/Stories',
  component: Spinner,
  decorators: [withDesign, withPadding],
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
          <Icon color="primary" containerSize={32} name="IconAutorenew24" />
        </Spinner>
      </div>
    </div>
  );
};
SpinnerWithIcon.storyName = ICON;
