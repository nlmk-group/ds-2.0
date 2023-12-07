import React from 'react';

import SkeletonLoader from '@components/SkeletonLoader';
import { withDesign } from 'storybook-addon-designs';

import styles from '@components/_storybook/styles.module.scss';

import argsTypes from './argsTypes';

const withPadding = (Story: () => any) => (
  <div style={{ minHeight: 80 }}>{Story()}</div>
);

export default {
  title: 'Components/SkeletonLoader/Stories',
  component: SkeletonLoader,
  decorators: [withDesign, withPadding],
  argTypes: argsTypes
};

export const SkeletonLoaderDefault = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <SkeletonLoader width="900px" />
      </div>
    </div>
  );
};
SkeletonLoaderDefault.storyName = 'Skeleton loader состояние по умолчанию';

export const SkeletonLoaderMulti = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <SkeletonLoader width="50px" count={2} height="50px" />
        <SkeletonLoader width="50px" count={2} height="50px" />
        <SkeletonLoader width="780px" count={2} height="50px" />
      </div>      
      <div className={styles.row}>
        <SkeletonLoader width="600px" count={4} height="50px" />
        <SkeletonLoader width="230px" count={4} height="50px" />
        <SkeletonLoader width="50px" count={4} height="50px" />
      </div>
    </div>
  );
};
SkeletonLoaderMulti.storyName =
  'Skeleton loader с множественными блоками';
