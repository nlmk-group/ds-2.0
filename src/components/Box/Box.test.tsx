import React from 'react';

import { render, screen } from '@testing-library/react';

import styles from './Box.module.scss';

import Box from './index';

describe('src/components/Box', () => {
  const { container } = render(
    <Box>
      <div>10</div>
    </Box>
  );
  const box = container.getElementsByTagName('div')[0];

  // Check render button at DOM
  test('It must be present in the DOM', () => {
    expect(box).toBeInTheDocument();
  });

  test('It must render children inside Box', () => {
    const testId = 'test-child';
    render(
      <Box>
        <div data-testid={testId} />
      </Box>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test('It must render Box with custom className', () => {
    render(
      <Box className={styles['test-style']}>
        <div>10</div>
      </Box>
    );

    expect(screen.getByTestId('BOX_WRAPPER').classList.contains('test-style')).toBe(true);
  });

  test('It must render Box with custom background', () => {
    const bgColor = '#1e88e5';
    render(
      <Box background={bgColor}>
        <div>10</div>
      </Box>
    );

    expect(screen.getByTestId('BOX_WRAPPER')).toHaveStyle(`background-color: ${bgColor}`);
  });

  test('It must render Box with custom height', () => {
    const height = 100;
    render(
      <Box height={height}>
        <div>10</div>
      </Box>
    );

    expect(screen.getByTestId('BOX_WRAPPER')).toHaveStyle(`height: ${height}px`);
  });

  test('It must render Box with custom width', () => {
    const width = 100;
    render(
      <Box width={width}>
        <div>10</div>
      </Box>
    );

    expect(screen.getByTestId('BOX_WRAPPER')).toHaveStyle(`width: ${width}px`);
  });

  test('It must render Box with border width', () => {
    const border = '1px solid red';
    render(
      <Box border={border}>
        <div>10</div>
      </Box>
    );
    expect(screen.getByTestId('BOX_WRAPPER')).toHaveStyle(`border: ${border}`);
  });

  test('It must render Box with border radius', () => {
    const borderRadius = 4;
    render(<Box borderRadius={borderRadius}>10</Box>);

    expect(screen.getByTestId('BOX_WRAPPER')).toHaveStyle(`border-radius: ${borderRadius}px`);
  });

  test('It must render Box with custom padding', () => {
    const padding = 16;
    render(<Box p={padding}>10</Box>);

    const element = screen.getByTestId('BOX_WRAPPER');
    expect(element).toHaveStyle(`padding-top: ${padding}px`);
    expect(element).toHaveStyle(`padding-right: ${padding}px`);
    expect(element).toHaveStyle(`padding-bottom: ${padding}px`);
    expect(element).toHaveStyle(`padding-left: ${padding}px`);
  });

  test('It must render Box with custom horizontal padding', () => {
    const paddingHorizontal = 16;
    render(<Box px={paddingHorizontal}>10</Box>);

    const element = screen.getByTestId('BOX_WRAPPER');
    expect(element).toHaveStyle(`padding-left: ${paddingHorizontal}px`);
    expect(element).toHaveStyle(`padding-right: ${paddingHorizontal}px`);
  });

  test('It must render Box with custom vertical padding', () => {
    const paddingVertical = 16;
    render(<Box py={paddingVertical}>10</Box>);

    const element = screen.getByTestId('BOX_WRAPPER');
    expect(element).toHaveStyle(`padding-top: ${paddingVertical}px`);
    expect(element).toHaveStyle(`padding-bottom: ${paddingVertical}px`);
  });

  test('It must render Box with padding priority system', () => {
    render(
      <Box p={10} px={20} pl={30}>
        10
      </Box>
    );

    const element = screen.getByTestId('BOX_WRAPPER');
    expect(element).toHaveStyle('padding-top: 10px'); // от p
    expect(element).toHaveStyle('padding-right: 20px'); // от px
    expect(element).toHaveStyle('padding-bottom: 10px'); // от p
    expect(element).toHaveStyle('padding-left: 30px'); // от pl (наивысший приоритет в данном случае)
  });

  test('It must render Box with flexbox properties', () => {
    render(
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={8}>
        10
      </Box>
    );

    const element = screen.getByTestId('BOX_WRAPPER');
    expect(element).toHaveStyle('display: flex');
    expect(element).toHaveStyle('flex-direction: column');
    expect(element).toHaveStyle('justify-content: center');
    expect(element).toHaveStyle('align-items: center');
    expect(element).toHaveStyle('gap: 8px');
  });
});
