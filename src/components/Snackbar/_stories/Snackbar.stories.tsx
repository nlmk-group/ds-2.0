import React, { ReactNode } from 'react';

import { Icon, Snackbar } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import styles from '@components/_storybook/styles.module.scss';
import storiesStyles from './SnackbarStories.module.scss';

import { colorMapping, indicatorMapping } from '../enums';
import { ISnackbar } from '../types';
import argsTypes from './argsTypes';
import {
  DEFAULT_SNACKBAR,
  SNACKBAR_ACTION,
  SNACKBAR_CLOSE,
  SNACKBAR_COLOR,
  SNACKBAR_CUSTOM_ICON,
  SNACKBAR_ICON, SNACKBAR_INDICATOR,
  SNACKBAR_OPACITY
} from './constants';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/Snackbar/Stories',
  component: Snackbar,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof Snackbar>;

export const DefaultSnackbar = (argTypes: ISnackbar): ReactNode => {
  return <Snackbar {...argTypes} />;
};

DefaultSnackbar.storyName = DEFAULT_SNACKBAR;
DefaultSnackbar.args = {
  children: DEFAULT_SNACKBAR
};

export const SnackbarClose = (argTypes: ISnackbar): ReactNode => {
  return <Snackbar {...argTypes} />;
};

SnackbarClose.storyName = SNACKBAR_CLOSE;
SnackbarClose.args = {
  children: SNACKBAR_CLOSE,
  close: action('onClose')
};

export const SnackbarAction = (argTypes: ISnackbar): ReactNode => {
  return <Snackbar {...argTypes} />;
};

SnackbarAction.storyName = SNACKBAR_ACTION;
SnackbarAction.args = {
  children: SNACKBAR_ACTION,
  actionButton: action('onActionClicked')
};

export const SnackbarColor = (argTypes: ISnackbar): ReactNode => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--8-space)'
      }}
    >
      {Object.values(colorMapping).map((color: colorMapping) => (
        <Snackbar key={color} {...argTypes} color={color} />
      ))}
    </div>
  );
};

export const SnackbarIndicator = (argTypes: ISnackbar): ReactNode => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--8-space)'
      }}
    >
      {Object.values(indicatorMapping).map((color: indicatorMapping) => (
        <Snackbar key={color} {...argTypes} indicator={color} className={storiesStyles.bg} />
      ))}
    </div>
  );
};

SnackbarColor.storyName = SNACKBAR_COLOR;
SnackbarColor.args = {
  children: SNACKBAR_COLOR,
  close: action('onClose'),
  actionButton: action('onActionClicked')
};

SnackbarIndicator.storyName = SNACKBAR_INDICATOR;
SnackbarIndicator.args = {
  children: SNACKBAR_INDICATOR,
  close: action('onClose'),
  actionButton: action('onActionClicked')
};

export const SnackbarIcon = (argTypes: ISnackbar): ReactNode => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--8-space'
      }}
    >
      {Object.values(colorMapping).map((color: colorMapping) => (
        <Snackbar key={color} {...argTypes} withIcon color={color} />
      ))}
    </div>
  );
};

SnackbarIcon.storyName = SNACKBAR_ICON;
SnackbarIcon.args = {
  children: SNACKBAR_ICON,
  close: action('onClose'),
  actionButton: action('onActionClicked')
};

export const SnackbarCustomIcon = (argTypes: ISnackbar): ReactNode => {
  return (
    <Snackbar
      {...argTypes}
      customIcon={<Icon name="IconEducationOutlined24" containerSize={24} htmlColor={'var(--default-second)'} />}
    />
  );
};

SnackbarCustomIcon.storyName = SNACKBAR_CUSTOM_ICON;
SnackbarCustomIcon.args = {
  withIcon: true,
  children: SNACKBAR_CUSTOM_ICON,
  color: colorMapping.dark,
  close: action('onClose'),
  actionButton: action('onActionClicked')
};

export const SnackbarOpacity = (argTypes: ISnackbar): ReactNode => {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--8-space'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--8-space'
        }}
      >
        {Object.values(colorMapping).map((color: colorMapping) => (
          <Snackbar key={color} {...argTypes} withIcon color={color} />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--8-space'
        }}
      >
        {Object.values(colorMapping).map((color: colorMapping) => (
          <Snackbar key={`${color}_opacity`} {...argTypes} withIcon color={color} bgOpacity={70} />
        ))}
      </div>
    </div>
  );
};

SnackbarOpacity.storyName = SNACKBAR_OPACITY;
SnackbarOpacity.args = {
  children: SNACKBAR_OPACITY,
  close: action('onClose'),
  actionButton: action('onActionClicked')
};
