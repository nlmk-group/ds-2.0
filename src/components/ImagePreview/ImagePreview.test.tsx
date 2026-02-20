import React from 'react';
import { render, screen } from '@testing-library/react';

import ImagePreview from './index';
import type { IImageItem } from './types';

const mkItem = (n: number, overrides: Partial<IImageItem> = {}): IImageItem => ({
  id: n,
  previewSrc: `preview-${n}.jpg`,
  fullSrc: `full-${n}.jpg`,
  previewTitle: `Preview title ${n}`,
  title: `Title ${n}`,
  description: `Desc ${n}`,
  alt: `Alt ${n}`,
  ...overrides
});

describe('ImagePreview', () => {
  test('returns null when items are empty', () => {
    const { container } = render(<ImagePreview items={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  test('filters out falsy items and renders only valid ones', () => {
    const items = [mkItem(1), null, undefined as any, mkItem(2)];
    render(<ImagePreview items={items} />);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  test('applies default previewImgSize (140x140) and renders images', () => {
    render(<ImagePreview items={[mkItem(1), mkItem(2)]} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveStyle({ width: '140px', height: '140px' });
    expect(buttons[1]).toHaveStyle({ width: '140px', height: '140px' });

    const imgs = screen.getAllByRole('img');
    expect(imgs).toHaveLength(2);
    expect(imgs[0]).toHaveAttribute('src', 'preview-1.jpg');
    expect(imgs[1]).toHaveAttribute('src', 'preview-2.jpg');
  });

  test('applies custom previewImgSize', () => {
    render(<ImagePreview items={[mkItem(1)]} previewImgSize={200} />);
    expect(screen.getByRole('button')).toHaveStyle({ width: '200px', height: '200px' });
  });

  test('uses alt, and falls back to title when alt is missing', () => {
    render(
      <ImagePreview
        items={[
          mkItem(1, { alt: 'Custom alt' }),
          mkItem(2, { alt: undefined, title: 'Fallback title' })
        ]}
      />
    );

    const imgs = screen.getAllByRole('img');
    expect(imgs[0]).toHaveAttribute('alt', 'Custom alt');
    expect(imgs[1]).toHaveAttribute('alt', 'Fallback title');
  });

  test('renders previewTitle text under the thumbnail when provided', () => {
    render(<ImagePreview items={[mkItem(1, { previewTitle: 'My preview title' })]} />);
    expect(screen.getByText('My preview title')).toBeInTheDocument();
  });
});
