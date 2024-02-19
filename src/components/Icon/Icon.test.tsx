import React from 'react';

import { iconsSizesMapping } from '@components/declaration/enums/iconSizesMapping';
import { render } from '@testing-library/react';

import { TIconProps } from './types';

import { Icon } from './index';

describe('src/components/Button', () => {
  // Check render button at DOM
  test('Render icon', () => {
    const { container } = render(<Icon name={'IconBunkerOutlined24'} />);
    const icon = container.getElementsByTagName('div')[0];
    expect(icon).toBeInTheDocument();
  });

  // Check container size
  test('Container size', () => {
    const sizes: number[] = [iconsSizesMapping.Small, iconsSizesMapping.Medium, iconsSizesMapping.Large];
    sizes.map((size: number) => {
      const { container } = render(
        <Icon name={'IconBunkerOutlined16'} containerSize={size as TIconProps['containerSize']} />
      );
      const icon = container.getElementsByTagName('div')[0];
      expect(icon).toHaveClass(`container${size}`);
    });
  });

  // Check color
  test('Icon color', () => {
    const colors: string[] = ['action', 'disabled', 'error', 'primary', 'secondary', 'inherit', 'success', 'warning'];
    colors.map((color: string) => {
      const { container } = render(<Icon name={'IconBunkerOutlined16'} color={color as TIconProps['color']} />);
      const icon = container.getElementsByTagName('svg')[0];
      expect(icon).toHaveClass(color);
    });
  });

  // Check html color
  test('Html color', () => {
    const htmlColor = '#8f509d';
    const { container } = render(<Icon name={'IconBunkerOutlined16'} htmlColor={htmlColor} />);
    const icon = container.getElementsByTagName('path')[0];
    expect(icon).toHaveAttribute('fill', `${htmlColor}`);
  });

  // Icon size
  test('Icon size', () => {
    const sizes: number[] = [iconsSizesMapping.Small, iconsSizesMapping.Medium, iconsSizesMapping.Large];
    sizes.map((size: number) => {
      const { container } = render(<Icon name={`IconBunkerOutlined${size}`} />);
      const icon = container.getElementsByTagName('svg')[0];
      expect(icon).toHaveAttribute('width', `${size}`);
      expect(icon).toHaveAttribute('height', `${size}`);
    });
  });
});
