import React from 'react';

import { render, screen } from '@testing-library/react';

import Radio from '.';

describe('src/components/Radio', () => {
  const { container } = render(<Radio />);
  const radio = container.getElementsByTagName('input')[0];

  // Check render button at DOM
  test('Проверка отображения радиокнопки в DOM дереве', () => {
    expect(radio).toBeInTheDocument();
  });

  // Check enable (default) state for radio
  test('Проверка доступности радиокнопки для взаимодействия', () => {
    expect(radio).toBeEnabled();
  });

  // Check disabled (default) state for radio
  test('Проверка отключённого состояния радиокнопки (disabled)', () => {
    const { container } = render(<Radio disabled />);
    const radio = container.getElementsByTagName('input')[0];
    expect(radio).toBeDisabled();
    expect(radio).toHaveAttribute('disabled');
  });

  // Check disabled (default) state for radio
  test('Проверка отмеченного состояния радиокнопки', () => {
    radio.setAttribute('type', 'checkbox');
    radio.setAttribute('checked', 'true');
    expect(radio).toBeChecked();
  });

  test('Проверка значения свойства label', () => {
    const testLabel = 'Hello world!';
    render(
      <Radio label={testLabel} />
    );

    expect(screen.getByTestId('radio-label')).toHaveTextContent(testLabel);
  })
});
