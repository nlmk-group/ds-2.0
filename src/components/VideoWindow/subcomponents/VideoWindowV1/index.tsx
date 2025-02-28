import React, { useRef, useState } from 'react';

import Button from '@components/Button';
import {
  IconASIImplementationOutlined24,
  IconCloseOutlined24,
  IconDeleteMinusOutlined24,
  IconFullScreenOpenOutlined24
} from '@components/Icon/IconsDirectory';
import Typography from '@components/Typography';
import { VideoWindowProps } from '@components/VideoWindow/types';
import clsx from 'clsx';

import videoStyles from './styles.module.scss';

export const VideoWindowV1: React.FC<VideoWindowProps> = ({ videoUrl, title, autoPlay, onClose, styles }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMinimize = () => {
    setIsMinimized(cur => !cur);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(cur => !cur);
    setIsMinimized(false);
  };

  return (
    <div
      className={clsx(videoStyles.videoWindow, {
        [videoStyles.fullscreen]: isFullscreen && !isMinimized,
        [videoStyles.minimized]: isMinimized
      })}
    >
      <div className={videoStyles.videoWindowHeader}>
        {title && (
          <Typography
            color="var(--steel-10)"
            variant="Body1-Medium"
            className={styles?.videoTitleClassName}
            style={styles?.videoTitleStyle}
          >
            {title}
          </Typography>
        )}
        <div className={videoStyles.videoControls}>
          <Button
            onClick={toggleFullscreen}
            iconButton={isFullscreen ? <IconASIImplementationOutlined24 /> : <IconFullScreenOpenOutlined24 />}
            color="grey"
            variant="secondary"
            size="s"
          />
          <Button
            onClick={toggleMinimize}
            iconButton={isMinimized ? <IconASIImplementationOutlined24 /> : <IconDeleteMinusOutlined24 />}
            color="grey"
            variant="secondary"
            size="s"
          />
          <Button onClick={onClose} iconButton={<IconCloseOutlined24 />} color="grey" variant="secondary" size="s" />
        </div>
      </div>
      {!isMinimized && (
        <div className={videoStyles.videoContent}>
          <video ref={videoRef} controls src={videoUrl} controlsList="nodownload" autoPlay={autoPlay} />
        </div>
      )}
    </div>
  );
};
