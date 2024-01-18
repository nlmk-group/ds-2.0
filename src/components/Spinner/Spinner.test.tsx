import React from 'react';

import Spinner from '@components/Spinner';
import { render } from '@testing-library/react';

describe('src/components/Spinner', () => {
  const { container } = render(<Spinner />);
  const loader = container.getElementsByTagName('div')[0];

  // Check render spinner loader at DOM
  test('It should render an Spinner', () => {
    expect(loader).toBeInTheDocument();
  });

  // Check width, height property in spinner at DOM - L
  test('It should have a width = 40px, height = 40px an Spinner – L size', () => {
    const { firstChild } = loader;
    expect(firstChild).toHaveAttribute('style', 'width: 40px; height: 40px;');
  });

  const { container: mSizeContainer } = render(<Spinner size="m" />);
  const mSizeLoader = mSizeContainer.getElementsByTagName('div')[0];

  // Check width, height property in spinner at DOM - M
  test('It should have a width = 32px, height = 32px an Spinner – M size', () => {
    const { firstChild } = mSizeLoader;
    expect(firstChild).toHaveAttribute('style', 'width: 32px; height: 32px;');
  });

  const { container: colorContainer } = render(<Spinner bgColor="rgb(30, 61, 89)" color="rgb(255, 110, 64)" />);
  const colorLoader = colorContainer.getElementsByTagName('div')[0];

  // Check color property in spinner at DOM
  test('It should have rgb color an Spinner', () => {
    const { firstChild } = colorLoader;
    expect(firstChild).toHaveAttribute('style', 'width: 40px; height: 40px; color: rgb(30, 61, 89);');
  });

  // Check bg color property in spinner at DOM
  test('It should have rgb bg color an Spinner', () => {
    const { lastChild } = colorLoader;
    expect(lastChild).toHaveAttribute('style', 'width: 40px; height: 40px; color: rgb(255, 110, 64);');
  });
});
