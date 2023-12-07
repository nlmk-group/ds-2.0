import React from 'react';

import SkeletonLoader from '@components/SkeletonLoader';
import { render } from '@testing-library/react';

describe('src/components/SkeletonLoader', () => {
  const { container } = render(<SkeletonLoader />);
  const loader = container.getElementsByTagName('span')[0];

  // Check render skeleton loader at DOM
  test('It should render an Skeleton Loader', () => {
    expect(loader).toBeInTheDocument();
  });

  // Check class name loading-wrapper and width, height property in skeleton loader at DOM
  test('It should have a class name loading-wrapper and a width, height an Skeleton Loader', () => {
    const { firstChild } = loader;
    expect(firstChild).toHaveClass('loading-wrapper');
    expect(firstChild).toHaveAttribute('style', 'width: 200px; height: 100px;');
  });
});
