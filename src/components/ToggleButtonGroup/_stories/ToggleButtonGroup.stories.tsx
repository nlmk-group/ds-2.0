import React, { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react';
import { ToggleButtonGroup } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';
import { withDesign } from 'storybook-addon-designs';


import { IToggleButtonGroup } from '../types'
import { argsTypes } from './argsTypes';
import {
  DEFAULT_TOGGLE_BUTTON,
  TOGGLE_BUTTON_ICON,
  TOGGLE_BUTTON_BADGE,
  TOGGLE_BUTTON_SIZES,
  TOGGLE_BUTTON_COLOR_OPTIONS,
  TOGGLE_BUTTON_OPTIONS
} from './constants';
import {
  fourButtonOptions,
  threeButtonDefault,
  threeButtonIcon,
  threeButtonIconBadge
} from '../constants';
import { sizeMapping, statusMapping } from '../enums';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/ToggleButtonGroup/Stories',
  component: ToggleButtonGroup,
  decorators: [withDesign, withWrapper],
  argTypes: argsTypes
} as Meta<typeof ToggleButtonGroup>;

export const DefaultBtnGroup = (argTypes: IToggleButtonGroup): ReactNode => {
  return (
    <ToggleButtonGroup {...argTypes} />
  );
};

DefaultBtnGroup.storyName = DEFAULT_TOGGLE_BUTTON;
DefaultBtnGroup.args = {
  btnGroup: threeButtonDefault
};

export const BtnGroupIcon = (argTypes: IToggleButtonGroup): ReactNode => {
  return (
    <ToggleButtonGroup {...argTypes} />
  );
};

BtnGroupIcon.storyName = TOGGLE_BUTTON_ICON;
BtnGroupIcon.args = {
  btnGroup: threeButtonIcon
};

export const BtnGroupIconBadge = (argTypes: IToggleButtonGroup): ReactNode => {
  return (
    <ToggleButtonGroup {...argTypes} />
  );
};

BtnGroupIconBadge.storyName = TOGGLE_BUTTON_BADGE;
BtnGroupIconBadge.args = {
  btnGroup: threeButtonIconBadge
};

export const BtnGroupSizes = (argTypes: IToggleButtonGroup): ReactNode => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      {Object.values(sizeMapping).map((size: sizeMapping, index: number) => (
        <ToggleButtonGroup
          key={index}
          {...argTypes}
          size={size}
        />
      ))}
    </div>
  );
};

BtnGroupSizes.storyName = TOGGLE_BUTTON_SIZES;
BtnGroupSizes.args = {
  btnGroup: threeButtonIconBadge
};

export const BtnGroupOptions = (argTypes: IToggleButtonGroup): ReactNode => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      {Object.values(statusMapping).map((status: statusMapping, index: number) => (
        <ToggleButtonGroup
          key={index}
          {...argTypes}
          status={status}
        />
      ))}
    </div>
  );
};

BtnGroupOptions.storyName = TOGGLE_BUTTON_COLOR_OPTIONS;
BtnGroupOptions.args = {
  btnGroup: threeButtonIconBadge
};

export const BtnOptions = (argTypes: IToggleButtonGroup): ReactNode => {
  return (
    <ToggleButtonGroup {...argTypes}/>
  );
};

BtnOptions.storyName = TOGGLE_BUTTON_OPTIONS;
BtnOptions.args = {
  btnGroup: fourButtonOptions
};