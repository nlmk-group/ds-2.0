import React from 'react';

import DateTime from './index';
import { render, screen } from '@testing-library/react';

import { getDate, getTime } from '.';

describe('src/components/DateTime', () => {
  const testTime = '2023-10-18T14:33:03.372Z';
  test('It should render a DateTime', () => {
    const { container } = render(<DateTime />);
    const headerComponent = container.getElementsByTagName('div')[0];
    expect(headerComponent).toBeInTheDocument();
  });

  test('function getDate deliver correct date (ru locale)', () => {
    expect(getDate(new Date(testTime), 'ru')).toBe('18.10.2023, Среда');
  });

  test('function getDate deliver correct date (en locale)', () => {
    expect(getDate(new Date(testTime), 'en')).toBe('18.10.2023, Wednesday');
  });

  test('function getTime deliver correct time', () => {
    const hh = new Date(testTime).getHours();
    const mm = new Date(testTime).getMinutes();
    const result = `${hh}:${mm}`;
    expect(getTime(new Date(testTime))).toBe(result);
  });

  test('It should render a DateTime with date', () => {
    render(<DateTime />);
    expect(screen.getByTestId('DATETIME_DATE')).toBeInTheDocument();
  });

  test('It should render a DateTime with time', () => {
    render(<DateTime />);
    expect(screen.getByTestId('DATETIME_TIME')).toBeInTheDocument();
  });

  test('It should render a DateTime with en locale', () => {
    render(<DateTime locale="en" />);
    expect(screen.getByTestId('DATETIME_DATE')).toBeInTheDocument();
  });
});
