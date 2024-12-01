import React from 'react';

import { render } from '@testing-library/react';

import { variantsMapping } from '../declaration';
import { argsTypes } from './_stories/argsTypes';
import { EBadgeColors, EBadgeSizes } from './enums';
import { Badge } from './index';

describe('src/components/Badge', () => {
  const text = '1';
  const colors = argsTypes.color.options;
  const { container } = render(<Badge>{text}</Badge>);
  const badge = container.getElementsByTagName('div')[0];

  // Check render button at DOM
  test('Проверка рендера компонента в DOM дереве', () => {
    expect(badge).toBeInTheDocument();
  });

  // Check badge label
  test('Проверка на наличие текста внутри компонента', () => {
    expect(badge).toHaveTextContent(text);
  });

  // Check variant
  test('Проверка варианта стилей внутри компонента', () => {
    colors.map((className: EBadgeColors) => {
      const { container } = render(<Badge color={className}>1</Badge>);
      const badge = container.getElementsByTagName('div')[0];
      expect(badge).toHaveClass(className);
    });
  });

  // Check outline
  test('Проверка вариантов обводки компонента', () => {
    colors.map((className: EBadgeColors) => {
      const { container } = render(
        <Badge variant={variantsMapping.outline} color={className}>
          1
        </Badge>
      );
      const badge = container.getElementsByTagName('div')[0];
      expect(badge).toHaveClass(`outline-${className}`);
    });
  });

  // Check size
  test('Проверка размера компонента', () => {
    const { container } = render(<Badge size={EBadgeSizes.s}>1</Badge>);
    const badge = container.getElementsByTagName('div')[0];
    expect(badge).toHaveClass('compact');
  });

  // Check data attributes
  test('Проверка наличия data-атрибутов', () => {
    const { container } = render(<Badge>1</Badge>);
    const badge = container.getElementsByTagName('div')[0];
    const content = container.getElementsByTagName('span')[0];
    
    expect(badge).toHaveAttribute('data-ui-badge');
    expect(content).toHaveAttribute('data-ui-badge-content');
  });

  // Check custom styles
  test('Проверка применения кастомных стилей', () => {
    const customStyle = { backgroundColor: 'red' };
    const { container } = render(<Badge style={customStyle}>1</Badge>);
    const badge = container.getElementsByTagName('div')[0];
    
    expect(badge).toHaveStyle(customStyle);
  });
});