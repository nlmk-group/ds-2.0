import React from 'react';

import { render, screen } from '@testing-library/react';
import { Button } from './index';
import { EVariant } from './enums'
import { IcombinedOption, combinedOptions } from './displayHelper';

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


  // check button options
  combinedOptions().forEach((option: IcombinedOption) => {
    const { variant, fill } = option
    test(`Кнопка должна быть отрендерена со стилем ${variant}-${fill}`, () => {
      const { container } = render(
        <Button variant={variant} fill={fill}/>
      );
      const button = container.getElementsByTagName('button')[0];
      if (variant === EVariant.secondary) {
        expect(button.classList.contains(variant)).toBeTruthy();
      } else {
        expect(button.classList.contains(`${variant}-${fill}`)).toBeTruthy();
      }
    })
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
    const badgeContent = 1;
    render(<Button badge={badgeContent}>ok</Button>);
    expect(screen.getByTestId('BADGE_WRAPPER')).toBeInTheDocument();
    expect(screen.getByTestId('BADGE_WRAPPER')).toHaveTextContent(badgeContent.toString())
  });

  // Check compact button prop
  test('Кнопка должна поддерживать отображение в компактном размере', () => {
    const { container } = render(<Button size="s" />);
    const button = container.getElementsByTagName('button')[0];
    expect(button).toHaveClass('compact');
  });

  // Check extra compact button prop
  test('Кнопка должна поддерживать отображение в экстра компактном размере', () => {
    const { container } = render(<Button size="xs" />);
    const button = container.getElementsByTagName('button')[0];
    expect(button).toHaveClass('extra-compact');
  });
});
