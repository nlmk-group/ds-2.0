import React from 'react';

import { VideoWindowProps } from '@components/VideoWindow/types';
import { render } from '@testing-library/react';

import { VideoWindowV1 } from './subcomponents';

describe('src/components/VideoWindowV1', () => {
  const defaultProps: VideoWindowProps = {
    videoUrl: 'https://example.com/video.mp4',
    title: 'Test Video',
    autoPlay: false,
    onClose: jest.fn(),
    styles: {}
  };

  // Тест базового рендера
  test('should render VideoWindowV1 with given title', () => {
    const { getByText } = render(<VideoWindowV1 {...defaultProps} />);
    expect(getByText('Test Video')).toBeInTheDocument();
  });

  // Тест отображения видео
  test('should render video element', () => {
    const { container } = render(<VideoWindowV1 {...defaultProps} />);
    const videoElement = container.querySelector('video');
    expect(videoElement).toBeInTheDocument();
  });

  // Тест автостарта видео
  test('should automatically play video when autoPlay is true', () => {
    const { container } = render(<VideoWindowV1 {...defaultProps} autoPlay={true} />);
    const videoElement = container.querySelector('video');
    expect(videoElement).toHaveAttribute('autoplay');
  });
});
