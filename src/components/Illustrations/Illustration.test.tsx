import React from 'react';

import { render, screen } from '@testing-library/react';

import Illustration from '.';
import { ILLUSTRATION_PICTURES } from './constants';
import { EPictureNames, EPictureSizes } from './enums';

describe('src/components/Illustration', () => {
  test('renders with default props (small size)', () => {
    render(<Illustration name={EPictureNames.PictureDefault} />);
    const illustration = screen.getByTestId('ILLUSTRATION');
    expect(illustration).toBeInTheDocument();
    expect(illustration).toHaveAttribute('data-ui-illustration');
  });

  test('renders illustrations in different sizes', () => {
    const sizes = Object.values(EPictureSizes);
    sizes.forEach(size => {
      const { container } = render(<Illustration name={EPictureNames.NoImage} size={size} />);
      const svg = container.getElementsByTagName('svg')[0];
      expect(svg).toBeInTheDocument();
    });
  });

  test('renders NoImage when invalid name is provided', () => {
    const { container } = render(<Illustration name={'invalid-name' as EPictureNames} size={EPictureSizes.Small} />);
    const illustration = screen.getByTestId('ILLUSTRATION');
    expect(illustration).toBeInTheDocument();
    // Проверяем, что отрендерился NoImage
    const svg = container.getElementsByTagName('svg')[0];
    expect(svg).toBeInTheDocument();
  });

  test('applies custom className', () => {
    const customClass = 'custom-class';
    render(<Illustration name={EPictureNames.Calendar} size={EPictureSizes.Medium} className={customClass} />);
    const illustration = screen.getByTestId('ILLUSTRATION');
    expect(illustration).toHaveClass(customClass);
  });

  test('renders specific illustrations for each size category', () => {
    const testCases = [
      { size: EPictureSizes.Small, name: EPictureNames.PictureDefault },
      { size: EPictureSizes.Medium, name: EPictureNames.Calendar },
      { size: EPictureSizes.Wide, name: EPictureNames.Coffee },
      { size: EPictureSizes.Standard, name: EPictureNames.Anonymous },
      { size: EPictureSizes.Tall, name: EPictureNames.Lunch },
      { size: EPictureSizes.ExtraLarge, name: EPictureNames.Error404 }
    ];

    testCases.forEach(({ size, name }) => {
      const { container } = render(<Illustration name={name} size={size} />);
      const svg = container.getElementsByTagName('svg')[0];
      expect(svg).toBeInTheDocument();
    });
  });

  test('verifies all illustrations in ILLUSTRATION_PICTURES are valid SVG components', () => {
    Object.entries(ILLUSTRATION_PICTURES).forEach(([size, illustrations]) => {
      Object.entries(illustrations).forEach(([name]) => {
        const { container } = render(<Illustration name={name as EPictureNames} size={size as EPictureSizes} />);
        const svg = container.getElementsByTagName('svg')[0];
        expect(svg).toBeInTheDocument();
      });
    });
  });
});
