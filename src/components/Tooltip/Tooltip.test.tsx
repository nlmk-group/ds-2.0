import React from 'react';

import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';

import Tooltip from './index';

describe('src/components/Tooltip', () => {
  test('Render default Tooltip component', () => {
    render(
      <Tooltip title="Text in tooltip" placement="top">
        <div data-testid="trigger">Button</div>
      </Tooltip>
    );
    expect(screen.queryByTestId('tooltip')).not.toBeInTheDocument();

    const trigger = screen.getByTestId('trigger');
    userEvent.hover(trigger);

    expect(screen.queryByTestId('tooltip')).toBeInTheDocument();
  });

  test('Render Tooltip component with "click" behavior', () => {
    render(
      <Tooltip title="Text in tooltip" placement="bottom" behavior="click">
        <div data-testid="trigger">Button</div>
      </Tooltip>
    );
    expect(screen.queryByTestId('tooltip')).not.toBeInTheDocument();

    const trigger = screen.getByTestId('trigger');
    userEvent.click(trigger);

    expect(screen.queryByTestId('tooltip')).toBeInTheDocument();
  });
});