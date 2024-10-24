import React, { ReactNode } from 'react';

import { SegmentButtonGroup } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import styles from '@components/_storybook/styles.module.scss';

import { buttonColor } from '../enums';
import { ISegmentButtonGroup } from '../types';
import { argsTypes } from './argsTypes';
import {
  DEFAULT_SEGMENT_BUTTON,
  SEGMENT_BUTTON_COLOR_OPTIONS,
  SEGMENT_BUTTON_COLOR_OPTIONS_VARIABLE,
  SEGMENT_BUTTON_COMPACT
} from './constants';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story/>}</div>;

export default {
  title: 'Components/SegmentButtonGroup/Stories',
  component: SegmentButtonGroup,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof SegmentButtonGroup>;

export const DefaultBtnGroup = (argTypes: ISegmentButtonGroup): ReactNode => {
  return (
    <SegmentButtonGroup {...argTypes}>
      <SegmentButtonGroup.Button onClick={action('onClick')}>Печенье</SegmentButtonGroup.Button>
      <SegmentButtonGroup.Button onClick={action('onClick')}>Торты</SegmentButtonGroup.Button>
      <SegmentButtonGroup.Button onClick={action('onClick')}>Конфеты</SegmentButtonGroup.Button>
    </SegmentButtonGroup>
  );
};

DefaultBtnGroup.storyName = DEFAULT_SEGMENT_BUTTON;

export const BtnGroupCompact = (argTypes: ISegmentButtonGroup): ReactNode => {
  return (
    <SegmentButtonGroup compact {...argTypes}>
      <SegmentButtonGroup.Button onClick={action('onClick')}>Печенье</SegmentButtonGroup.Button>
      <SegmentButtonGroup.Button onClick={action('onClick')}>Торты</SegmentButtonGroup.Button>
      <SegmentButtonGroup.Button onClick={action('onClick')}>Конфеты</SegmentButtonGroup.Button>
    </SegmentButtonGroup>
  );
};

BtnGroupCompact.storyName = SEGMENT_BUTTON_COMPACT;

export const BtnGroupOptions = (argTypes: ISegmentButtonGroup): ReactNode => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      {Object.values(buttonColor).map((color: buttonColor, index: number) => (
        <SegmentButtonGroup color={color} key={index} {...argTypes}>
          <SegmentButtonGroup.Button onClick={action('onClick')}>Печенье</SegmentButtonGroup.Button>
          <SegmentButtonGroup.Button onClick={action('onClick')}>Торты</SegmentButtonGroup.Button>
          <SegmentButtonGroup.Button onClick={action('onClick')}>Конфеты</SegmentButtonGroup.Button>
        </SegmentButtonGroup>
      ))}
    </div>
  );
};

BtnGroupOptions.storyName = SEGMENT_BUTTON_COLOR_OPTIONS;

export const BtnGroupOptionsVariable = (argTypes: ISegmentButtonGroup): ReactNode => {
  return (
    <SegmentButtonGroup {...argTypes}>
      {Object.values(buttonColor).map((color: buttonColor, index: number) => (
        <SegmentButtonGroup.Button color={color} key={index} onClick={action('onClick')}>
          {index}
        </SegmentButtonGroup.Button>
      ))}
    </SegmentButtonGroup>
  );
};

BtnGroupOptionsVariable.storyName = SEGMENT_BUTTON_COLOR_OPTIONS_VARIABLE;
