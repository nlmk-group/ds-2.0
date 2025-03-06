import React, { ReactNode } from 'react';

import { SegmentButtonGroup, Typography } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import styles from '@components/_storybook/styles.module.scss';

import { ESegmentButtonGroupSizes } from '../enums';
import SegmentButton from '../SegmentButton';
import { ISegmentButtonGroupProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/SegmentButtonGroup/Stories',
  component: SegmentButtonGroup,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof SegmentButtonGroup>;

export const SegmentButtonGroupDefault = (argTypes: ISegmentButtonGroupProps): ReactNode => {
  return (
    <SegmentButtonGroup {...argTypes}>
      <SegmentButton onClick={action('onClick')}>Печенье</SegmentButton>
      <SegmentButton onClick={action('onClick')}>Торты</SegmentButton>
      <SegmentButton onClick={action('onClick')}>Конфеты</SegmentButton>
    </SegmentButtonGroup>
  );
};

SegmentButtonGroupDefault.storyName = 'SegmentButtonGroup по умолчанию';

export const SegmentButtonGroupSizes = (argTypes: ISegmentButtonGroupProps): ReactNode => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      {Object.values(ESegmentButtonGroupSizes).map((size, index) => (
        <SegmentButtonGroup key={index} size={size} {...argTypes}>
          <SegmentButton onClick={action('onClick')}>Печенье</SegmentButton>
          <SegmentButton onClick={action('onClick')}>Торты</SegmentButton>
          <SegmentButton onClick={action('onClick')}>Конфеты</SegmentButton>
        </SegmentButtonGroup>
      ))}
    </div>
  );
};

SegmentButtonGroupSizes.storyName = 'SegmentButtonGroup в разных размерах';
export const SegmentButtonGroupWithTypography = (argTypes: ISegmentButtonGroupProps): ReactNode => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      {Object.values(ESegmentButtonGroupSizes).map((size, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography variant="Body1-Bold" color="var(--steel-90)">
            {`Размер ${size} `}
          </Typography>

          <SegmentButtonGroup size={size} {...argTypes}>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Bold" color="var(--steel-90)">
                Печенье
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Bold" color="var(--steel-90)">
                Торты
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Bold" color="var(--steel-90)">
                Конфеты
              </Typography>
            </SegmentButton>
          </SegmentButtonGroup>

          <SegmentButtonGroup size={size} {...argTypes}>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Medium" color="var(--steel-90)">
                Печенье
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Medium" color="var(--steel-90)">
                Торты
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Medium" color="var(--steel-90)">
                Конфеты
              </Typography>
            </SegmentButton>
          </SegmentButtonGroup>
        </div>
      ))}
    </div>
  );
};
SegmentButtonGroupWithTypography.storyName = 'SegmentButtonGroup с разными обертками для текста';
