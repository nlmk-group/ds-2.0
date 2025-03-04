import React, { useState } from 'react';

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

import { useDraggable } from './hooks';

export const VideoWindowV1 = ({
  videoUrl,
  id,
  title,
  autoPlay,
  resizable,
  draggable,
  draggableStartPosition,
  onClose,
  styles
}: VideoWindowProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(prev => !prev);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(prev => !prev);
    setIsMinimized(false);
  };

  const draggableData = draggable ? useDraggable(isFullscreen, draggableStartPosition) : null;

  return (
    <div
      className={clsx(videoStyles.videoWindow, {
        [videoStyles.fullscreen]: isFullscreen && !isMinimized,
        [videoStyles.minimized]: isMinimized,
        [videoStyles.resizable]: !isFullscreen && resizable
      })}
      style={draggable ? draggableData?.draggableStyle : undefined}
    >
      <div
        className={clsx(videoStyles.videoWindowHeader, { [videoStyles.draggable]: draggable && !isFullscreen })}
        onMouseDown={draggable ? draggableData?.handleMouseDown : undefined}
      >
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
          <video id={id} controls src={videoUrl} controlsList="nodownload" autoPlay={autoPlay} />
        </div>
      )}
      {!isMinimized && <div className={videoStyles.resizer} />}
    </div>
  );
};
