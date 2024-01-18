import React from 'react';

import { render } from '@testing-library/react';

import { IButtonProps } from './types';

import Badge from '../Badge';
import { Button } from './index';

describe('src/components/Button', () => {
  const text = 'Some example text';
  function testFunc(callback: (x: string) => void, flavour: string) {
    callback(flavour);
  }
  const mockCallBack = jest.fn();
  const { container } = render(<Button onClick={mockCallBack}>{text}</Button>);
  const button = container.getElementsByTagName('button')[0];

  // Check render button at DOM
  test('Кнопка должна корректно отображаться в DOM', () => {
    expect(button).toBeInTheDocument();
  });

  // Check enable (default) state for button
  test('Кнопка по умолчанию должна быть активной (недисабленной)', () => {
    expect(button).toBeEnabled();
  });

  // Check button label
  test('Текст внутри кнопки должен соответствовать заданному', () => {
    expect(button).toHaveTextContent(text);
  });

  // Check onCLick event
  test('При клике на кнопку должен срабатывать колбэк', () => {
    button.click();
    testFunc(mockCallBack, 'lemon');
    expect(mockCallBack).toHaveBeenCalled();
  });

  // Check disabled (default) state for button
  test('Кнопка может быть отрендерена как деактивированная (с атрибутом disabled)', () => {
    const { container } = render(<Button disabled />);
    const button = container.getElementsByTagName('button')[0];
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('disabled');
  });

  // Check className
  test('Кнопка должна корректно принимать разные варианты отображения', () => {
    const variants: string[] = ['primary', 'secondary', 'grey', 'outline', 'greyOutline', 'text', 'bar'];
    variants.map((className: string) => {
      const { container } = render(<Button variant={className as IButtonProps['variant']} />);
      const button = container.getElementsByTagName('button')[0];
      expect(button).toHaveClass(className);
    });
  });

  // Check icon render
  test('Кнопка должна корректно отображать иконку', () => {
    const { container } = render(<Button iconButton={<span className="material-icons-outlined">ok</span>}>ok</Button>);
    const button = container.getElementsByTagName('button')[0];
    const span = container.getElementsByTagName('span')[0];
    expect(button).toContainElement(span);
  });

  // Check badge render
  test('Кнопка должна корректно отображать бейдж', () => {
    const { container } = render(<Button badge={<Badge color="secondary">1</Badge>}>ok</Button>);
    const button = container.getElementsByTagName('button')[0];
    const badge = container.getElementsByTagName('div')[0];
    expect(badge).toHaveClass('secondary');
    expect(button).toContainElement(badge);
  });

  // Check compact button prop
  test('Кнопка должна поддерживать отображение в компактном размере', () => {
    const { container } = render(<Button size="s" />);
    const button = container.getElementsByTagName('button')[0];
    expect(button).toHaveClass('compact');
  });
});
