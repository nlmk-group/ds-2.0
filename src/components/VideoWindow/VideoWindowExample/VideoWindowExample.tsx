import React, { useState } from 'react';



import Button from '@components/Button';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

import styles from './styles.module.scss';

import VideoWindow from '../VideoWindow';

const TitleExample = (): JSX.Element => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Icon name={'IconEyeOutlined24'} color="success" containerSize={24} />
      <Typography color="var(--unique-white)" variant="Body1-Medium" className={styles?.videoTitleClassName}>
        Демо видео
      </Typography>
    </div>
  );
};

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
          // title="Демо-видео c автозапуском"
          title={<TitleExample/>}
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