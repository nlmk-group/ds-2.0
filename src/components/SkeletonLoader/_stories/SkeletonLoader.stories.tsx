import React from 'react';

import SkeletonLoader from '@components/SkeletonLoader';

import styles from '@components/_storybook/styles.module.scss';

import argsTypes from './argsTypes';
import { Box } from '@components/index';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{<Story/>}</div>;

export default {
  title: 'Components/SkeletonLoader/Stories',
  component: SkeletonLoader,
  decorators: [withPadding],
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
      <Box gap={20}>
        <SkeletonLoader width="50px" count={2} height="50px" />
        <SkeletonLoader width="50px" count={2} height="50px" />
        <SkeletonLoader width="780px" count={2} height="50px" />
      </Box>
      <Box gap={20}>
        <SkeletonLoader width="600px" count={4} height="50px" />
        <SkeletonLoader width="230px" count={4} height="50px" />
        <SkeletonLoader width="50px" count={4} height="50px" />
      </Box>
    </div>
  );
};
SkeletonLoaderMulti.storyName = 'Skeleton loader с множественными блоками';
