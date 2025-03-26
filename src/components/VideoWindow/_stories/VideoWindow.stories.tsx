import React, { useState } from 'react';

import Button from '@components/Button';

import styles from './VideoWindow.module.scss';

import { TVideoWindowProps } from '../types';
import VideoWindow from '../VideoWindow';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/VideoWindow/Stories',
  component: VideoWindow,
  decorators: [withWrapper],
  parameters: { actions: { argTypesRegex: '^on.*' } }
};

export const VideoWindowDefault = (argTypes: TVideoWindowProps): JSX.Element => {
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
          resizable={argTypes.resizable}
          draggable={argTypes.draggable}
          draggableStartPosition={argTypes.draggableStartPosition}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </div>
  );
};

VideoWindowDefault.args = {
  videoUrl: 'https://nlmk.com/upload/iblock/f27/fusion_short_rus.mp4',
  title: 'Демо-видео',
  autoPlay: false,
  resizable: false,
  draggable: false
};
VideoWindowDefault.storyName = 'VideoWindow по умолчанию';

export const VideoWindowWithDragAndResize = (argTypes: TVideoWindowProps): JSX.Element => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <div className={styles.main}>
      <Button onClick={() => setIsVideoOpen(true)} variant="primary" size="s">
        Открыть видео с возможностью перетаскивания и изменения размера
      </Button>

      {isVideoOpen && (
        <VideoWindow
          videoUrl={argTypes.videoUrl}
          title={argTypes.title}
          draggable
          resizable
          draggableStartPosition={{ x: 100, y: 100 }}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </div>
  );
};

VideoWindowWithDragAndResize.args = {
  videoUrl: 'https://nlmk.com/upload/iblock/f27/fusion_short_rus.mp4',
  title: 'Перетаскиваемое видео'
};
VideoWindowWithDragAndResize.storyName = 'VideoWindow с drag-n-drop и resize';
VideoWindowWithDragAndResize.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const VideoWindowWithAutoPlay = (argTypes: TVideoWindowProps): JSX.Element => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <div className={styles.main}>
      <Button onClick={() => setIsVideoOpen(true)} variant="primary" size="s">
        Открыть видео с автозапуском
      </Button>

      {isVideoOpen && (
        <VideoWindow
          videoUrl={argTypes.videoUrl}
          title={argTypes.title}
          autoPlay
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </div>
  );
};

VideoWindowWithAutoPlay.args = {
  videoUrl: 'https://nlmk.com/upload/iblock/f27/fusion_short_rus.mp4',
  title: 'Видео с автозапуском'
};
VideoWindowWithAutoPlay.storyName = 'VideoWindow c автозапуском';
VideoWindowWithAutoPlay.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
