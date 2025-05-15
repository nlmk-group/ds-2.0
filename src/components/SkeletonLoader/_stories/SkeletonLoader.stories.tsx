import React from 'react';

import { Box } from '@components/index';
import SkeletonLoader from '@components/SkeletonLoader';

import { ESkeletonAnimation, ISkeletonLoadingProps } from '../types';
import argsTypes from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{<Story />}</div>;

export default {
  title: 'Components/SkeletonLoader/Stories',
  component: SkeletonLoader,
  decorators: [withPadding],
  argTypes: argsTypes
};

export const SkeletonLoaderDefault = (argTypes: ISkeletonLoadingProps): JSX.Element => {
  return <SkeletonLoader width="900px" {...argTypes} />;
};
SkeletonLoaderDefault.storyName = 'Skeleton loader состояние по умолчанию';

export const SkeletonLoaderPulseAnimation = (argsTypes: ISkeletonLoadingProps): JSX.Element => {
  return <SkeletonLoaderDefault {...argsTypes} />;
};
SkeletonLoaderPulseAnimation.storyName = 'Skeleton loader c анимацией пульсации';
SkeletonLoaderPulseAnimation.args = { animation: 'pulse' };

export const SkeletonLoaderMulti = (argTypes: ISkeletonLoadingProps): JSX.Element => {
  const skeletonArgs = { height: '50px', ...argTypes };
  return (
    <div style={{ width: '900px' }}>
      <Box gap={20}>
        <SkeletonLoader width="50px" count={2} {...skeletonArgs} />
        <SkeletonLoader width="50px" count={2} {...skeletonArgs} />
        <SkeletonLoader width="780px" count={2} {...skeletonArgs} />
      </Box>
      <Box gap={20}>
        <SkeletonLoader width="600px" count={4} {...skeletonArgs} />
        <SkeletonLoader width="230px" count={4} {...skeletonArgs} />
        <SkeletonLoader width="50px" count={4} {...skeletonArgs} />
      </Box>
    </div>
  );
};
SkeletonLoaderMulti.storyName = 'Skeleton loader с множественными блоками';

export const SkeletonLoaderMultiPulseAnimation = (argTypes: ISkeletonLoadingProps): JSX.Element => {
  const skeletonArgs = { height: '50px', animation: ESkeletonAnimation.pulse, ...argTypes };
  return (
    <div style={{ width: '900px' }}>
      <Box gap={20}>
        <SkeletonLoader width="50px" count={2} {...skeletonArgs} />
        <SkeletonLoader width="50px" count={2} {...skeletonArgs} />
        <SkeletonLoader width="780px" count={2} {...skeletonArgs} />
      </Box>
      <Box gap={20}>
        <SkeletonLoader width="600px" count={4} {...skeletonArgs} />
        <SkeletonLoader width="230px" count={4} {...skeletonArgs} />
        <SkeletonLoader width="50px" count={4} {...skeletonArgs} />
      </Box>
    </div>
  );
};
SkeletonLoaderMultiPulseAnimation.storyName = 'Skeleton loader с множественными блоками и анимацией пульсации';
