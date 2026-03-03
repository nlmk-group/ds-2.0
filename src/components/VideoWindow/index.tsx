import React, { useState } from 'react';

import Button from '@components/Button';
import {
  IconASIImplementationOutlined24,
  IconCloseOutlined24,
  IconDeleteMinusOutlined24,
  IconFullScreenOpenOutlined24
} from '@components/Icon/IconsDirectory';
import Typography from '@components/Typography';
import { ELocaleMapping } from '@components/declaration';
import clsx from 'clsx';

import { TVideoWindowProps } from './types';

import videoStyles from './VideoWindow.module.scss';

import { VIDEO_WINDOW_TEXTS } from './constants';
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
  className,
  locale = ELocaleMapping.ru
}: TVideoWindowProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const noTitle = !title;
  const texts = VIDEO_WINDOW_TEXTS[locale];

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
      className={clsx(videoStyles['video-window'], className, {
        [videoStyles.fullscreen]: isFullscreen && !isMinimized,
        [videoStyles.minimized]: isMinimized,
        [videoStyles.resizable]: !isFullscreen && resizable,
        [videoStyles.active]: !isFullscreen && isActive
      })}
      style={{ ...style, ...((draggable && !isFullscreen) ? draggableData?.draggableStyle : {}) }}
      tabIndex={0}
      onClick={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      data-ui-video-window-root
    >
      <div
        className={clsx(videoStyles['video-window-header'], {
          [videoStyles.draggable]: draggable && !isFullscreen,
          [videoStyles['header-without-title']]: noTitle && !isMinimized
        })}
        data-ui-video-window-header
        onMouseDown={draggable ? draggableData?.handleMouseDown : undefined}
      >
        {title && (
          <>
            {React.isValidElement(title) ? (
              title
            ) : (
              <Typography color="var(--unique-white)" variant="Body1-Medium">
                {title}
              </Typography>
            )}
          </>
        )}
        <div className={videoStyles['video-controls']}>
          <Button
            onClick={toggleFullscreen}
            iconButton={isFullscreen ? <IconASIImplementationOutlined24 /> : <IconFullScreenOpenOutlined24 />}
            color="grey"
            variant="secondary"
            size="s"
            title={isFullscreen ? texts.exitFullscreen : texts.enterFullscreen}
          />
          <Button
            onClick={toggleMinimize}
            iconButton={isMinimized ? <IconASIImplementationOutlined24 /> : <IconDeleteMinusOutlined24 />}
            color="grey"
            variant="secondary"
            size="s"
            title={isMinimized ? texts.expand : texts.collapse}
          />
          <Button
            onClick={onClose}
            iconButton={<IconCloseOutlined24 />}
            color="grey"
            variant="secondary"
            size="s"
            title={texts.close}
          />
        </div>
      </div>
      {!isMinimized && (
        <div
          className={clsx(videoStyles['video-content'], {
            [videoStyles['video-without-title']]: noTitle
          })}
        >
          <video id={id} controls src={videoUrl} controlsList="nodownload" autoPlay={autoPlay} />
        </div>
      )}
      {!isMinimized && <div data-ui-video-window-resizer className={videoStyles.resizer} />}
    </div>
  );
};

export default VideoWindow;
