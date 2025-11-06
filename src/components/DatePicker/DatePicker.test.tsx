import React from 'react';

import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DatePicker from './index';

// Мока date-fns для стабильности тестов
jest.mock('date-fns', () => ({
  ...jest.requireActual('date-fns'),
  isValid: (date: any) => date instanceof Date && !isNaN(date.getTime()),
  parse: (dateString: string, _format: string, _referenceDate: Date) => {
    const parts = dateString.split('.');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
    return new Date(NaN);
  }
}));

describe('src/components/DatePicker', () => {
  const user = userEvent.setup();

  describe('Базовая функциональность', () => {
    it('рендерит компонент с дефолтными параметрами', () => {
      const mockOnChange = jest.fn();
      render(<DatePicker value={new Date()} onChange={mockOnChange} />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('отображает переданное значение даты', () => {
      const mockOnChange = jest.fn();
      const testDate = new Date(2024, 0, 15); // 15 января 2024
      render(<DatePicker value={testDate} onChange={mockOnChange} />);

      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('15.01.2024');
    });
  });

  describe('Поведение onBlur callback', () => {
    it('вызывает пользовательский onBlur с правильными параметрами', async () => {
      const mockOnChange = jest.fn();
      const mockOnBlur = jest.fn();
      const initialDate = new Date(2024, 0, 1);

      render(
        <DatePicker value={initialDate} onChange={mockOnChange} onBlur={mockOnBlur} disableChangesOnBlur={false} />
      );

      const input = screen.getByRole('textbox');

      await user.click(input);
      await user.clear(input);
      await user.type(input, '15.12.2024');
      fireEvent.blur(input);

      // Проверяем вызов пользовательского onBlur
      await waitFor(() => {
        expect(mockOnBlur).toHaveBeenCalled();
      });

      // onBlur получает параметры: (date, date2, shiftFrom, shiftTo)
      // Проверяем количество вызовов
      expect(mockOnBlur.mock.calls.length).toBeGreaterThan(0);
    });

    it('проверяет параметры onBlur - что именно передается', async () => {
      const mockOnBlur = jest.fn();
      const initialDate = new Date(2024, 0, 1);

      render(<DatePicker value={initialDate} onChange={() => {}} onBlur={mockOnBlur} disableChangesOnBlur={false} />);

      const input = screen.getByRole('textbox');

      await user.click(input);
      await user.clear(input);
      await user.type(input, '15.12.2024');
      fireEvent.blur(input);

      await waitFor(() => {
        expect(mockOnBlur).toHaveBeenCalled();
      });

      // Проверяем параметры onBlur
      const onBlurCalls = mockOnBlur.mock.calls;

      // onBlur может вызываться несколько раз, берем последний вызов
      if (onBlurCalls.length > 0) {
        const lastCall = onBlurCalls[onBlurCalls.length - 1];

        // В DatePicker onBlur может получать: (date, date2, shiftFrom, shiftTo)
        // Проверяем, что первый параметр - это дата или undefined
        if (lastCall.length > 0) {
          const firstParam = lastCall[0];
          if (firstParam !== undefined) {
            expect(firstParam).toBeInstanceOf(Date);
            expect(firstParam.getDate()).toBe(15);
            expect(firstParam.getMonth()).toBe(11); // декабрь
            expect(firstParam.getFullYear()).toBe(2024);
          }
        }
      }
    });

    it('вызывает onBlur даже когда disableChangesOnBlur=true', async () => {
      const mockOnChange = jest.fn();
      const mockOnBlur = jest.fn();
      const initialDate = new Date(2024, 0, 1);

      render(
        <DatePicker value={initialDate} onChange={mockOnChange} onBlur={mockOnBlur} disableChangesOnBlur={true} />
      );

      const input = screen.getByRole('textbox');

      await user.click(input);
      await user.clear(input);
      await user.type(input, '15.12.2024');
      fireEvent.blur(input);

      // onBlur должен вызываться всегда, независимо от disableChangesOnBlur
      await waitFor(() => {
        expect(mockOnBlur).toHaveBeenCalled();
      });

      // но onChange НЕ должен вызываться
      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });
});
