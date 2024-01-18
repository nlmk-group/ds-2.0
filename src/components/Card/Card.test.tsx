import React from 'react';

import { sizesMapping } from '@components/declaration';
import { Card } from '@components/index';
import { render, screen } from '@testing-library/react';

import { indicatorStatusMapping, orientationMapping } from './enums';

describe('src/components/Card', () => {
  test('It should render a Card', () => {
    const { container } = render(<Card>hello</Card>);
    const cardComponent = container.getElementsByTagName('div')[0];
    expect(cardComponent).toBeInTheDocument();
  });

  Object.values(orientationMapping).forEach((orientation: orientationMapping) => {
    test(`It should render a Card with ${orientation} orientation`, () => {
      render(<Card orientation={orientation}>hello</Card>);
      expect(screen.getByTestId('CARD_WRAPPER').classList.contains(`wrapper-${orientation}`)).toBe(true);
    });
  });

  Object.values(sizesMapping).forEach((indicatorSize: sizesMapping) => {
    test(`It should render a Card's indicator with ${indicatorSize} size`, () => {
      render(<Card indicatorSize={indicatorSize}>hello</Card>);
      expect(screen.getByTestId('CARD_WRAPPER').classList.contains(`indicator-${indicatorSize}`)).toBe(true);
    });
  });

  Object.values(indicatorStatusMapping).forEach((indicatorStatus: indicatorStatusMapping) => {
    test(`It should render a Card's indicator with ${indicatorStatus} status`, () => {
      render(<Card indicatorStatus={indicatorStatus}>hello</Card>);
      expect(screen.getByTestId('CARD_WRAPPER').classList.contains(`indicator-${indicatorStatus}`)).toBe(true);
    });
  });

  test('It should render a Card with content', () => {
    render(
      <Card>
        <div data-testid="CONTENT">Hello</div>
      </Card>
    );
    expect(screen.getByTestId('CONTENT')).toBeInTheDocument();
  });
});
