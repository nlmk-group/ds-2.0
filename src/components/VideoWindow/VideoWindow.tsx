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

const VideoWindow = ({
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
  const [isActive, setIsActive] = useState(false);
  const noTitle = !title;

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
        [videoStyles.resizable]: !isFullscreen && resizable,
        [videoStyles.active]: !isFullscreen && isActive
      })}
      style={draggable ? draggableData?.draggableStyle : undefined}
      tabIndex={0}
      onClick={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
    >
      <div
        className={clsx(videoStyles.videoWindowHeader, {
          [videoStyles.draggable]: draggable && !isFullscreen,
          [videoStyles.headerWithoutTitle]: noTitle && !isMinimized
        })}
        onMouseDown={draggable ? draggableData?.handleMouseDown : undefined}
      >
        {title && (
          <>
            {React.isValidElement(title) ? (
              title
            ) : (
              <Typography
                color="var(--unique-white)"
                variant="Body1-Medium"
                className={styles?.videoTitleClassName}
                style={styles?.videoTitleStyle}
              >
                {title}
              </Typography>
            )}
          </>
        )}
        <div className={videoStyles.videoControls}>
          <Button
            onClick={toggleFullscreen}
            iconButton={isFullscreen ? <IconASIImplementationOutlined24 /> : <IconFullScreenOpenOutlined24 />}
            color="grey"
            variant="secondary"
            size="s"
            title={isFullscreen ? 'Выйти из полноэкранного режима' : 'Перейти в полноэкранный режим'}
          />
          <Button
            onClick={toggleMinimize}
            iconButton={isMinimized ? <IconASIImplementationOutlined24 /> : <IconDeleteMinusOutlined24 />}
            color="grey"
            variant="secondary"
            size="s"
            title={isMinimized ? 'Развернуть' : 'Свернуть'}
          />
          <Button
            onClick={onClose}
            iconButton={<IconCloseOutlined24 />}
            color="grey"
            variant="secondary"
            size="s"
            title="Закрыть"
          />
        </div>
      </div>
      {!isMinimized && (
        <div className={clsx(videoStyles.videoContent, { [videoStyles.videoWithoutTitle]: noTitle })}>
          <video id={id} controls src={videoUrl} controlsList="nodownload" autoPlay={autoPlay} />
        </div>
      )}
      {!isMinimized && <div className={videoStyles.resizer} />}
    </div>
  );
};

export default VideoWindow;
