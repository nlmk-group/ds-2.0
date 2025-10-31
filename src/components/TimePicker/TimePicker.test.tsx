import React from 'react';

import { TimePicker } from '@components/index';
import { act, fireEvent, render, screen } from '@testing-library/react';

jest.mock('@floating-ui/react', () => ({
  useFloating: () => ({
    refs: {
      setReference: jest.fn(),
      setFloating: jest.fn()
    },
    floatingStyles: { position: 'absolute', top: '0px', left: '0px' },
    placement: 'bottom-start'
  }),
  offset: jest.fn(),
  flip: jest.fn(),
  shift: jest.fn(),
  limitShift: jest.fn(),
  autoUpdate: jest.fn()
}));

beforeEach(() => {
  const mockPortalRoot = document.createElement('div');
  mockPortalRoot.setAttribute('id', 'root');
  document.body.appendChild(mockPortalRoot);
});

afterEach(() => {
  document.body.innerHTML = '';
  jest.clearAllMocks();
});

describe('TimePicker компонент', () => {
  it('рендерит компонент с дефолтными параметрами', () => {
    render(<TimePicker />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('отображает выбранное время', () => {
    const testDate = new Date(2023, 0, 1, 14, 30);
    render(<TimePicker value={testDate} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('14:30');
  });

  it('вызывает onChange при изменении времени', async () => {
    const handleChange = jest.fn();
    const testDate = new Date(2023, 0, 1, 14, 30);

    render(<TimePicker value={testDate} onChange={handleChange} />);

    const input = screen.getByRole('textbox');

    await act(async () => {
      fireEvent.focus(input);
    });

    await act(async () => {
      const firstSelectedElement = screen.queryByTestId('selected');

      if (firstSelectedElement) {
        fireEvent.click(firstSelectedElement);
      }

      fireEvent.blur(input);
    });

    expect(handleChange).toHaveBeenCalled();
  });

  it('отображает секунды при type="timeWithSeconds"', () => {
    const testDate = new Date(2023, 0, 1, 14, 30, 45);
    render(<TimePicker type="timeWithSeconds" value={testDate} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('14:30:45');
  });

  it('отображает период времени при type="period"', () => {
    const startDate = new Date(2023, 0, 1, 10, 0);
    const endDate = new Date(2023, 0, 1, 11, 30);

    render(<TimePicker type="period" valueFrom={startDate} valueTo={endDate} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('10:00 — 11:30');
  });

  it('отображает период с секундами при type="periodWithSeconds"', () => {
    const startDate = new Date(2023, 0, 1, 10, 0, 15);
    const endDate = new Date(2023, 0, 1, 11, 30, 45);

    render(<TimePicker type="periodWithSeconds" valueFrom={startDate} valueTo={endDate} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('10:00:15 — 11:30:45');
  });

  it('отображает label', () => {
    render(<TimePicker label="Время" />);
    expect(screen.getByText('Время')).toBeInTheDocument();
  });

  it('корректно применяет состояние disabled', () => {
    render(<TimePicker disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });
});
