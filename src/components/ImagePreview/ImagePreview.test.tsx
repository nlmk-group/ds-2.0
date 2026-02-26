import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';

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

beforeAll(() => {
  if (!('ResizeObserver' in globalThis)) {
    (globalThis as any).ResizeObserver = class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  }

  if (!('requestAnimationFrame' in globalThis)) {
    (globalThis as any).requestAnimationFrame = (cb: FrameRequestCallback) => {
      cb(0 as any);
      return 1 as any;
    };
  }

  if (!('cancelAnimationFrame' in globalThis)) {
    (globalThis as any).cancelAnimationFrame = () => {};
  }
});

describe('ImagePreview', () => {
  test('returns null when items are empty', () => {
    const { container } = render(<ImagePreview items={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  test('filters out falsy items and renders only valid ones', () => {
    const items = [mkItem(1), null, undefined as any, mkItem(2)];
    render(<ImagePreview items={items} />);
    const thumbs = screen.getAllByTestId('ui-image-preview-thumb');
    expect(thumbs).toHaveLength(2);
  });

  test('applies default previewImgSize (140x140) and renders images', () => {
    render(<ImagePreview items={[mkItem(1), mkItem(2)]} />);
    const thumbs = screen.getAllByTestId('ui-image-preview-thumb');

    expect(thumbs[0]).toHaveStyle({ width: '140px', height: '140px' });
    expect(thumbs[1]).toHaveStyle({ width: '140px', height: '140px' });

    expect(within(thumbs[0]).getByRole('img')).toHaveAttribute('src', 'preview-1.jpg');
    expect(within(thumbs[1]).getByRole('img')).toHaveAttribute('src', 'preview-2.jpg');
  });

  test('applies custom previewImgSize', () => {
    render(<ImagePreview items={[mkItem(1)]} previewImgSize={200} />);
    const thumb = screen.getByTestId('ui-image-preview-thumb');
    expect(thumb).toHaveStyle({ width: '200px', height: '200px' });
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

    expect(screen.getByAltText('Custom alt')).toBeInTheDocument();
    expect(screen.getByAltText('Fallback title')).toBeInTheDocument();
  });

  test('renders previewTitle text under the thumbnail when provided', () => {
    render(<ImagePreview items={[mkItem(1, { previewTitle: 'My preview title' })]} />);
    expect(screen.getAllByText('My preview title')).toHaveLength(2);
  });

  test('shows empty icon if no previewSrc', () => {
    render(<ImagePreview items={[mkItem(1, { previewSrc: undefined })]} />);
    const thumb = screen.getByTestId('ui-image-preview-thumb');

    expect(within(thumb).queryByRole('img')).not.toBeInTheDocument();
    expect(within(thumb).getByTestId('empty-icon')).toBeInTheDocument();
  });

  test('renders checkbox when handleCheckbox is provided and calls handler on toggle', () => {
    const handleCheckbox = jest.fn();
    render(<ImagePreview items={[mkItem(1)]} handleCheckbox={handleCheckbox} checkedMap={{}} />);

    const root = screen.getByTestId('ui-image-preview-thumb').closest('[data-ui-image-preview]');
    expect(root).toBeTruthy();

    const input =
      root!.querySelector('input[type="checkbox"]') ||
      root!.querySelector('[role="checkbox"]');

    expect(input).toBeTruthy();

    fireEvent.click(input as Element);

    expect(handleCheckbox).toHaveBeenCalledTimes(1);
    expect(handleCheckbox.mock.calls[0][0]).toEqual(
      expect.objectContaining({
        item: expect.objectContaining({ id: 1 }),
        checked: true
      })
    );
  });
});
