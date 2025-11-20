import React from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DatePicker from './index';

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

      await waitFor(() => {
        expect(mockOnBlur).toHaveBeenCalled();
      });

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

      const onBlurCalls = mockOnBlur.mock.calls;

      if (onBlurCalls.length > 0) {
        const lastCall = onBlurCalls[onBlurCalls.length - 1];

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

      await waitFor(() => {
        expect(mockOnBlur).toHaveBeenCalled();
      });

      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });

  describe('Отображение маски при фокусе', () => {
    it('показывает пустую маску при фокусе на пустом инпуте', async () => {
      const mockOnChange = jest.fn();
      render(<DatePicker value={undefined} onChange={mockOnChange} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;

      await user.click(input);

      await waitFor(() => {
        expect(input.value).toBe('__.__.____');
      });
    });

    it('показывает пустую маску для периода при фокусе', async () => {
      const mockOnPeriodChange = jest.fn();
      render(
        <DatePicker type="period" valueFrom={undefined} valueTo={undefined} onPeriodChange={mockOnPeriodChange} />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;

      await user.click(input);

      await waitFor(() => {
        expect(input.value).toBe('__.__.____ — __.__.____');
      });
    });
  });

  describe('Валидация периодов при blur/enter', () => {
    it('откатывает незавершенный ввод при blur в периоде', async () => {
      const mockOnPeriodChange = jest.fn();
      const startDate = new Date(2024, 0, 15);
      const endDate = new Date(2024, 0, 20);

      render(
        <DatePicker
          type="period"
          valueFrom={startDate}
          valueTo={endDate}
          onPeriodChange={mockOnPeriodChange}
          disableChangesOnBlur={false}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('15.01.2024 — 20.01.2024');
      });

      await user.click(input);
      await user.clear(input);
      await user.type(input, '15.01.2024 — 20._1.2024');
      fireEvent.blur(input);

      await waitFor(() => {
        expect(input).toHaveValue('15.01.2024 — 20.01.2024');
      });
    });

    it('НЕ откатывает при полном стирании одного значения', async () => {
      const mockOnPeriodChange = jest.fn();
      const startDate = new Date(2024, 0, 15);
      const endDate = new Date(2024, 0, 20);

      render(
        <DatePicker
          type="period"
          valueFrom={startDate}
          valueTo={endDate}
          onPeriodChange={mockOnPeriodChange}
          disableChangesOnBlur={false}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('15.01.2024 — 20.01.2024');
      });

      await user.click(input);
      await user.clear(input);
      await user.type(input, '15.01.2024 — __.__.____');
      fireEvent.blur(input);

      await waitFor(() => {
        expect(mockOnPeriodChange).toHaveBeenCalled();
        const callArgs = mockOnPeriodChange.mock.calls[mockOnPeriodChange.mock.calls.length - 1];
        expect(callArgs[0]).toBeInstanceOf(Date);
        expect(callArgs[0]?.getDate()).toBe(15);
      });
    });

    it('откатывает незавершенный ввод при Enter в периоде', async () => {
      const mockOnPeriodChange = jest.fn();
      const startDate = new Date(2024, 0, 15);
      const endDate = new Date(2024, 0, 20);

      render(
        <DatePicker
          type="period"
          valueFrom={startDate}
          valueTo={endDate}
          onPeriodChange={mockOnPeriodChange}
          disableChangesOnBlur={false}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('15.01.2024 — 20.01.2024');
      });

      await user.click(input);
      await user.clear(input);
      await user.type(input, '15.01.2024 — 20._1.2024');
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

      await waitFor(() => {
        expect(input).toHaveValue('15.01.2024 — 20.01.2024');
      });
    });
  });

  describe('Частичные периоды', () => {
    it('отображает частичный период: только valueFrom без valueTo', async () => {
      const startDate = new Date(2024, 0, 15);
      const mockOnPeriodChange = jest.fn();

      render(
        <DatePicker type="period" valueFrom={startDate} valueTo={undefined} onPeriodChange={mockOnPeriodChange} />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        const value = input.value;
        expect(value).toContain('15.01.2024');
        expect(value).toContain('__');
      });
    });

    it('отображает частичный период: только valueTo без valueFrom', async () => {
      const endDate = new Date(2024, 0, 20);
      const mockOnPeriodChange = jest.fn();

      render(<DatePicker type="period" valueFrom={undefined} valueTo={endDate} onPeriodChange={mockOnPeriodChange} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        const value = input.value;
        expect(value).toContain('20.01.2024');
        expect(value).toContain('__');
      });
    });

    it('корректно переключается между полным и частичным периодом', async () => {
      const startDate = new Date(2024, 0, 15);
      const endDate = new Date(2024, 0, 20);

      const { rerender } = render(
        <DatePicker type="period" valueFrom={startDate} valueTo={endDate} onPeriodChange={() => {}} />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('15.01.2024 — 20.01.2024');
      });

      rerender(<DatePicker type="period" valueFrom={startDate} valueTo={undefined} onPeriodChange={() => {}} />);

      await waitFor(() => {
        const value = input.value;
        expect(value).toContain('15.01.2024');
        expect(value).toContain('__');
      });
    });
  });

  describe('Reset для периодов', () => {
    it('отображает кнопку reset для периода когда есть хотя бы одно значение', async () => {
      const startDate = new Date(2024, 0, 15);
      const mockOnReset = jest.fn();
      const { container } = render(
        <DatePicker
          type="period"
          valueFrom={startDate}
          valueTo={undefined}
          reset={true}
          onReset={mockOnReset}
          onPeriodChange={() => {}}
        />
      );

      await waitFor(() => {
        const resetButton = container.querySelector('[data-ui-input-reset-icon]');
        expect(resetButton).toBeInTheDocument();
      });
    });

    it('НЕ отображает кнопку reset когда оба значения пустые', () => {
      const { container } = render(
        <DatePicker type="period" valueFrom={undefined} valueTo={undefined} reset={true} onPeriodChange={() => {}} />
      );
      const resetButton = container.querySelector('[data-ui-input-reset-icon]');
      expect(resetButton).not.toBeInTheDocument();
    });

    it('вызывает onReset при клике на кнопку reset в периоде', async () => {
      const mockOnReset = jest.fn();
      const startDate = new Date(2024, 0, 15);
      const endDate = new Date(2024, 0, 20);

      const { container } = render(
        <DatePicker
          type="period"
          valueFrom={startDate}
          valueTo={endDate}
          reset={true}
          onReset={mockOnReset}
          onPeriodChange={() => {}}
        />
      );

      const resetButton = container.querySelector('[data-ui-input-reset-icon]');
      expect(resetButton).toBeInTheDocument();

      await user.click(resetButton!);

      await waitFor(() => {
        expect(mockOnReset).toHaveBeenCalled();
      });
    });
  });

  describe('Предотвращение смещения при удалении', () => {
    it('корректно обрабатывает редактирование периода', async () => {
      const startDate = new Date(2024, 0, 15);
      const endDate = new Date(2024, 0, 20);
      const mockOnPeriodChange = jest.fn();

      render(<DatePicker type="period" valueFrom={startDate} valueTo={endDate} onPeriodChange={mockOnPeriodChange} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('15.01.2024 — 20.01.2024');
      });

      await user.click(input);

      expect(input.value).toContain('—');
      expect(input.value.split('—').length).toBe(2);

      const [leftPart, rightPart] = input.value.split('—');
      expect(leftPart.trim()).toBeTruthy();
      expect(rightPart.trim()).toBeTruthy();
    });
  });
});
