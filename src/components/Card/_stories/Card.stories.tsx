import React, { ReactNode } from 'react';

import { Card } from '@components/index';
import { Meta } from '@storybook/react';

import stylesCard from './Card.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import ContentExample from '../ContentExample';
import { orientationMapping } from '../enums';
import { ICard } from '../types';
import argsTypes from './argsTypes';
import { CARD_ORIENTATION, DEFAULT_CARD } from './text';

const withWrapper = (Story: any) => (
  <div
    className={styles.wrapper}
    style={{
      background: 'var(--background-default)',
      width: 'fit-content'
    }}
  >
    {Story()}
  </div>
);

export default {
  title: 'Components/Card/Stories',
  component: Card,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof Card>;

export const CardDefault = (argTypes: ICard): ReactNode => {
  return (
    <Card {...argTypes} className={stylesCard['card-vertical']}>
      <ContentExample />
    </Card>
  );
};

CardDefault.storyName = DEFAULT_CARD;

export const CardOrientation = (argTypes: ICard): ReactNode => {
  return (
    <div style={{ display: 'inline-grid', gap: 'var(--24-size)' }}>
      {Object.values(orientationMapping).map((orientation: orientationMapping, index: number) => (
        <Card key={index} {...argTypes} orientation={orientation} className={stylesCard[`card-${orientation}`]}>
          <ContentExample orientation={orientation} />
        </Card>
      ))}
    </div>
  );
};

CardOrientation.storyName = CARD_ORIENTATION;
CardOrientation.args = {};
