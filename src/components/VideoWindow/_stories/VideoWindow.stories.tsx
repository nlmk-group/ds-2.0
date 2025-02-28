import React, { useState } from 'react';

import Button from '@components/Button';

import styles from './VideoWindow.module.scss';

import { VideoWindowProps } from '../types';
import VideoWindow from '../VideoWindow';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/VideoWindow/Stories',
  component: VideoWindow,
  decorators: [withWrapper],
  parameters: { actions: { argTypesRegex: '^on.*' } }
};

export const VideoWindowDefault = (argTypes: VideoWindowProps): JSX.Element => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <div className={styles.main}>
      <Button onClick={() => setIsVideoOpen(true)} variant="primary" size="s">
        Открыть видео
      </Button>

      {isVideoOpen && (
        <VideoWindow
          videoUrl={argTypes.videoUrl}
          title={argTypes.title}
          autoPlay={argTypes.autoPlay}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </div>
  );
};

VideoWindowDefault.args = {
  videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  title: 'Демо-видео'
};
VideoWindowDefault.storyName = 'VideoWindow по умолчанию';

export const VideoWindowWithAutoPlay = (argTypes: VideoWindowProps): JSX.Element => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <div className={styles.main}>
      <Button onClick={() => setIsVideoOpen(true)} variant="primary" size="s">
        Открыть видео
      </Button>

      {isVideoOpen && (
        <VideoWindow
          videoUrl={argTypes.videoUrl}
          title={argTypes.title}
          autoPlay={argTypes.autoPlay}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </div>
  );
};
VideoWindowWithAutoPlay.storyName = 'VideoWindow c запуском видео при открытии';
VideoWindowWithAutoPlay.parameters = {
  videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  title: 'Демо-видео c автозапуском',
  autoPlay: true
};
