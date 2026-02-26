import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import ImagePreview from './index';
import type { IImageItem } from './types';

jest.mock('@components/ImagePreview/subcomponents', () => {
  const actual = jest.requireActual('@components/ImagePreview/subcomponents');

  return {
    ...actual,
    ImagePreviewModal: ({ items, activeIndex, onClose }: any) => (
      <div data-testid="ui-image-preview-modal" data-length={items?.length ?? 0} data-active={activeIndex ?? -1}>
        <button type="button" onClick={onClose}>
          close
        </button>
      </div>
    )
  };
});

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
    render(<ImagePreview items={items as any} />);

    const thumbs = screen.getAllByTestId('ui-image-preview-thumb');
    expect(thumbs).toHaveLength(2);
  });

  test('applies default previewImgSize (140x140)', () => {
    render(<ImagePreview items={[mkItem(1), mkItem(2)]} />);
    const thumbs = screen.getAllByTestId('ui-image-preview-thumb');

    expect(thumbs[0]).toHaveStyle({ width: '140px', height: '140px' });
    expect(thumbs[1]).toHaveStyle({ width: '140px', height: '140px' });
  });

  test('applies custom previewImgSize', () => {
    render(<ImagePreview items={[mkItem(1)]} previewImgSize={200} />);
    const thumb = screen.getByTestId('ui-image-preview-thumb');

    expect(thumb).toHaveStyle({ width: '200px', height: '200px' });
  });

  test('opens modal on image click and passes only imageItems', () => {
    render(
      <ImagePreview
        items={[
          mkItem(1),
          mkItem(2, { previewSrc: null }), // non-image
          mkItem(3)
        ]}
      />
    );

    expect(screen.queryByTestId('ui-image-preview-modal')).not.toBeInTheDocument();

    const thumbs = screen.getAllByTestId('ui-image-preview-thumb');
    fireEvent.click(thumbs[0]);

    const modal = screen.getByTestId('ui-image-preview-modal');
    expect(modal).toHaveAttribute('data-length', '2');
    expect(modal).toHaveAttribute('data-active', '0');
  });

  test('clicking non-image calls onPreviewClick and does not open modal', () => {
    const onPreviewClick = jest.fn();

    render(
      <ImagePreview
        items={[mkItem(1), mkItem(2, { previewSrc: undefined }), mkItem(3)]}
        onPreviewClick={onPreviewClick}
      />
    );

    const thumbs = screen.getAllByTestId('ui-image-preview-thumb');
    fireEvent.click(thumbs[1]);

    expect(onPreviewClick).toHaveBeenCalledTimes(1);
    expect(onPreviewClick).toHaveBeenCalledWith(expect.objectContaining({ id: 2 }));
    expect(screen.queryByTestId('ui-image-preview-modal')).not.toBeInTheDocument();
  });

  test('maps global index to image index correctly when opening modal', () => {
    render(
      <ImagePreview
        items={[
          mkItem(10),
          mkItem(11, { previewSrc: null }),
          mkItem(12)
        ]}
      />
    );

    const thumbs = screen.getAllByTestId('ui-image-preview-thumb');
    fireEvent.click(thumbs[2]);

    const modal = screen.getByTestId('ui-image-preview-modal');
    expect(modal).toHaveAttribute('data-length', '2');
    expect(modal).toHaveAttribute('data-active', '1');
  });
});
