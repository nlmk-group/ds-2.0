import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { TVideoWindowProps } from './types';

import VideoWindow from './VideoWindow';

describe('src/components/VideoWindow', () => {
  const defaultProps: TVideoWindowProps = {
    videoUrl: 'https://example.com/video.mp4',
    title: 'Test Video',
    autoPlay: false,
    onClose: jest.fn()
  };

  // Тест базового рендера
  test('It should render VideoWindow with given title', () => {
    const { getByText } = render(<VideoWindow {...defaultProps} />);
    expect(getByText('Test Video')).toBeInTheDocument();
  });

  // Тест отображения видео
  test('It should render video element with correct source', () => {
    const { container } = render(<VideoWindow {...defaultProps} />);
    const videoElement = container.querySelector('video');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('src', defaultProps.videoUrl);
  });

  // Тест автостарта видео
  test('It should automatically play video when autoPlay is true', () => {
    const { container } = render(<VideoWindow {...defaultProps} autoPlay={true} />);
    const videoElement = container.querySelector('video');
    expect(videoElement).toHaveAttribute('autoplay');
  });

  // Тест кнопки закрытия
  test('It should call onClose when close button is clicked', () => {
    const onClose = jest.fn();
    const { getByTitle } = render(<VideoWindow {...defaultProps} onClose={onClose} />);
    const closeButton = getByTitle('Закрыть');
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  // Тест минимизации
  test('It should minimize window when minimize button is clicked', () => {
    const { getByTitle, container } = render(<VideoWindow {...defaultProps} />);
    const minimizeButton = getByTitle('Свернуть');
    fireEvent.click(minimizeButton);
    const videoContent = container.querySelector('[data-ui-video-window-video-content]');
    expect(videoContent).not.toBeInTheDocument();
  });

  // Тест полноэкранного режима
  test('It should toggle fullscreen mode when fullscreen button is clicked', () => {
    const { getByTitle, container } = render(<VideoWindow {...defaultProps} />);
    const fullscreenButton = getByTitle('Перейти в полноэкранный режим');
    fireEvent.click(fullscreenButton);
    const videoWindow = container.querySelector('[data-ui-video-window-root]');
    expect(videoWindow).toHaveClass('fullscreen');
  });

  // Тест режима перетаскивания
  test('It should be draggable when draggable prop is true', () => {
    const { container } = render(<VideoWindow {...defaultProps} draggable />);
    const header = container.querySelector('[data-ui-video-window-header]');
    expect(header).toHaveClass('draggable');
  });

  // Тест режима изменения размера
  test('It should show resizer when resizable prop is true', () => {
    const { container } = render(<VideoWindow {...defaultProps} resizable />);
    const resizer = container.querySelector('[data-ui-video-window-resizer]');
    expect(resizer).toBeInTheDocument();
  });
});
