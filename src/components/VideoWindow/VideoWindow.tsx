import React, { useState } from 'react';

import Button from '@components/Button';
import {
  IconASIImplementationOutlined24,
  IconCloseOutlined24,
  IconDeleteMinusOutlined24,
  IconFullScreenOpenOutlined24
} from '@components/Icon/IconsDirectory';
import Typography from '@components/Typography';
import clsx from 'clsx';

import { TVideoWindowProps } from './types';

import videoStyles from './VideoWindow.module.scss';

import { useDraggable } from './hooks';

/**
 * Компонент VideoWindow для отображения видео в отдельном окне с возможностью управления.
 * @component
 * @param {Object} props - Свойства компонента VideoWindow.
 * @param {string} props.videoUrl - URL видео для воспроизведения.
 * @param {string} [props.id] - Уникальный идентификатор видео элемента.
 * @param {string | ReactNode} [props.title] - Заголовок окна или кастомный компонент заголовка.
 * @param {boolean} [props.autoPlay=false] - Флаг автоматического воспроизведения видео.
 * @param {boolean} [props.resizable=false] - Флаг возможности изменения размера окна.
 * @param {boolean} [props.draggable=false] - Флаг возможности перетаскивания окна.
 * @param {DraggableStartPosition} [props.draggableStartPosition] - Начальная позиция окна при перетаскивании.
 * @param {() => void} props.onClose - Функция обработки закрытия окна.
 * @param {CSSProperties} [props.style] - Дополнительные CSS стили.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @returns {JSX.Element} Компонент VideoWindow.
 */
const VideoWindow = ({
  videoUrl,
  id,
  title,
  autoPlay,
  resizable,
  draggable,
  draggableStartPosition,
  onClose,
  style,
  className
}: TVideoWindowProps) => {
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
      className={clsx(videoStyles.videoWindow, className, {
        [videoStyles.fullscreen]: isFullscreen && !isMinimized,
        [videoStyles.minimized]: isMinimized,
        [videoStyles.resizable]: !isFullscreen && resizable,
        [videoStyles.active]: !isFullscreen && isActive
      })}
      style={{ ...(draggable ? draggableData?.draggableStyle : {}), ...style }}
      tabIndex={0}
      onClick={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      data-ui-video-window-root
    >
      <div
        className={clsx(videoStyles.videoWindowHeader, {
          [videoStyles.draggable]: draggable && !isFullscreen,
          [videoStyles.headerWithoutTitle]: noTitle && !isMinimized
        })}
        data-ui-video-window-header
        onMouseDown={draggable ? draggableData?.handleMouseDown : undefined}
      >
        {title && (
          <>
            {React.isValidElement(title) ? (
              title
            ) : (
              <Typography color="var(--unique-white)" variant="Body1-Medium" data-ui-video-window-typography-title>
                {title}
              </Typography>
            )}
          </>
        )}
        <div className={videoStyles.videoControls} data-ui-video-window-controls>
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
        <div
          className={clsx(videoStyles.videoContent, { [videoStyles.videoWithoutTitle]: noTitle })}
          data-ui-video-window-video-content
        >
          <video id={id} controls src={videoUrl} controlsList="nodownload" autoPlay={autoPlay} />
        </div>
      )}
      {!isMinimized && <div className={videoStyles.resizer} data-ui-video-window-resizer />}
    </div>
  );
};

export default VideoWindow;
