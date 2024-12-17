import React from 'react';

import { render, screen } from '@testing-library/react';

import { EButtonColor, EButtonSize, EButtonVariant } from './enums';
import { Button } from './index';

describe('src/components/Button', () => {
  const defaultText = 'Button Text';

  test('рендерит кнопку с базовыми пропсами', () => {
    render(<Button>{defaultText}</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('data-ui-button');
    expect(button).toHaveTextContent(defaultText);
    expect(button).toBeEnabled();
  });

  test('поддерживает disabled состояние', () => {
    render(<Button disabled>{defaultText}</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('корректно обрабатывает клики', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>{defaultText}</Button>);

    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('рендерит кнопку-иконку', () => {
    const iconElement = <span data-testid="icon">icon</span>;
    render(<Button iconButton={iconElement} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('icon-button');
  });

  test('поддерживает различные размеры', () => {
    const { rerender } = render(<Button size={EButtonSize.m}>{defaultText}</Button>);
    expect(screen.getByRole('button')).not.toHaveClass('compact', 'extra-compact');

    rerender(<Button size={EButtonSize.s}>{defaultText}</Button>);
    expect(screen.getByRole('button')).toHaveClass('compact');

    rerender(<Button size={EButtonSize.xs}>{defaultText}</Button>);
    expect(screen.getByRole('button')).toHaveClass('extra-compact');
  });

  test('корректно отображает бейджи', () => {
    render(
      <Button startBadge="1" endBadge="2">
        {defaultText}
      </Button>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('поддерживает все цвета и варианты', () => {
    Object.values(EButtonColor).forEach(color => {
      Object.values(EButtonVariant).forEach(variant => {
        const { container } = render(
          <Button color={color} variant={variant}>
            {defaultText}
          </Button>
        );

        expect(container.firstChild).toHaveClass(`${color}-${variant}`);
      });
    });
  });

  test('корректно отображает иконки в начале и конце', () => {
    const startIcon = <span data-testid="start-icon">start</span>;
    const endIcon = <span data-testid="end-icon">end</span>;

    render(
      <Button startIcon={startIcon} endIcon={endIcon}>
        {defaultText}
      </Button>
    );

    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });

  test('поддерживает дополнительные классы', () => {
    const customClass = 'custom-class';
    render(<Button className={customClass}>{defaultText}</Button>);

    expect(screen.getByRole('button')).toHaveClass(customClass);
  });
});
