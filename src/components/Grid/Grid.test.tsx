import React from 'react';

import { render, screen } from '@testing-library/react';

import Grid from './index';
import { Box } from '..';

describe('src/components/Grid', () => {
  
  // Check render grid at DOM
  test('It must be present in the DOM', () => {
    const { container } = render(
      <Grid>
        <Box>10</Box>
      </Grid>
    );
    const grid = container.getElementsByTagName('div')[0];
    expect(grid).toBeInTheDocument();
  });

  test('It must render grid with column', () => {
    render(
      <Grid>
        <Grid.Column>
          <Box>123</Box>
        </Grid.Column>
      </Grid>
    );

    expect(screen.getByTestId('grid-column')).toBeInTheDocument();
  });

  test('It must render grid with row', () => {
    render(
      <Grid>
        <Grid.Row>
          <Box>123</Box>
        </Grid.Row>
      </Grid>
    );

    expect(screen.getByTestId('grid-row')).toBeInTheDocument();
  });

  test('It must render grid items with correct values', () => {
    const testArr = ['One', 'Two', 'Three'];
    render(
      <Grid>
        <Grid.Row>
          {testArr.map((val: string) => (
            <Box key={val} data-testid='grid-item'>{val}</Box>
          ))}
        </Grid.Row>
      </Grid>
    );

    const gridItems = screen.getAllByTestId('grid-item');

    expect(gridItems.length).toBe(testArr.length);
    gridItems.forEach((girdItem, index) => {
      expect(girdItem).toHaveTextContent(testArr[index]);
    });
  });
});
