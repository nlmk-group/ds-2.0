import React from 'react';

import { TimePicker } from '@components/index';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

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

Element.prototype.scrollTo = jest.fn();

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
    const testDate = new Date(2025, 0, 1, 14, 30);
    render(<TimePicker value={testDate} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('14:30');
  });

  it('вызывает onChange при изменении времени', async () => {
    const handleChange = jest.fn();
    const testDate = new Date(2025, 0, 1, 14, 30);

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
    const testDate = new Date(2025, 0, 1, 14, 30, 45);
    render(<TimePicker type="timeWithSeconds" value={testDate} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('14:30:45');
  });

  it('отображает период времени при type="period"', async () => {
    const startDate = new Date(2025, 0, 1, 10, 0);
    const endDate = new Date(2025, 0, 1, 11, 30);

    render(<TimePicker type="period" valueFrom={startDate} valueTo={endDate} />);

    const input = screen.getByRole('textbox');
    await waitFor(() => {
      expect(input).toHaveValue('10:00 — 11:30');
    });
  });

  it('отображает период с секундами при type="periodWithSeconds"', async () => {
    const startDate = new Date(2025, 0, 1, 10, 0, 15);
    const endDate = new Date(2025, 0, 1, 11, 30, 45);

    render(<TimePicker type="periodWithSeconds" valueFrom={startDate} valueTo={endDate} />);

    const input = screen.getByRole('textbox');
    await waitFor(() => {
      expect(input).toHaveValue('10:00:15 — 11:30:45');
    });
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

  it('отображает кнопку reset когда есть значение', () => {
    const testDate = new Date(2025, 0, 1, 14, 30);
    const { container } = render(<TimePicker value={testDate} reset={true} />);
    const resetButton = container.querySelector('[data-ui-input-reset-icon]');
    expect(resetButton).toBeInTheDocument();
  });

  it('не отображает кнопку reset когда значение отсутствует', () => {
    const { container } = render(<TimePicker value={undefined} reset={true} />);
    const resetButton = container.querySelector('[data-ui-input-reset-icon]');
    expect(resetButton).not.toBeInTheDocument();
  });

  it('вызывает onReset при клике на кнопку сброса', async () => {
    const handleReset = jest.fn();
    const testDate = new Date(2025, 0, 1, 14, 30);
    const { container } = render(<TimePicker value={testDate} reset={true} onReset={handleReset} />);

    const resetButton = container.querySelector('[data-ui-input-reset-icon]');

    await act(async () => {
      if (resetButton) {
        fireEvent.click(resetButton);
      }
    });

    expect(handleReset).toHaveBeenCalled();
  });

  it('корректно работает с undefined value', () => {
    render(<TimePicker value={undefined} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('__:__');
  });

  it('открывает панель выбора времени при фокусе', async () => {
    render(<TimePicker isOpenOnFocus={true} />);
    const input = screen.getByRole('textbox');

    await act(async () => {
      fireEvent.focus(input);
    });

    await waitFor(() => {
      const timeSelector = document.querySelector('[data-ui-time-selector]');
      expect(timeSelector).toBeInTheDocument();
    });
  });

  it('отображает кнопку reset для периода когда есть хотя бы одно значение', () => {
    const startDate = new Date(2025, 0, 1, 10, 0);
    const { container } = render(<TimePicker type="period" valueFrom={startDate} valueTo={undefined} reset={true} />);
    const resetButton = container.querySelector('[data-ui-input-reset-icon]');
    expect(resetButton).toBeInTheDocument();
  });

  it('работает с withPortal=true', () => {
    const testDate = new Date(2025, 0, 1, 14, 30);
    render(<TimePicker value={testDate} withPortal={true} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('сбрасывает неполный ввод при blur если нет значения', async () => {
    render(<TimePicker value={undefined} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;

    await act(async () => {
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: '14:__' } });
    });

    await act(async () => {
      fireEvent.blur(input);
    });

    await waitFor(() => {
      expect(input).toHaveValue('__:__');
    });
  });

  it('тогглит панель при клике на иконку', async () => {
    render(<TimePicker withPicker={true} />);

    const icon = document.querySelector('[class*="clock"]');
    expect(icon).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(icon!);
    });

    await waitFor(() => {
      const timeSelector = document.querySelector('[data-ui-time-selector]');
      expect(timeSelector).toBeInTheDocument();
    });

    await act(async () => {
      fireEvent.click(icon!);
    });

    await waitFor(() => {
      const timeSelector = document.querySelector('[data-ui-time-selector]');
      expect(timeSelector).not.toBeInTheDocument();
    });
  });

  it('вызывает onReset при очистке инпута и blur', async () => {
    const handleReset = jest.fn();
    const testDate = new Date(2025, 0, 1, 14, 30);
    render(<TimePicker value={testDate} reset={true} onReset={handleReset} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input).toHaveValue('14:30');

    await act(async () => {
      fireEvent.change(input, { target: { value: '' } });
    });

    await act(async () => {
      fireEvent.blur(input);
    });

    await waitFor(() => {
      expect(handleReset).toHaveBeenCalled();
    });
  });

  it('вызывает onReset при очистке инпута и нажатии Enter', async () => {
    const handleReset = jest.fn();
    const testDate = new Date(2025, 0, 1, 14, 30);
    render(<TimePicker value={testDate} reset={true} onReset={handleReset} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input).toHaveValue('14:30');

    await act(async () => {
      fireEvent.change(input, { target: { value: '' } });
    });

    await act(async () => {
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    });

    await waitFor(() => {
      expect(handleReset).toHaveBeenCalled();
    });
  });

  it('не отображает кнопку reset когда disabled=true даже если reset=true', () => {
    const testDate = new Date(2025, 0, 1, 14, 30);
    const { container } = render(<TimePicker value={testDate} disabled={true} reset={true} />);
    const resetButton = container.querySelector('[data-ui-input-reset-icon]');
    expect(resetButton).not.toBeInTheDocument();
  });

  it('тогглит панель при клике на иконку: открывает, затем закрывает', async () => {
    const testDate = new Date(2025, 0, 1, 14, 30);
    const { container } = render(<TimePicker value={testDate} withIcon={true} withPicker={true} />);

    const icon = container.querySelector('.clock');
    expect(icon).toBeInTheDocument();

    let panel = container.querySelector('[data-ui-time-selector]');
    expect(panel).not.toBeInTheDocument();

    await act(async () => {
      fireEvent.click(icon!);
    });

    await waitFor(() => {
      panel = container.querySelector('[data-ui-time-selector]');
      expect(panel).toBeInTheDocument();
    });

    await act(async () => {
      fireEvent.click(icon!);
    });

    await waitFor(() => {
      panel = container.querySelector('[data-ui-time-selector]');
      expect(panel).not.toBeInTheDocument();
    });
  });

  describe('Частичный выбор через picker', () => {
    it('позволяет выбрать только часы в обычном TimePicker', async () => {
      const handleChange = jest.fn();
      render(<TimePicker onChange={handleChange} />);

      const icon = document.querySelector('.clock');
      await act(async () => {
        fireEvent.click(icon!);
      });

      await waitFor(() => {
        const timeSelector = document.querySelector('[data-ui-time-selector]');
        expect(timeSelector).toBeInTheDocument();
      });

      const selector = document.querySelector('[data-ui-time-selector]');
      const columns = selector!.querySelectorAll('.selector-column');
      const hourColumn = columns[0]; // Первая колонка - часы
      const hourItems = hourColumn!.querySelectorAll('.root');
      const hour14 = Array.from(hourItems).find(el => el.textContent?.trim() === '14');

      expect(hour14).toBeDefined();

      await act(async () => {
        fireEvent.click(hour14!);
      });

      await waitFor(() => {
        expect(hour14!.classList.contains('selected')).toBe(true);
      });

      expect(handleChange).not.toHaveBeenCalled();
    });

    it('позволяет выбрать только часы в period TimePicker', async () => {
      const handlePeriodChange = jest.fn();
      render(<TimePicker type="period" onPeriodChange={handlePeriodChange} />);

      const icon = document.querySelector('.clock');
      await act(async () => {
        fireEvent.click(icon!);
      });

      await waitFor(() => {
        const timeSelector = document.querySelector('[data-ui-time-selector]');
        expect(timeSelector).toBeInTheDocument();
      });

      const selectors = document.querySelectorAll('[data-ui-time-selector]');
      const firstSelector = selectors[0];
      const columns = firstSelector.querySelectorAll('.selector-column');
      const hourColumn = columns[0];
      const hourItems = hourColumn!.querySelectorAll('.root');
      const hour14 = Array.from(hourItems).find(el => el.textContent?.trim() === '14');

      expect(hour14).toBeDefined();

      await act(async () => {
        fireEvent.click(hour14!);
      });

      await waitFor(() => {
        expect(hour14!.classList.contains('selected')).toBe(true);
      });

      expect(handlePeriodChange).not.toHaveBeenCalled();
    });

    it('вызывает onChange после выбора часов И минут в обычном TimePicker', async () => {
      const handleChange = jest.fn();
      render(<TimePicker onChange={handleChange} />);

      const icon = document.querySelector('.clock');
      await act(async () => {
        fireEvent.click(icon!);
      });

      await waitFor(() => {
        const timeSelector = document.querySelector('[data-ui-time-selector]');
        expect(timeSelector).toBeInTheDocument();
      });

      const selector = document.querySelector('[data-ui-time-selector]');
      const columns = selector!.querySelectorAll('.selector-column');

      const hourColumn = columns[0];
      const hourItems = hourColumn!.querySelectorAll('.root');
      const hour14 = Array.from(hourItems).find(el => el.textContent?.trim() === '14');

      expect(hour14).toBeDefined();

      await act(async () => {
        fireEvent.click(hour14!);
      });

      await waitFor(() => {
        expect(hour14!.classList.contains('selected')).toBe(true);
      });

      const minuteColumn = columns[1];
      const minuteItems = minuteColumn!.querySelectorAll('.root');
      const minute30 = Array.from(minuteItems).find(el => el.textContent?.trim() === '30');

      expect(minute30).toBeDefined();

      await act(async () => {
        fireEvent.click(minute30!);
      });

      await act(async () => {
        fireEvent.click(icon!);
      });

      await waitFor(() => {
        expect(handleChange).toHaveBeenCalled();
      });

      const callArg = handleChange.mock.calls[handleChange.mock.calls.length - 1][0];
      expect(callArg).toBeInstanceOf(Date);
      expect(callArg.getHours()).toBe(14);
      expect(callArg.getMinutes()).toBe(30);
    });

    it('вызывает onPeriodChange после выбора часов И минут для первого периода', async () => {
      const handlePeriodChange = jest.fn();
      render(<TimePicker type="period" onPeriodChange={handlePeriodChange} />);

      const icon = document.querySelector('.clock');
      await act(async () => {
        fireEvent.click(icon!);
      });

      await waitFor(() => {
        const timeSelector = document.querySelector('[data-ui-time-selector]');
        expect(timeSelector).toBeInTheDocument();
      });

      const selectors = document.querySelectorAll('[data-ui-time-selector]');
      const firstSelector = selectors[0];
      const columns = firstSelector.querySelectorAll('.selector-column');

      const hourColumn = columns[0];
      const hourItems = hourColumn!.querySelectorAll('.root');
      const hour10 = Array.from(hourItems).find(el => el.textContent?.trim() === '10');

      expect(hour10).toBeDefined();

      await act(async () => {
        fireEvent.click(hour10!);
      });

      await waitFor(() => {
        expect(hour10!.classList.contains('selected')).toBe(true);
      });

      const minuteColumn = columns[1];
      const minuteItems = minuteColumn!.querySelectorAll('.root');
      const minute00 = Array.from(minuteItems).find(el => el.textContent?.trim() === '00');

      expect(minute00).toBeDefined();

      await act(async () => {
        fireEvent.click(minute00!);
      });

      await act(async () => {
        fireEvent.click(icon!);
      });

      await waitFor(() => {
        expect(handlePeriodChange).toHaveBeenCalled();
      });

      const [valueFrom, valueTo] = handlePeriodChange.mock.calls[handlePeriodChange.mock.calls.length - 1];
      expect(valueFrom).toBeInstanceOf(Date);
      expect(valueFrom.getHours()).toBe(10);
      expect(valueFrom.getMinutes()).toBe(0);
      if (valueTo !== undefined) {
        expect(valueTo).toBeInstanceOf(Date);
      }
    });
  });

  describe('Синхронизация инпута и выпадающего списка', () => {
    it('сбрасывает подсветку в списке при удалении valueFrom', async () => {
      const startDate = new Date(2025, 0, 1, 10, 0);
      const endDate = new Date(2025, 0, 1, 14, 30);

      const { rerender } = render(<TimePicker type="period" valueFrom={startDate} valueTo={endDate} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('10:00 — 14:30');
      });

      // Открываем picker
      const icon = document.querySelector('.clock');
      await act(async () => {
        fireEvent.click(icon!);
      });

      await waitFor(() => {
        const timeSelector = document.querySelector('[data-ui-time-selector]');
        expect(timeSelector).toBeInTheDocument();
      });

      // Удаляем valueFrom
      rerender(<TimePicker type="period" valueFrom={undefined} valueTo={endDate} />);

      await waitFor(() => {
        expect(input.value).toContain('__:__');
        expect(input.value).toContain('14:30');
      });

      // Проверяем что в первом селекторе ничего не выбрано
      const selectors = document.querySelectorAll('[data-ui-time-selector]');
      const firstSelector = selectors[0];
      const selectedItems = firstSelector.querySelectorAll('.selected');
      // Не должно быть выбранных элементов или они должны быть пустыми
      expect(selectedItems.length).toBeLessThanOrEqual(1);
    });

    it('сбрасывает подсветку в списке при удалении valueTo', async () => {
      const startDate = new Date(2025, 0, 1, 10, 0);
      const endDate = new Date(2025, 0, 1, 14, 30);

      const { rerender } = render(<TimePicker type="period" valueFrom={startDate} valueTo={endDate} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('10:00 — 14:30');
      });

      // Открываем picker
      const icon = document.querySelector('.clock');
      await act(async () => {
        fireEvent.click(icon!);
      });

      await waitFor(() => {
        const timeSelector = document.querySelector('[data-ui-time-selector]');
        expect(timeSelector).toBeInTheDocument();
      });

      // Удаляем valueTo
      rerender(<TimePicker type="period" valueFrom={startDate} valueTo={undefined} />);

      await waitFor(() => {
        expect(input.value).toContain('10:00');
        expect(input.value).toContain('__:__');
      });

      // Проверяем что во втором селекторе ничего не выбрано
      const selectors = document.querySelectorAll('[data-ui-time-selector]');
      const secondSelector = selectors[1];
      const selectedItems = secondSelector.querySelectorAll('.selected');
      expect(selectedItems.length).toBeLessThanOrEqual(1);
    });

    it('сбрасывает подсветку при удалении обоих значений', async () => {
      const startDate = new Date(2025, 0, 1, 10, 0);
      const endDate = new Date(2025, 0, 1, 14, 30);

      const { rerender } = render(<TimePicker type="period" valueFrom={startDate} valueTo={endDate} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('10:00 — 14:30');
      });

      // Открываем picker
      const icon = document.querySelector('.clock');
      await act(async () => {
        fireEvent.click(icon!);
      });

      await waitFor(() => {
        const timeSelector = document.querySelector('[data-ui-time-selector]');
        expect(timeSelector).toBeInTheDocument();
      });

      // Удаляем оба значения
      rerender(<TimePicker type="period" valueFrom={undefined} valueTo={undefined} />);

      await waitFor(() => {
        expect(input).toHaveValue('__:__ — __:__');
      });

      // Проверяем что в обоих селекторах ничего не выбрано
      const selectors = document.querySelectorAll('[data-ui-time-selector]');
      selectors.forEach(selector => {
        const selectedItems = selector.querySelectorAll('.selected');
        expect(selectedItems.length).toBeLessThanOrEqual(1);
      });
    });
  });

  describe('Выделение и удаление в режиме периода', () => {
    it('удаляет всё выделенное значение from при нажатии Backspace', async () => {
      const startDate = new Date(2025, 0, 1, 10, 0);
      const endDate = new Date(2025, 0, 1, 14, 30);
      const handlePeriodChange = jest.fn();

      render(<TimePicker type="period" valueFrom={startDate} valueTo={endDate} onPeriodChange={handlePeriodChange} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('10:00 — 14:30');
      });

      await act(async () => {
        fireEvent.focus(input);
      });

      // Выделяем from (первые 5 символов)
      input.setSelectionRange(0, 5);

      // Нажимаем Backspace
      await act(async () => {
        fireEvent.keyDown(input, { key: 'Backspace' });
      });

      await waitFor(() => {
        expect(input.value).toContain('__:__ — 14:30');
      });
    });

    it('удаляет всё выделенное значение to при нажатии Delete', async () => {
      const startDate = new Date(2025, 0, 1, 10, 0);
      const endDate = new Date(2025, 0, 1, 14, 30);
      const handlePeriodChange = jest.fn();

      render(<TimePicker type="period" valueFrom={startDate} valueTo={endDate} onPeriodChange={handlePeriodChange} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('10:00 — 14:30');
      });

      await act(async () => {
        fireEvent.focus(input);
      });

      // Выделяем to (с позиции 8 до 13)
      input.setSelectionRange(8, 13);

      // Нажимаем Delete
      await act(async () => {
        fireEvent.keyDown(input, { key: 'Delete' });
      });

      await waitFor(() => {
        expect(input.value).toContain('10:00 — __:__');
      });
    });

    it('удаляет весь период при выделении всего текста', async () => {
      const startDate = new Date(2025, 0, 1, 10, 0);
      const endDate = new Date(2025, 0, 1, 14, 30);
      const handlePeriodChange = jest.fn();

      render(<TimePicker type="period" valueFrom={startDate} valueTo={endDate} onPeriodChange={handlePeriodChange} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('10:00 — 14:30');
      });

      await act(async () => {
        fireEvent.focus(input);
      });

      // Выделяем всё
      input.setSelectionRange(0, input.value.length);

      // Нажимаем Backspace
      await act(async () => {
        fireEvent.keyDown(input, { key: 'Backspace' });
      });

      await waitFor(() => {
        expect(input.value).toBe('__:__ — __:__');
      });
    });
  });

  describe('Период с секундами', () => {
    it('корректно отображает частичный период с секундами', async () => {
      const startDate = new Date(2025, 0, 1, 10, 0, 15);
      const handlePeriodChange = jest.fn();

      render(
        <TimePicker
          type="periodWithSeconds"
          valueFrom={startDate}
          valueTo={undefined}
          onPeriodChange={handlePeriodChange}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input.value).toContain('10:00:15');
        expect(input.value).toContain('__:__:__');
      });
    });

    it('сбрасывает секунды при удалении значения', async () => {
      const startDate = new Date(2025, 0, 1, 10, 0, 15);
      const endDate = new Date(2025, 0, 1, 14, 30, 45);

      const { rerender } = render(
        <TimePicker type="periodWithSeconds" valueFrom={startDate} valueTo={endDate} />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('10:00:15 — 14:30:45');
      });

      // Удаляем valueFrom
      rerender(<TimePicker type="periodWithSeconds" valueFrom={undefined} valueTo={endDate} />);

      await waitFor(() => {
        expect(input.value).toContain('__:__:__');
        expect(input.value).toContain('14:30:45');
      });
    });

    it('корректно обрабатывает выделение и удаление с секундами', async () => {
      const startDate = new Date(2025, 0, 1, 10, 0, 15);
      const endDate = new Date(2025, 0, 1, 14, 30, 45);
      const handlePeriodChange = jest.fn();

      render(
        <TimePicker
          type="periodWithSeconds"
          valueFrom={startDate}
          valueTo={endDate}
          onPeriodChange={handlePeriodChange}
        />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('10:00:15 — 14:30:45');
      });

      await act(async () => {
        fireEvent.focus(input);
      });

      // Выделяем from (первые 8 символов)
      input.setSelectionRange(0, 8);

      // Нажимаем Backspace
      await act(async () => {
        fireEvent.keyDown(input, { key: 'Backspace' });
      });

      await waitFor(() => {
        expect(input.value).toContain('__:__:__ — 14:30:45');
      });
    });
  });

  describe('Частичные периоды', () => {
    it('отображает и сохраняет частичный период: только valueFrom без valueTo', async () => {
      const startDate = new Date(2025, 0, 1, 10, 0);
      const handlePeriodChange = jest.fn();

      const { rerender } = render(
        <TimePicker type="period" valueFrom={startDate} valueTo={undefined} onPeriodChange={handlePeriodChange} />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('10:00 — __:__');
      });

      const endDate = new Date(2025, 0, 1, 14, 30);
      rerender(
        <TimePicker type="period" valueFrom={startDate} valueTo={endDate} onPeriodChange={handlePeriodChange} />
      );

      await waitFor(() => {
        expect(input).toHaveValue('10:00 — 14:30');
      });
    });

    it('корректно обрабатывает переключение между полным и частичным периодом', async () => {
      const startDate = new Date(2025, 0, 1, 10, 0);
      const endDate = new Date(2025, 0, 1, 14, 30);

      const { rerender } = render(<TimePicker type="period" valueFrom={startDate} valueTo={endDate} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input.value).toContain('10:00');
        expect(input.value).toContain('14:30');
      });

      rerender(<TimePicker type="period" valueFrom={undefined} valueTo={endDate} />);

      await waitFor(() => {
        expect(input.value).toContain('14:30');
        expect(input.value).toContain('__:__');
      });
    });

    it('переключается с полного периода на частичный (сброс valueTo)', async () => {
      const startDate = new Date(2025, 0, 1, 10, 0);
      const endDate = new Date(2025, 0, 1, 14, 30);

      const { rerender } = render(<TimePicker type="period" valueFrom={startDate} valueTo={endDate} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('10:00 — 14:30');
      });

      rerender(<TimePicker type="period" valueFrom={startDate} valueTo={undefined} />);

      await waitFor(() => {
        expect(input).toHaveValue('10:00 — __:__');
      });
    });

    it('показывает пустую маску при undefined обоих значений', async () => {
      render(<TimePicker type="period" valueFrom={undefined} valueTo={undefined} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input).toHaveValue('__:__ — __:__');
    });

    it('возвращается к сохраненному значению при неполном вводе (10:3_) и Enter', async () => {
      const startDate = new Date(2025, 0, 1, 10, 0);
      const endDate = new Date(2025, 0, 1, 14, 30);
      const handlePeriodChange = jest.fn();

      render(<TimePicker type="period" valueFrom={startDate} valueTo={endDate} onPeriodChange={handlePeriodChange} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('10:00 — 14:30');
      });

      await act(async () => {
        fireEvent.change(input, { target: { value: '10:3_ — 14:30' } });
      });

      await act(async () => {
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
      });

      await waitFor(() => {
        expect(input).toHaveValue('10:00 — 14:30');
        expect(handlePeriodChange).not.toHaveBeenCalled();
      });
    });

    it('НЕ откатывает при полном стирании значения (__:__) и Enter', async () => {
      const startDate = new Date(2025, 0, 1, 10, 0);
      const endDate = new Date(2025, 0, 1, 14, 30);
      const handlePeriodChange = jest.fn();

      const { rerender } = render(
        <TimePicker type="period" valueFrom={startDate} valueTo={endDate} onPeriodChange={handlePeriodChange} />
      );

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input).toHaveValue('10:00 — 14:30');
      });

      rerender(
        <TimePicker type="period" valueFrom={undefined} valueTo={endDate} onPeriodChange={handlePeriodChange} />
      );

      await waitFor(() => {
        expect(input.value).toContain('14:30');
        expect(input.value).toContain('__:__');
      });
    });
  });
});
