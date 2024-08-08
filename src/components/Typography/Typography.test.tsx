import React from 'react';

import { render } from '@testing-library/react';

import { ETypographyVariants } from './enums';
import Typography from './index';

describe('src/components/Typography', () => {
  const text = 'Text for tests';

  test('Render Typography component with correct text', () => {
    const { getByText } = render(<Typography>{text}</Typography>);
    expect(getByText(text)).toBeInTheDocument();
  });

  test('Applies correct classes based on variant', () => {
    const { container } = render(
      <Typography variant={ETypographyVariants.Heading1}>{text}</Typography>
    );
    expect(container.firstChild).toHaveClass('typography--variant-Heading1');
  });

  test('Applies additional className', () => {
    const { container } = render(<Typography className="custom-class">{text}</Typography>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  test('Passes additional props to the element', () => {
    const { getByTestId } = render(<Typography data-testid="custom-testid">{text}</Typography>);
    expect(getByTestId('custom-testid')).toBeInTheDocument();
  });

  test('Uses span as default element', () => {
    const { container } = render(<Typography>{text}</Typography>);
    expect(container.firstChild?.nodeName).toBe('SPAN');
  });

  test('Applies color prop correctly', () => {
    const { container } = render(<Typography color="red">{text}</Typography>);
    expect(container.firstChild).toHaveStyle('color: red');
  });
});
