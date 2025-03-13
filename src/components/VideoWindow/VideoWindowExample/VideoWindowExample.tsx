import React, { useState } from 'react';



import Button from '@components/Button';

import styles from './styles.module.scss';

import VideoWindow from '../VideoWindow';

export const VideoWindowExample = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <div className={styles.main}>
      <Button onClick={() => setIsVideoOpen(true)} variant="primary" size="s">
        Открыть видео
      </Button>

      {isVideoOpen && (
        <VideoWindow
          videoUrl="https://nlmk.com/upload/iblock/f27/fusion_short_rus.mp4"
          title="Демо-видео c автозапуском"
          resizable
          draggable
          draggableStartPosition={{ x: 12, y: 300 }}
          autoPlay
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </div>
  );
};