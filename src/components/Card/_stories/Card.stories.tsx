import React, { ReactNode, useState } from 'react';

import { Card } from '@components/index';
import { Meta } from '@storybook/react';

import styles from '@components/_storybook/styles.module.scss';

import ContentExample from '../ContentExample';
import { imageURL } from '../ContentExample/constants';
import { EOrientationMapping } from '../enums';
import { ICard } from '../types';
import argTypes from './argsTypes';
import { CARD_ORIENTATION, CARD_VARIANT, DEFAULT_CARD } from './text';

const withWrapper = (Story: any) => (
  <div
    className={styles.wrapper}
    style={{
      background: 'var(--steel-30)',
      width: 'fit-content'
    }}
  >
    {<Story/>}
  </div>
);

export default {
  title: 'Components/Card/Stories',
  component: Card,
  decorators: [withWrapper],
  argTypes
} as Meta<typeof Card>;

export const CardDefault = (argTypes: ICard): ReactNode => {
  const [checked, setChecked] = useState<boolean>(false);
  const isVertical = argTypes.orientation === EOrientationMapping.vertical || !argTypes.orientation;

  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Card {...argTypes}>
        <ContentExample />
      </Card>
      <Card {...argTypes}>
        <ContentExample checked={checked} checkAction={setChecked} />
      </Card>
    </div>
  );
};

CardDefault.storyName = DEFAULT_CARD;
CardDefault.arg = {
  orientation: EOrientationMapping.vertical
};

export const CardVariant = (argTypes: ICard): ReactNode => {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Card {...argTypes}>
        <ContentExample href={'https://nlmk-group.github.io/ds-2.0/?path=/docs/components-card-info--docs'} />
      </Card>
      <Card {...argTypes}>
        <ContentExample imageURL={imageURL} />
      </Card>
    </div>
  );
};

CardVariant.storyName = CARD_VARIANT;
CardVariant.arg = {
  orientation: EOrientationMapping.vertical
};

export const CardOrientation = (argTypes: ICard): ReactNode => {
  return (
    <div style={{ display: 'inline-grid', gap: 'var(--24-size)' }}>
      {Object.values(EOrientationMapping).map((orientation: EOrientationMapping, index: number) => (
        <Card key={index} {...argTypes} orientation={orientation}>
          <ContentExample orientation={orientation} />
        </Card>
      ))}
    </div>
  );
};

CardOrientation.storyName = CARD_ORIENTATION;
CardOrientation.args = {};
