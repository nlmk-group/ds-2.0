import React from 'react';
import { render, screen } from '@testing-library/react';
import styles from './_stories/Box.module.scss';
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
    const paddings = `${padding}px `.repeat(4);
    render(<Box p={padding}>10</Box>);

    expect(screen.getByTestId('BOX_WRAPPER')).toHaveStyle(`padding: ${paddings}`);
  });

  test('It must render Box with custom horizontal padding', () => {
    const paddingHorizontal = 16;
    const paddings = `0px ${paddingHorizontal}px 0px ${paddingHorizontal}px`;
    render(<Box px={paddingHorizontal}>10</Box>);

    expect(screen.getByTestId('BOX_WRAPPER')).toHaveStyle(`padding: ${paddings}`);
  });

  test('It must render Box with custom vertical padding', () => {
    const paddingVertical = 16;
    const paddings = `${paddingVertical}px 0px ${paddingVertical}px 0px`;
    render(<Box py={paddingVertical}>10</Box>);

    expect(screen.getByTestId('BOX_WRAPPER')).toHaveStyle(`padding: ${paddings}`);
  });
});
