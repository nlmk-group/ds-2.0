import React from 'react';

import { Icon, Link } from '@components/index';
import { render, screen } from '@testing-library/react';

import styles from './Link.module.scss';

import { sizeMapping, targetMapping } from './enums';
import { getTypography, typographyMapping } from './helpers';

describe('src/components/Header', () => {
  const testTitle = 'Hello world!';
  const href = 'https://mdxjs.com/docs/what-is-mdx/';

  test('It should render a Link', () => {
    const { container } = render(<Link href={href}>{testTitle}</Link>);
    const linkComponent = container.getElementsByTagName('div')[0];
    expect(linkComponent).toBeInTheDocument();
  });

  test('It should render a Link with custom className', () => {
    const className = 'test-style';
    render(
      <Link href={href} className={styles[className]}>
        {testTitle}
      </Link>
    );
    const linkComponent = screen.getByTestId('WRAPPER');
    expect(linkComponent.classList.contains(className)).toBe(true);
  });

  test('It should render a Link with correct title', () => {
    render(<Link href={href}>{testTitle}</Link>);
    const linkComponent = screen.getByTestId('LINK');
    expect(linkComponent).toHaveTextContent(testTitle);
  });

  test('It should render a Link with correct href', () => {
    render(<Link href={href}>{testTitle}</Link>);
    const linkComponent = screen.getByTestId('LINK');
    expect(linkComponent).toHaveAttribute('href', href);
  });

  test('It should render disabled Link', () => {
    render(
      <Link href={href} disabled={true}>
        {testTitle}
      </Link>
    );
    const linkComponent = screen.getByTestId('WRAPPER');
    expect(linkComponent.classList.contains('disabled')).toBe(true);
  });

  describe('while rendering with different targets', () => {
    Object.values(targetMapping).forEach((target: targetMapping) => {
      test(`It should render a Link with ${target} target`, () => {
        render(
          <Link href={href} target={target}>
            {testTitle}
          </Link>
        );
        const linkComponent = screen.getByTestId('LINK');
        expect(linkComponent).toHaveAttribute('target', target);
      });
    });
  });

  test('It should render Link with left icon', () => {
    render(
      <Link href={href} leftIcon={<Icon name="IconBunkerOutlined16" />}>
        {testTitle}
      </Link>
    );

    expect(screen.getByTestId('LEFT_ICON')).toBeInTheDocument();
  });

  test('It should render Link with right icon', () => {
    render(
      <Link href={href} rightIcon={<Icon name="IconBunkerOutlined16" />}>
        {testTitle}
      </Link>
    );

    expect(screen.getByTestId('RIGHT_ICON')).toBeInTheDocument();
  });

  describe('while rendering with different sizes', () => {
    Object.values(sizeMapping).forEach((size: sizeMapping) => {
      test(`It should deliver value for ${size}`, () => {
        expect(getTypography(size)).toBe(typographyMapping[size]);
      });
    });

    Object.values(sizeMapping).forEach((size: sizeMapping) => {
      test(`It should render icon wrapper with ${size} size`, () => {
        render(
          <Link href={href} size={size} leftIcon={<Icon name="IconBunkerOutlined16" />}>
            {testTitle}
          </Link>
        );

        expect(screen.getByTestId('LEFT_ICON').classList.contains(`icon-${size}`)).toBe(true);
      });
    });
  });
});
