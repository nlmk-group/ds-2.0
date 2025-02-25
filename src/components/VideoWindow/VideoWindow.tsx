import React from 'react';

import { VideoWindowProps } from './types';

import { VideoWindowV1 } from './subcomponents';

const VideoWindow = (prop: VideoWindowProps) => {
  return <VideoWindowV1 {...prop} />;
};

export default VideoWindow;
