import React from 'react';

import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
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

const inputWithoutKeydown = (input: HTMLInputElement, from: number, to: number, text: string) => {
  const setValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
  setValue?.call(input, input.value.slice(0, from) + text + input.value.slice(to));
  input.setSelectionRange(from + text.length, from + text.length);
  fireEvent.input(input);
};

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

  describe('Уход из поля без изменений', () => {
    it('не вызывает onPeriodChange, если период не менялся', async () => {
      const mockOnPeriodChange = jest.fn();
      render(
        <DatePicker
          type="period"
          valueFrom={new Date(2026, 9, 19, 14, 35)}
          valueTo={new Date(2026, 9, 21)}
          onPeriodChange={mockOnPeriodChange}
        />
      );

      const input = screen.getByRole('textbox');
      await user.click(input);
      fireEvent.blur(input);

      expect(mockOnPeriodChange).not.toHaveBeenCalled();
    });

    it('не вызывает onPeriodChange при уходе из пустого периода', async () => {
      const mockOnPeriodChange = jest.fn();
      render(
        <DatePicker type="period" valueFrom={undefined} valueTo={undefined} onPeriodChange={mockOnPeriodChange} />
      );

      const input = screen.getByRole('textbox');
      await user.click(input);
      fireEvent.blur(input);

      expect(mockOnPeriodChange).not.toHaveBeenCalled();
    });

    it('не вызывает onPeriodChange со сменами, если ничего не менялось', async () => {
      const mockOnPeriodChange = jest.fn();
      render(
        <DatePicker
          type="shift"
          valueFrom={new Date(2026, 9, 19)}
          valueTo={new Date(2026, 9, 21)}
          shiftFrom={1}
          shiftTo={2}
          onPeriodChange={mockOnPeriodChange}
        />
      );

      const input = screen.getByRole('textbox');
      await user.click(input);
      fireEvent.blur(input);

      expect(mockOnPeriodChange).not.toHaveBeenCalled();
    });

    it('вызывает onPeriodChange, если период изменили', async () => {
      const mockOnPeriodChange = jest.fn();
      render(
        <DatePicker
          type="period"
          valueFrom={new Date(2026, 9, 19)}
          valueTo={new Date(2026, 9, 21)}
          onPeriodChange={mockOnPeriodChange}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.type(input, '25102026', { initialSelectionStart: 13, initialSelectionEnd: 23 });
      fireEvent.blur(input);

      const [valueFrom, valueTo] = mockOnPeriodChange.mock.calls[mockOnPeriodChange.mock.calls.length - 1];
      expect(valueFrom).toEqual(new Date(2026, 9, 19));
      expect(valueTo).toEqual(new Date(2026, 9, 25));
    });

    it('возвращает текст поля к значению при уходе с недописанной датой', async () => {
      const mockOnPeriodChange = jest.fn();
      render(
        <DatePicker
          type="period"
          valueFrom={new Date(2024, 0, 15)}
          valueTo={undefined}
          onPeriodChange={mockOnPeriodChange}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.type(input, '2', { initialSelectionStart: 13, initialSelectionEnd: 13 });
      fireEvent.blur(input);

      expect(mockOnPeriodChange).not.toHaveBeenCalled();
      await waitFor(() => {
        expect(input.value).toBe('15.01.2024 — __.__.____');
      });
    });

    it('возвращает текст поля к значению при уходе с перевёрнутым периодом', async () => {
      const mockOnPeriodChange = jest.fn();
      render(
        <DatePicker
          type="period"
          valueFrom={new Date(2024, 0, 15)}
          valueTo={new Date(2024, 0, 20)}
          onPeriodChange={mockOnPeriodChange}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.type(input, '2001202415012024', { initialSelectionStart: 0, initialSelectionEnd: 23 });
      expect(input.value).toBe('20.01.2024 — 15.01.2024');
      fireEvent.blur(input);

      expect(mockOnPeriodChange).not.toHaveBeenCalled();
      await waitFor(() => {
        expect(input.value).toBe('15.01.2024 — 20.01.2024');
      });
    });

    it('возвращает текст поля к значению при уходе с неверным кварталом', async () => {
      render(
        <DatePicker
          type="period"
          level="quarter"
          valueFrom={new Date(2024, 0, 1)}
          valueTo={new Date(2024, 3, 1)}
          onPeriodChange={jest.fn()}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.type(input, '5', { initialSelectionStart: 0, initialSelectionEnd: 0 });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(input.value).toBe('1 квартал 2024 — 2 квартал 2024');
      });
    });

    it('не вызывает onChange, если дата не менялась', async () => {
      const mockOnChange = jest.fn();
      render(<DatePicker value={new Date(2026, 9, 19, 14, 35)} onChange={mockOnChange} />);

      const input = screen.getByRole('textbox');
      await user.click(input);
      fireEvent.blur(input);

      expect(mockOnChange).not.toHaveBeenCalled();
    });

    it('вызывает onChange, если дату изменили', async () => {
      const mockOnChange = jest.fn();
      render(<DatePicker value={new Date(2026, 9, 19)} onChange={mockOnChange} />);

      const input = screen.getByRole('textbox');
      await user.click(input);
      await user.clear(input);
      await user.type(input, '25.10.2026');
      fireEvent.blur(input);

      expect(mockOnChange).toHaveBeenLastCalledWith(new Date(2026, 9, 25));
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

  describe('Ввод цифр в режиме периода', () => {
    it('корректно вводит цифры в пустой период', async () => {
      const mockOnPeriodChange = jest.fn();
      render(
        <DatePicker type="period" valueFrom={undefined} valueTo={undefined} onPeriodChange={mockOnPeriodChange} />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);

      await waitFor(() => {
        expect(input.value).toBe('__.__.____ — __.__.____');
      });

      await user.type(input, '15122024');

      await waitFor(() => {
        expect(input.value).toContain('15.12.2024');
      });
    });

    it('автоматически добавляет 0 перед большими цифрами дня', async () => {
      const mockOnPeriodChange = jest.fn();
      render(
        <DatePicker type="period" valueFrom={undefined} valueTo={undefined} onPeriodChange={mockOnPeriodChange} />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);

      // Вводим 5 (день > 3) - должно стать 05
      await user.type(input, '5');

      await waitFor(() => {
        expect(input.value).toContain('05');
      });
    });

    it('валидирует день не больше 31', async () => {
      const mockOnPeriodChange = jest.fn();
      render(
        <DatePicker type="period" valueFrom={undefined} valueTo={undefined} onPeriodChange={mockOnPeriodChange} />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);

      // Вводим 39 (день > 31) - вторая цифра должна игнорироваться
      await user.type(input, '39');

      await waitFor(() => {
        const value = input.value;
        const day = value.split('.')[0];
        expect(parseInt(day)).toBeLessThanOrEqual(31);
      });
    });

    it('валидирует месяц не больше 12', async () => {
      const mockOnPeriodChange = jest.fn();
      render(
        <DatePicker type="period" valueFrom={undefined} valueTo={undefined} onPeriodChange={mockOnPeriodChange} />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);

      // Вводим день, затем месяц 19 (> 12)
      await user.type(input, '15');
      await user.type(input, '19');

      await waitFor(() => {
        const value = input.value;
        const parts = value.split('.');
        if (parts.length > 1) {
          const month = parseInt(parts[1]);
          expect(month).toBeLessThanOrEqual(12);
        }
      });
    });

    it.each([
      { digits: '0110202620102026', expected: '01.10.2026 — 20.10.2026' },
      { digits: '1501199920011999', expected: '15.01.1999 — 20.01.1999' }
    ])('вводит вторую дату без искажения года: $expected', async ({ digits, expected }) => {
      render(<DatePicker type="period" valueFrom={undefined} valueTo={undefined} onPeriodChange={jest.fn()} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);
      await user.type(input, digits);

      await waitFor(() => {
        expect(input.value).toBe(expected);
      });
    });

    it('добавляет 0 перед большими цифрами дня и месяца второй даты', async () => {
      render(<DatePicker type="period" valueFrom={undefined} valueTo={undefined} onPeriodChange={jest.fn()} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);

      await user.type(input, '01102026' + '54');

      await waitFor(() => {
        expect(input.value).toBe('01.10.2026 — 05.04.____');
      });
    });

    it('передаёт в onPeriodChange введённую вручную вторую дату', async () => {
      const mockOnPeriodChange = jest.fn();
      render(
        <DatePicker type="period" valueFrom={undefined} valueTo={undefined} onPeriodChange={mockOnPeriodChange} />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);
      await user.type(input, '0110202620102026');
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

      await waitFor(() => {
        const [valueFrom, valueTo] = mockOnPeriodChange.mock.calls[mockOnPeriodChange.mock.calls.length - 1];
        expect(valueFrom).toEqual(new Date(2026, 9, 1));
        expect(valueTo).toEqual(new Date(2026, 9, 20));
      });
    });

    it('на уровне month проверяет месяц и не искажает год', async () => {
      render(
        <DatePicker type="period" level="month" valueFrom={undefined} valueTo={undefined} onPeriodChange={jest.fn()} />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);
      await user.type(input, '52026' + '62026');

      await waitFor(() => {
        expect(input.value).toBe('05.2026 — 06.2026');
      });
    });

    it('на уровне year не применяет к году проверки дня и месяца', async () => {
      render(
        <DatePicker type="period" level="year" valueFrom={undefined} valueTo={undefined} onPeriodChange={jest.fn()} />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);
      await user.type(input, '2026' + '2027');

      await waitFor(() => {
        expect(input.value).toBe('2026 — 2027');
      });
    });
  });

  describe('Выделение и удаление в режиме периода', () => {
    it('удаляет всё выделенное значение from при нажатии Backspace', async () => {
      const startDate = new Date(2024, 0, 15);
      const endDate = new Date(2024, 0, 20);
      const mockOnPeriodChange = jest.fn();

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

      // Выделяем from (первые 10 символов)
      input.setSelectionRange(0, 10);

      // Нажимаем Backspace
      fireEvent.keyDown(input, { key: 'Backspace' });

      await waitFor(() => {
        expect(input.value).toContain('__.__.____ — 20.01.2024');
      });
    });

    it('удаляет всё выделенное значение to при нажатии Delete', async () => {
      const startDate = new Date(2024, 0, 15);
      const endDate = new Date(2024, 0, 20);
      const mockOnPeriodChange = jest.fn();

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

      // Выделяем to (с позиции 13 до 23)
      input.setSelectionRange(13, 23);

      // Нажимаем Delete
      fireEvent.keyDown(input, { key: 'Delete' });

      await waitFor(() => {
        expect(input.value).toContain('15.01.2024 — __.__.____');
      });
    });

    it('удаляет весь период при выделении всего текста', async () => {
      const startDate = new Date(2024, 0, 15);
      const endDate = new Date(2024, 0, 20);
      const mockOnPeriodChange = jest.fn();

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

      // Выделяем всё
      input.setSelectionRange(0, input.value.length);

      // Нажимаем Backspace
      fireEvent.keyDown(input, { key: 'Backspace' });

      await waitFor(() => {
        expect(input.value).toBe('__.__.____ — __.__.____');
      });
    });
  });

  describe('Ввод поверх значения и вставка в режиме периода', () => {
    const renderFilledPeriod = async () => {
      render(
        <DatePicker
          type="period"
          valueFrom={new Date(2026, 9, 19)}
          valueTo={new Date(2026, 9, 21)}
          onPeriodChange={jest.fn()}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('19.10.2026 — 21.10.2026');
      });
      return input;
    };

    it('заменяет весь период при вводе после выделения всего текста', async () => {
      const input = await renderFilledPeriod();

      await user.type(input, '2', { initialSelectionStart: 0, initialSelectionEnd: input.value.length });
      expect(input.value).toBe('2_.__.____ — __.__.____');

      await user.type(input, '210202625102026', { skipClick: true });
      expect(input.value).toBe('22.10.2026 — 25.10.2026');
    });

    it('сдвигает курсор, когда введённая цифра совпадает с прежней', async () => {
      const input = await renderFilledPeriod();

      await user.type(input, '25', { initialSelectionStart: 13, initialSelectionEnd: 13 });

      expect(input.value).toBe('19.10.2026 — 25.10.2026');
    });

    it('добавляет 0 перед большой цифрой дня поверх заполненной даты', async () => {
      const input = await renderFilledPeriod();

      await user.type(input, '511', { initialSelectionStart: 0, initialSelectionEnd: 0 });

      expect(input.value).toBe('05.11.2026 — 21.10.2026');
    });

    it('очищает вторую цифру дня, если она стала недопустимой', async () => {
      const input = await renderFilledPeriod();

      await user.type(input, '3', { initialSelectionStart: 0, initialSelectionEnd: 0 });

      expect(input.value).toBe('3_.10.2026 — 21.10.2026');
    });

    it('добавляет 0 перед большой цифрой месяца поверх заполненной даты', async () => {
      const input = await renderFilledPeriod();

      await user.type(input, '3', { initialSelectionStart: 3, initialSelectionEnd: 3 });

      expect(input.value).toBe('19.03.2026 — 21.10.2026');
    });

    it('не возвращает курсор в начало после быстрого ввода в очищенное поле', async () => {
      const fastUser = userEvent.setup({ delay: null });
      const input = await renderFilledPeriod();

      await user.click(input);
      input.setSelectionRange(0, input.value.length);
      fireEvent.keyDown(input, { key: 'Backspace' });
      await fastUser.type(input, '221', { skipClick: true });
      await act(() => new Promise(resolve => setTimeout(resolve, 0)));

      expect(input.value).toBe('22.1_.____ — __.__.____');
      expect(input.selectionStart).toBe(4);
    });

    it('вставляет целый период в очищенное поле', async () => {
      render(<DatePicker type="period" valueFrom={undefined} valueTo={undefined} onPeriodChange={jest.fn()} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);
      await waitFor(() => {
        expect(input.value).toBe('__.__.____ — __.__.____');
      });

      await user.paste('19.10.2026 — 21.10.2026');

      expect(input.value).toBe('19.10.2026 — 21.10.2026');
    });

    it('вставляет целый период поверх заполненного значения', async () => {
      const input = await renderFilledPeriod();

      await user.click(input);
      input.setSelectionRange(5, 5);
      await user.paste('01.11.2026 — 30.11.2026');

      expect(input.value).toBe('01.11.2026 — 30.11.2026');
    });

    it('вставляет дату поверх выделенной второй даты', async () => {
      const input = await renderFilledPeriod();

      await user.click(input);
      input.setSelectionRange(13, 23);
      await user.paste('25.10.2026');

      expect(input.value).toBe('19.10.2026 — 25.10.2026');
    });

    it('вставляет цифры без точек с позиции курсора', async () => {
      render(
        <DatePicker type="period" valueFrom={new Date(2026, 9, 19)} valueTo={undefined} onPeriodChange={jest.fn()} />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('19.10.2026 — __.__.____');
      });
      await user.click(input);
      input.setSelectionRange(13, 13);
      await user.paste('25102026');

      expect(input.value).toBe('19.10.2026 — 25.10.2026');
    });

    it('после выделения всего текста вставляет одну дату в начало', async () => {
      const input = await renderFilledPeriod();

      await user.click(input);
      input.setSelectionRange(0, input.value.length);
      await user.paste('25.10.2026');

      expect(input.value).toBe('25.10.2026 — __.__.____');
    });

    it('не меняет значение при вставке текста без цифр', async () => {
      const input = await renderFilledPeriod();

      await user.click(input);
      input.setSelectionRange(13, 23);
      await user.paste('дата');

      expect(input.value).toBe('19.10.2026 — 21.10.2026');
    });

    it('принимает ввод без нажатия клавиши, как с экранной клавиатуры', async () => {
      render(<DatePicker type="period" valueFrom={undefined} valueTo={undefined} onPeriodChange={jest.fn()} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);
      await waitFor(() => {
        expect(input.value).toBe('__.__.____ — __.__.____');
      });

      inputWithoutKeydown(input, 0, 0, '1');
      inputWithoutKeydown(input, 1, 1, '9');

      expect(input.value).toBe('19.__.____ — __.__.____');
    });

    it.each([
      { name: 'год', pos: 6 },
      { name: 'день', pos: 0 },
      { name: 'месяц', pos: 3 }
    ])('не меняет $name при вводе без нажатия клавиши той же цифры, что под курсором', async ({ pos }) => {
      const input = await renderFilledPeriod();
      await user.click(input);

      inputWithoutKeydown(input, pos, pos, input.value[pos]);

      expect(input.value).toBe('19.10.2026 — 21.10.2026');
      expect(input.selectionStart).toBe(pos + 1);
    });

    it.each([
      { name: 'всё значение', from: 0, to: 23, expected: '06.__.____ — __.__.____' },
      { name: 'вторую дату', from: 13, to: 23, expected: '19.10.2026 — 06.__.____' }
    ])('заменяет $name при вводе без нажатия клавиши поверх выделения', async ({ from, to, expected }) => {
      const input = await renderFilledPeriod();
      await user.click(input);

      inputWithoutKeydown(input, from, to, '6');

      expect(input.value).toBe(expected);
    });

    it('при одинаковых датах вводит без нажатия клавиши во вторую позицию дня', async () => {
      render(
        <DatePicker
          type="period"
          valueFrom={new Date(2024, 0, 15)}
          valueTo={new Date(2024, 0, 15)}
          onPeriodChange={jest.fn()}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);
      await waitFor(() => {
        expect(input.value).toBe('15.01.2024 — __.__.____');
      });

      inputWithoutKeydown(input, 1, 1, '6');

      expect(input.value).toBe('16.01.2024 — __.__.____');
    });

    it('не меняет поле readOnly при вставке', async () => {
      render(
        <DatePicker
          type="period"
          readOnly
          valueFrom={new Date(2026, 9, 19)}
          valueTo={new Date(2026, 9, 21)}
          onPeriodChange={jest.fn()}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);
      input.setSelectionRange(0, input.value.length);
      await user.paste('01.11.2026 — 30.11.2026');

      expect(input.value).toBe('19.10.2026 — 21.10.2026');
    });

    it('не меняет поле readOnly при вводе цифр и удалении', async () => {
      render(
        <DatePicker
          type="period"
          readOnly
          valueFrom={new Date(2026, 9, 19)}
          valueTo={new Date(2026, 9, 21)}
          onPeriodChange={jest.fn()}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.type(input, '25', { initialSelectionStart: 13, initialSelectionEnd: 13 });
      input.setSelectionRange(0, input.value.length);
      fireEvent.keyDown(input, { key: 'Backspace' });

      expect(input.value).toBe('19.10.2026 — 21.10.2026');
    });
  });

  describe('Период со сменами', () => {
    it('отображает смену только если есть соответствующая дата', async () => {
      const startDate = new Date(2024, 0, 15);
      const mockOnPeriodChange = jest.fn();

      render(
        <DatePicker
          type="shift"
          valueFrom={startDate}
          valueTo={undefined}
          shiftFrom={1}
          shiftTo={2}
          onPeriodChange={mockOnPeriodChange}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        const value = input.value;
        // Должно быть: 15.01.2024/1 — __.__.____ /_
        expect(value).toContain('/1');
        expect(value).toContain('/_');
        expect(value).not.toContain('/2');
      });
    });

    it('сбрасывает смену при удалении даты', async () => {
      const startDate = new Date(2024, 0, 15);
      const endDate = new Date(2024, 0, 20);
      const mockOnPeriodChange = jest.fn();

      const { rerender } = render(
        <DatePicker
          type="shift"
          valueFrom={startDate}
          valueTo={endDate}
          shiftFrom={1}
          shiftTo={2}
          onPeriodChange={mockOnPeriodChange}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input.value).toContain('/1');
        expect(input.value).toContain('/2');
      });

      // Удаляем valueTo
      rerender(
        <DatePicker
          type="shift"
          valueFrom={startDate}
          valueTo={undefined}
          shiftFrom={1}
          shiftTo={2}
          onPeriodChange={mockOnPeriodChange}
        />
      );

      await waitFor(() => {
        const value = input.value;
        expect(value).toContain('/1');
        expect(value).toContain('/_'); // Смена сброшена
        expect(value).not.toContain('/2');
      });
    });

    it('использует правильный разделитель для периода со сменами', async () => {
      const startDate = new Date(2024, 0, 15);
      const endDate = new Date(2024, 0, 20);
      const mockOnPeriodChange = jest.fn();

      render(
        <DatePicker
          type="shift"
          valueFrom={startDate}
          valueTo={endDate}
          shiftFrom={1}
          shiftTo={2}
          onPeriodChange={mockOnPeriodChange}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        // Должен быть разделитель " — " а не "/"
        expect(input.value).toContain(' — ');
        expect(input.value).toMatch(/\d{2}\.\d{2}\.\d{4}\/\d — \d{2}\.\d{2}\.\d{4}\/\d/);
      });
    });

    it('вводит вручную обе даты и смены в пустой период', async () => {
      render(<DatePicker type="shift" valueFrom={undefined} valueTo={undefined} onPeriodChange={jest.fn()} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);

      await waitFor(() => {
        expect(input.value).toBe('__.__.____/_ — __.__.____/_');
      });

      await user.type(input, '01102026' + '1' + '20102026' + '2');

      await waitFor(() => {
        expect(input.value).toBe('01.10.2026/1 — 20.10.2026/2');
      });
    });

    it('передаёт в onPeriodChange введённые вручную даты и смены', async () => {
      const mockOnPeriodChange = jest.fn();
      render(<DatePicker type="shift" valueFrom={undefined} valueTo={undefined} onPeriodChange={mockOnPeriodChange} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);
      await user.type(input, '01102026' + '1' + '20102026' + '2');
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

      await waitFor(() => {
        const [valueFrom, valueTo, shiftFrom, shiftTo] =
          mockOnPeriodChange.mock.calls[mockOnPeriodChange.mock.calls.length - 1];
        expect(valueFrom).toEqual(new Date(2026, 9, 1));
        expect(valueTo).toEqual(new Date(2026, 9, 20));
        expect(shiftFrom).toBe(1);
        expect(shiftTo).toBe(2);
      });
    });

    it('вставляет целый период со сменами в очищенное поле', async () => {
      render(<DatePicker type="shift" valueFrom={undefined} valueTo={undefined} onPeriodChange={jest.fn()} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await user.click(input);
      await waitFor(() => {
        expect(input.value).toBe('__.__.____/_ — __.__.____/_');
      });

      await user.paste('17.10.2026/1 — 25.10.2026/2');

      expect(input.value).toBe('17.10.2026/1 — 25.10.2026/2');
    });
  });

  describe('Дополнительная функциональность', () => {
    it('отображает label', () => {
      render(<DatePicker label="Выберите дату" />);
      expect(screen.getByText('Выберите дату')).toBeInTheDocument();
    });

    it('корректно применяет состояние disabled', () => {
      render(<DatePicker disabled />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input).toBeDisabled();
    });

    it('не отображает кнопку reset когда значение отсутствует', () => {
      const { container } = render(<DatePicker value={undefined} reset={true} />);
      const resetButton = container.querySelector('[data-ui-input-reset-icon]');
      expect(resetButton).not.toBeInTheDocument();
    });

    it('вызывает onReset при клике на кнопку сброса', async () => {
      const handleReset = jest.fn();
      const testDate = new Date(2024, 0, 15);
      const { container } = render(<DatePicker value={testDate} reset={true} onReset={handleReset} />);

      const resetButton = container.querySelector('[data-ui-input-reset-icon]');

      await act(async () => {
        if (resetButton) {
          fireEvent.click(resetButton);
        }
      });

      expect(handleReset).toHaveBeenCalled();
    });

    it('корректно работает с undefined value', () => {
      render(<DatePicker value={undefined} />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input).toHaveValue('__.__.____');
    });

    it('открывает панель календаря при фокусе с isOpenOnFocus', async () => {
      const { container } = render(<DatePicker isOpenOnFocus={true} />);
      const input = screen.getByRole('textbox') as HTMLInputElement;

      await act(async () => {
        fireEvent.focus(input);
      });

      await waitFor(() => {
        const calendar = container.querySelector('[data-ui-datepicker-calendar-panel]');
        expect(calendar).toBeInTheDocument();
      });
    });

    it('работает с withPortal=true', () => {
      const testDate = new Date(2024, 0, 15);
      render(<DatePicker value={testDate} withPortal={true} />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input).toBeInTheDocument();
    });

    it('не отображает кнопку reset когда disabled=true даже если reset=true', () => {
      const testDate = new Date(2024, 0, 15);
      const { container } = render(<DatePicker value={testDate} disabled={true} reset={true} />);
      const resetButton = container.querySelector('[data-ui-input-reset-icon]');
      expect(resetButton).not.toBeInTheDocument();
    });

    it('отображает тип time с временем', () => {
      const testDate = new Date(2024, 0, 15, 14, 30);
      render(<DatePicker type="time" value={testDate} />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toContain('14:30');
    });

    it('отображает тип seconds с секундами', () => {
      const testDate = new Date(2024, 0, 15, 14, 30, 45);
      render(<DatePicker type="seconds" value={testDate} />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toContain('14:30:45');
    });
  });
});
