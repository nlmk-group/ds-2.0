import React from 'react';
import { render, screen } from '@testing-library/react';
import ImagePicture from '.';

const defaultProps = {src: '', alt: ''}

describe('src/components/ImagePicture', () => {
  test('ImagePicture renders with default props', () => {
    render(<ImagePicture {...defaultProps} />);
    expect(screen.getByTestId('IMAGE_PICTURE')).toBeInTheDocument();
  });

  test('ImagePicture renders img', () => {
    const { container } = render(<ImagePicture src='fake/src' alt='text alt' />);
    const img = container.getElementsByTagName('img')[0];
    expect(img).toBeInTheDocument();
    expect(img.alt).toEqual('text alt');
  });
})