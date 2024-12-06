import React from 'react';

import styles from './Illustration.module.scss';

import { ILLUSTRATION_PICTURES } from '../constants';
import { EPictureSizes } from '../enums';
import Illustration from '../index';
import { IIllustrationProps } from '../types';
import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{<Story />}</div>;

export default {
  title: 'Components/Illustration/Stories',
  component: Illustration,
  decorators: [withPadding],
  argTypes: argsTypes
};

const createSizeSpecificArgTypes = (size: EPictureSizes) => ({
  ...argsTypes,
  size: {
    ...argsTypes.size,
    control: { type: 'select' },
    table: {
      disable: true
    }
  },
  name: {
    ...argsTypes.name,
    options: Object.keys(ILLUSTRATION_PICTURES[size]),
    control: { type: 'select' }
  }
});

export const Small = (args: IIllustrationProps) => (
  <div className={styles.wrapper}>
    <Illustration {...args} />
  </div>
);
Small.storyName = 'Иллюстрация 100x100';
Small.args = {
  size: EPictureSizes.Small,
  name: Object.keys(ILLUSTRATION_PICTURES[EPictureSizes.Small])[0]
};
Small.argTypes = createSizeSpecificArgTypes(EPictureSizes.Small);

export const Medium = (args: IIllustrationProps) => (
  <div className={styles.wrapper}>
    <Illustration {...args} />
  </div>
);
Medium.storyName = 'Иллюстрация 200x200';
Medium.args = {
  size: EPictureSizes.Medium,
  name: Object.keys(ILLUSTRATION_PICTURES[EPictureSizes.Medium])[0]
};
Medium.argTypes = createSizeSpecificArgTypes(EPictureSizes.Medium);

export const Wide = (args: IIllustrationProps) => (
  <div className={styles.wrapper}>
    <Illustration {...args} />
  </div>
);
Wide.storyName = 'Иллюстрация 300x164';
Wide.args = {
  size: EPictureSizes.Wide,
  name: Object.keys(ILLUSTRATION_PICTURES[EPictureSizes.Wide])[0]
};
Wide.argTypes = createSizeSpecificArgTypes(EPictureSizes.Wide);

export const Standard = (args: IIllustrationProps) => (
  <div className={styles.wrapper}>
    <Illustration {...args} />
  </div>
);
Standard.storyName = 'Иллюстрация 300x200';
Standard.args = {
  size: EPictureSizes.Standard,
  name: Object.keys(ILLUSTRATION_PICTURES[EPictureSizes.Standard])[0]
};
Standard.argTypes = createSizeSpecificArgTypes(EPictureSizes.Standard);

export const Tall = (args: IIllustrationProps) => (
  <div className={styles.wrapper}>
    <Illustration {...args} />
  </div>
);
Tall.storyName = 'Иллюстрация 300x232';
Tall.args = {
  size: EPictureSizes.Tall,
  name: Object.keys(ILLUSTRATION_PICTURES[EPictureSizes.Tall])[0]
};
Tall.argTypes = createSizeSpecificArgTypes(EPictureSizes.Tall);

export const ExtraLarge = (args: IIllustrationProps) => (
  <div className={styles.wrapper}>
    <Illustration {...args} />
  </div>
);
ExtraLarge.storyName = 'Иллюстрация 460x340';
ExtraLarge.args = {
  size: EPictureSizes.ExtraLarge,
  name: Object.keys(ILLUSTRATION_PICTURES[EPictureSizes.ExtraLarge])[0]
};
ExtraLarge.argTypes = createSizeSpecificArgTypes(EPictureSizes.ExtraLarge);
