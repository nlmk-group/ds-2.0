import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tooltip from './index';

// eslint-disable-next-line @typescript-eslint/no-require-imports
global.ResizeObserver = require('resize-observer-polyfill');

describe('Tooltip Component', () => {
  const title = 'Tooltip Title';
  const description = 'Tooltip Description';
  const childText = 'Hover over me';

  test('renders child elements correctly', () => {
    render(
      <Tooltip title={title}>
        <span>{childText}</span>
      </Tooltip>
    );
    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  test('renders with the correct class names', () => {
    const { container } = render(
      <Tooltip title={title} className="test-class">
        <span>{childText}</span>
      </Tooltip>
    );
    expect(container.querySelector('.test-class')).toBeInTheDocument();
  });

  test('hides tooltip when content is not provided', () => {
    const { container } = render(
      <Tooltip>
        <span>{childText}</span>
      </Tooltip>
    );
    expect(container.querySelector('.tooltip-title')).not.toBeInTheDocument();
    expect(container.querySelector('.tooltip-description')).not.toBeInTheDocument();
  });

  test('displays title correctly on hover', async () => {
    render(
      <Tooltip title={title}>
        <span>{childText}</span>
      </Tooltip>
    );
    await userEvent.hover(screen.getByText(childText));

    await screen.findByText(title);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('displays description correctly on hover', async () => {
    render(
      <Tooltip description={description}>
        <span>{childText}</span>
      </Tooltip>
    );
    await userEvent.hover(screen.getByText(childText));

    await screen.findByText(description);
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  test('applies custom popupClassName correctly', async () => {
    const popupClassName = 'custom-popup-class';
    render(
      <Tooltip title={title} popupClassName={popupClassName}>
        <span>{childText}</span>
      </Tooltip>
    );
    await userEvent.hover(screen.getByText(childText));

    await screen.findByText(title);
    const tooltip = screen.getByText(title).closest('.custom-popup-class');
    expect(tooltip).toBeInTheDocument();
  });
});
