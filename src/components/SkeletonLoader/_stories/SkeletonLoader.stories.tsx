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
  return <SkeletonLoader width="min(900px, 100%)" {...argTypes} />;
};
SkeletonLoaderDefault.storyName = 'Скелетон загрузки · SkeletonLoader';

export const SkeletonLoaderPulseAnimation = (argsTypes: ISkeletonLoadingProps): JSX.Element => {
  return <SkeletonLoaderDefault {...argsTypes} />;
};
SkeletonLoaderPulseAnimation.storyName = 'Skeleton loader c анимацией пульсации';
SkeletonLoaderPulseAnimation.args = { animation: 'pulse' };

export const SkeletonLoaderMulti = (argTypes: ISkeletonLoadingProps): JSX.Element => {
  const skeletonArgs = { height: '50px', ...argTypes };
  return (
    <div style={{ width: 'min(900px, 100%)' }}>
      <Box display="grid" gap={12} st={{ gridTemplateColumns: '50px 50px minmax(0, 1fr)' }}>
        {[0, 1, 2].map(column => (
          <SkeletonLoader key={column} width="100%" count={2} {...skeletonArgs} />
        ))}
      </Box>
      <Box display="grid" gap={12} st={{ gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 1fr) 50px' }}>
        {[0, 1, 2].map(column => (
          <SkeletonLoader key={column} width="100%" count={4} {...skeletonArgs} />
        ))}
      </Box>
    </div>
  );
};
SkeletonLoaderMulti.storyName = 'Skeleton loader с множественными блоками';

export const SkeletonLoaderMultiPulseAnimation = (argTypes: ISkeletonLoadingProps): JSX.Element => {
  const skeletonArgs = { height: '50px', animation: ESkeletonAnimation.pulse, ...argTypes };
  return (
    <div style={{ width: 'min(900px, 100%)' }}>
      <Box display="grid" gap={12} st={{ gridTemplateColumns: '50px 50px minmax(0, 1fr)' }}>
        {[0, 1, 2].map(column => (
          <SkeletonLoader key={column} width="100%" count={2} {...skeletonArgs} />
        ))}
      </Box>
      <Box display="grid" gap={12} st={{ gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 1fr) 50px' }}>
        {[0, 1, 2].map(column => (
          <SkeletonLoader key={column} width="100%" count={4} {...skeletonArgs} />
        ))}
      </Box>
    </div>
  );
};
SkeletonLoaderMultiPulseAnimation.storyName = 'Skeleton loader с множественными блоками и анимацией пульсации';
