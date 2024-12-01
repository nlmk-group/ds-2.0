import React from 'react';

import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from '.';
import { ECheckboxColors } from './enums';

describe('src/components/Checkbox', () => {
  const labelText = 'Sample text';

  afterEach(cleanup);

  it('Должен отобразиться компонент по умолчанию', () => {
    const { getByTestId } = render(<Checkbox />);
    const checkbox = getByTestId('checkbox').querySelector('input');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeEnabled();
    expect(checkbox).toHaveAttribute('data-ui-checkbox-input');
  });

  it('Должен отобразиться компонент с текстом лейбла', () => {
    const { getByText, getByTestId } = render(<Checkbox label={labelText} />);
    const label = getByTestId('checkbox');
    expect(label).toBeInTheDocument();
    const text = getByText(labelText);
    expect(text).toBeInTheDocument();
  });

  it('Должен отобразиться компонент неактивный (disable)', () => {
    const { getByTestId } = render(<Checkbox label={labelText} disabled />);
    const checkbox = getByTestId('checkbox').querySelector('input');
    expect(checkbox).toBeDisabled();
    const text = getByTestId('checkbox').querySelector('[data-ui-checkbox-label]');
    expect(text).toHaveAttribute('data-disabled', 'true');
  });

  it('Должен отобразиться компонент активный, уже выбранный', () => {
    const { getByTestId } = render(<Checkbox label={labelText} checked />);
    const checkbox = getByTestId('checkbox').querySelector('input');
    expect(checkbox).toBeChecked();
    const checkmark = getByTestId('checkbox').querySelector('[data-ui-checkbox-checkmark]');
    expect(checkmark).toBeInTheDocument();
  });

  it('Должен произойти рендер компонента с разными состояниями цвета', () => {
    const checkboxColors: ECheckboxColors[] = [
      ECheckboxColors.brand,
      ECheckboxColors.error,
      ECheckboxColors.warning,
      ECheckboxColors.success
    ];

    checkboxColors.forEach(color => {
      const { getByTestId } = render(<Checkbox label={labelText} color={color} />);
      const checkbox = getByTestId('checkbox').querySelector('input');
      expect(checkbox).toHaveAttribute('data-color', color);
      cleanup();
    });
  });

  it('Должен отобразиться компонент с цветовым выделением', () => {
    const { getByTestId } = render(<Checkbox label={labelText} colored />);
    const label = getByTestId('checkbox');
    expect(label).toHaveClass('colored');
  });

  it('Должен вызываться onChange при клике', async () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(<Checkbox label={labelText} onChange={handleChange} />);
    const checkbox = getByTestId('checkbox').querySelector('input');

    await userEvent.click(checkbox!);
    expect(handleChange).toHaveBeenCalled();
  });
});
