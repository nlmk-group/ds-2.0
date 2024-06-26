import React from 'react';

import SlideToggle from '@components/SlideToggle';
import { render, screen } from '@testing-library/react';

describe('src/components/SlideToggle', () => {
  const handleChange = jest.fn();
  const titleString = 'Hello';
  const titleJsx = <div data-testid="test-jsx-title">Hello</div>;
  const children = 'World';

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('It must render SlideToggle', () => {
    render(
      <SlideToggle title={titleString} isShow onToggle={handleChange}>
        {children}
      </SlideToggle>
    );
    expect(screen.getByTestId('slide-toggle-wrapper')).toBeInTheDocument();
  });

  test('It must render string content of Title', () => {
    render(
      <SlideToggle title={titleString} isShow onToggle={handleChange}>
        {children}
      </SlideToggle>
    );
    expect(screen.getByText(titleString)).toBeInTheDocument();
  });

  test('It must render JSX content of Title', () => {
    render(
      <SlideToggle title={titleJsx} isShow onToggle={handleChange}>
        {children}
      </SlideToggle>
    );
    expect(screen.getByTestId('test-jsx-title')).toBeInTheDocument();
  });

  test('It must render content when isShow is true', () => {
    render(
      <SlideToggle title={titleString} isShow onToggle={handleChange}>
        {children}
      </SlideToggle>
    );
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  test('It must not render content when isShow is false', () => {
    render(
      <SlideToggle title={titleString} isShow={false} onToggle={handleChange}>
        {children}
      </SlideToggle>
    );
    expect(screen.queryByText(children)).not.toBeInTheDocument();
  });
});
