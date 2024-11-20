import React from 'react';

import { customInputColors } from '@components/declaration';
import { render } from '@testing-library/react';

import { IPseudoInputProps } from './types';

import PseudoInput from '.';

const labelColorClassNames: IPseudoInputProps['labelColor'][] = [
  customInputColors.default,
  customInputColors.error,
  customInputColors.warning,
  customInputColors.success
];

const label = 'Label';
const children = <div>Sample text</div>;

describe('src/components/PseudoInput', () => {
  test('renders different label color states', () => {
    labelColorClassNames.map(color => {
      const { container } = render(<PseudoInput label={label} labelColor={color}>{children}</PseudoInput>);
      const pseudoInput = container.getElementsByClassName(color as string)[0];
      expect(pseudoInput).toBeInTheDocument();
    });
  });

  test('renders in compact size', () => {
    const { container } = render(<PseudoInput label={label} size="s">{children}</PseudoInput>);
    expect(container.firstChild).toHaveClass('compact');
  });

  test('renders in default size', () => {
    const { container } = render(<PseudoInput label={label} size="m">{children}</PseudoInput>);
    expect(container.firstChild).not.toHaveClass('compact');
  });

  test('applies custom className', () => {
    const customClass = 'custom-class';
    const { container } = render(<PseudoInput label={label} className={customClass}>{children}</PseudoInput>);
    expect(container.firstChild).toHaveClass(customClass);
  });

  test('combines custom className with default classes', () => {
    const customClass = 'custom-class';
    const { container } = render(<PseudoInput label={label} className={customClass} size="s">{children}</PseudoInput>);
    expect(container.firstChild).toHaveClass('custom-class');
    expect(container.firstChild).toHaveClass('compact');
  });
});
