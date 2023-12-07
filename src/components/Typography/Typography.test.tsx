import React from 'react';

import { render } from '@testing-library/react';

import Typography from './index';

describe('src/components/Typography', () => {
  const text = 'Text for tests';

  test('Render Typography component', () => {
    const text = 'Header1';
    const { container, getByText } = render(
      <Typography variant="Heading1">{text}</Typography>
    );
    expect(container.getElementsByTagName('span')[0]).toBeInTheDocument();
    expect(getByText(text)).toBeInTheDocument();
  });

  test('Applies correct classes based on variant and color', () => {
    const { container } = render(
      <Typography variant="Heading1" color="primary">
        {text}
      </Typography>
    );
    const element = container.firstChild;
    expect(element).toHaveClass('typography--variant-heading1');
    expect(element).toHaveClass('typography--color-primary');
  });

  test('Applies additional className', () => {
    const { container } = render(
      <Typography className="custom-class">{text}</Typography>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  test('Passes additional props to the element', () => {
    const { getByText } = render(
      <Typography data-testid="typography">{text}</Typography>
    );
    expect(getByText(text)).toHaveAttribute('data-testid', 'typography');
  });
});
