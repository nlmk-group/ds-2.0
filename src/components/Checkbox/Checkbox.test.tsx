import React from 'react';

import { customInputColors } from '@components/declaration';
import { render } from '@testing-library/react';

import { ICheckboxProps } from './types';

import Checkbox from '.';

describe('src/components/Checkbox', () => {
  const labelText = 'Sample text';

  it('Должен отобразиться компонент по умолчанию', () => {
    const { container } = render(<Checkbox />);
    const checkbox = container.getElementsByTagName('input')[0];
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeEnabled();
    expect(checkbox).toHaveClass('checkbox');
  });

  it('Должен отобразиться компонент с текстом лейбла', () => {
    const { container, getByText } = render(<Checkbox label={labelText} />);
    const span = container.getElementsByClassName('text')[0];
    expect(span).toBeInTheDocument();
    const text = getByText(labelText);
    expect(text).toBeInTheDocument();
  });

  it('Должен отобразиться компонент неактивный (disable)', () => {
    const { container, getByLabelText } = render(<Checkbox label={labelText} disabled />);
    const checkbox = getByLabelText(labelText);
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveAttribute('disabled');
    const span = container.getElementsByClassName('text')[0];
    expect(span).toHaveClass('disabled');
  });

  it('Должен отобразиться компонент активный, уже выбранный', () => {
    const { container, getByLabelText } = render(<Checkbox label={labelText} checked />);
    const checkbox = getByLabelText(labelText);
    expect(checkbox).toBeChecked();
    expect(checkbox).toHaveAttribute('checked');
    const checkmark = container.getElementsByClassName('checkmark')[0];
    expect(checkmark).toBeInTheDocument();
  });

  it('Должен отобразиться компонент активный и уже выбранный с пропсой multiple', () => {
    const { container, getByLabelText } = render(<Checkbox label={labelText} checked multiple />);
    const checkbox = getByLabelText(labelText);
    expect(checkbox).toBeChecked();
    expect(checkbox).toHaveAttribute('checked');
    const checkmark = container.getElementsByClassName('checkmark-multiple')[0];
    expect(checkmark).toBeInTheDocument();
  });

  it('Должен произойти рендер компонента с разными состояниями цвета', () => {
    const checkboxColorStates: ICheckboxProps['color'][] = [
      customInputColors.default,
      customInputColors.error
    ];
    checkboxColorStates.map(checkboxColor => {
      const { container } = render(<Checkbox label={labelText} color={checkboxColor} />);
      const checkmark = container.getElementsByClassName('checkmark')[0];
      expect(checkmark).toHaveClass(checkboxColor as string);
    });
  });
});
