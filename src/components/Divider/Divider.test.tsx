import React from 'react';

import { Divider } from '@components/index';
import { render, screen } from '@testing-library/react';

import styles from './Divider.module.scss';

import { EDividerOrientation, EDividerType } from './enums';

describe('src/components/Divider', () => {
  const testTitle = 'Hello world!';
  const DividerHelper = () => (
    <Divider>
      <span data-testid="DIVIDER_CHILD">{testTitle}</span>
    </Divider>
  );

  test('It should render a Divider', () => {
    const { container } = render(<DividerHelper />);
    const dividerComponent = container.getElementsByTagName('div')[0];
    expect(dividerComponent).toBeInTheDocument();
  });

  test('It should render a Divider with correct title', () => {
    render(<DividerHelper />);
    expect(screen.getByTestId('DIVIDER_CHILD')).toHaveTextContent(testTitle);
  });

  test('It should render a Divider with solid borders', () => {
    render(<DividerHelper />);
    const borders = screen.getAllByTestId('BORDER');
    borders.forEach((border: any) => {
      expect(border.classList.contains('border-solid')).toBe(true);
    });
  });

  test('It should render a Divider with dashed borders', () => {
    render(<Divider dashed>{testTitle}</Divider>);
    const borders = screen.getAllByTestId('BORDER');
    borders.forEach((border: any) => {
      expect(border.classList.contains('border-dashed')).toBe(true);
    });
  });

  test('It should render a Divider with left orientation', () => {
    render(<Divider orientation={EDividerOrientation.left}>{testTitle}</Divider>);
    const borders = screen.getAllByTestId('BORDER_WRAPPER');
    expect(borders[0].classList.contains('border-horizontal-small')).toBe(true);
  });

  test('It should render a Divider with right orientation', () => {
    render(<Divider orientation={EDividerOrientation.right}>{testTitle}</Divider>);
    const borders = screen.getAllByTestId('BORDER_WRAPPER');
    expect(borders[1].classList.contains('border-horizontal-small')).toBe(true);
  });

  test('It should render a Divider with left orientation and custom spacing', () => {
    const customSpace = 52;
    render(
      <Divider orientation={EDividerOrientation.left} orientationSpace={customSpace}>
        {testTitle}
      </Divider>
    );
    const borders = screen.getAllByTestId('BORDER_WRAPPER');
    expect(borders[0]).toHaveStyle(`width: ${customSpace}px`);
  });

  test('It should render a vertical Divider', () => {
    render(<Divider type={EDividerType.vertical} />);
    expect(screen.getByTestId('VERTICAL_DIVIDER')).toBeInTheDocument();
  });

  test('It should render a vertical dashed Divider', () => {
    render(<Divider dashed type={EDividerType.vertical} />);
    expect(screen.getByTestId('VERTICAL_DIVIDER_BORDER').classList.contains('border-vertical-dashed')).toBe(true);
  });

  describe('While adding custom class', () => {
    const className = 'test-classname';
    test('It should render a horizontal divider with custom class', () => {
      render(<Divider className={styles[className]}>Blah</Divider>);
      expect(screen.getByTestId('WRAPPER').classList.contains(className)).toBe(true);
    });

    test('It should render a vertical divider with custom class', () => {
      render(<Divider className={styles[className]} type={EDividerType.vertical} />);
      expect(screen.getByTestId('VERTICAL_DIVIDER').classList.contains(className)).toBe(true);
    });
  });
});
