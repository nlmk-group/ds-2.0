import React from 'react';
import * as ReactDOM from 'react-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { IComboBoxOption } from './types';

import { Provider } from './context';
import ComboBoxDropdown from './subcomponents/ComboBoxDropdown';
import InputComboBox from './subcomponents/InputComboBox';

// Мок для usePopper
jest.mock('react-popper', () => ({
  usePopper: () => ({
    styles: { popper: {} },
    attributes: { popper: {} },
    update: jest.fn()
  })
}));

describe('src/components/ComboBox', () => {
  describe('InputComboBox', () => {
    const mockInputRef = { current: null };
    const mockOnFocusSearchInput = jest.fn();
    const mockOnOpenClick = jest.fn();
    const mockOnCloseClick = jest.fn();

    const defaultProps = {
      inputRef: mockInputRef,
      isDisabled: false,
      isOpen: false,
      label: 'Тестовый лейбл',
      onFocusSearchInput: mockOnFocusSearchInput,
      onOpenClick: mockOnOpenClick,
      onCloseClick: mockOnCloseClick
    };

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('должен корректно рендериться с базовыми пропсами', () => {
      render(
        <Provider>
          <InputComboBox {...defaultProps} />
        </Provider>
      );

      expect(screen.getByLabelText('Тестовый лейбл')).toBeInTheDocument();
    });

    it('должен быть отключен, когда isDisabled=true', () => {
      render(
        <Provider>
          <InputComboBox {...defaultProps} isDisabled={true} />
        </Provider>
      );

      expect(screen.getByLabelText('Тестовый лейбл')).toBeDisabled();
    });

    it('должен отображать иконку вниз, когда isOpen=false', () => {
      render(
        <Provider>
          <InputComboBox {...defaultProps} isOpen={false} />
        </Provider>
      );

      const iconContainer = screen.getByLabelText('Тестовый лейбл').parentElement?.querySelector('.inputIcon');
      expect(iconContainer).toBeInTheDocument();
    });

    it('должен отображать иконку вверх, когда isOpen=true', () => {
      render(
        <Provider>
          <InputComboBox {...defaultProps} isOpen={true} />
        </Provider>
      );

      const iconContainer = screen.getByLabelText('Тестовый лейбл').parentElement?.querySelector('.inputIcon');
      expect(iconContainer).toBeInTheDocument();
    });

    it('должен вызывать onFocusSearchInput при фокусе на инпуте', () => {
      render(
        <Provider>
          <InputComboBox {...defaultProps} />
        </Provider>
      );

      fireEvent.focus(screen.getByLabelText('Тестовый лейбл'));
      expect(mockOnFocusSearchInput).toHaveBeenCalledTimes(1);
    });

    it('должен вызывать onOpenClick при клике на иконку, когда isOpen=false', () => {
      render(
        <Provider>
          <InputComboBox {...defaultProps} isOpen={false} />
        </Provider>
      );

      const iconContainer = screen.getByLabelText('Тестовый лейбл').parentElement?.querySelector('.inputIcon');
      if (iconContainer) {
        fireEvent.click(iconContainer);
      }
      expect(mockOnOpenClick).toHaveBeenCalledTimes(1);
    });

    it('должен вызывать onCloseClick при клике на иконку, когда isOpen=true', () => {
      render(
        <Provider>
          <InputComboBox {...defaultProps} isOpen={true} />
        </Provider>
      );

      const iconContainer = screen.getByLabelText('Тестовый лейбл').parentElement?.querySelector('.inputIcon');
      if (iconContainer) {
        fireEvent.click(iconContainer);
      }
      expect(mockOnCloseClick).toHaveBeenCalledTimes(1);
    });

    it('должен корректно отображать значение, когда передан один элемент', () => {
      const value: IComboBoxOption[] = [{ id: '1', label: 'Опция 1' }];

      render(
        <Provider>
          <InputComboBox {...defaultProps} value={value} />
        </Provider>
      );

      expect(screen.getByLabelText('Тестовый лейбл')).toHaveValue('Опция 1');
    });

    it('должен корректно отображать "Выбрано N", когда передано несколько элементов', () => {
      const value: IComboBoxOption[] = [
        { id: '1', label: 'Опция 1' },
        { id: '2', label: 'Опция 2' }
      ];

      render(
        <Provider>
          <InputComboBox {...defaultProps} value={value} />
        </Provider>
      );

      expect(screen.getByLabelText('Тестовый лейбл')).toHaveValue('Выбрано 2');
    });

    it('должен корректно отображать перечисление элементов, когда displayEnumerated=true', () => {
      const value: IComboBoxOption[] = [
        { id: '1', label: 'Опция 1' },
        { id: '2', label: 'Опция 2' }
      ];

      render(
        <Provider>
          <InputComboBox {...defaultProps} value={value} displayEnumerated={true} />
        </Provider>
      );

      expect(screen.getByLabelText('Тестовый лейбл')).toHaveValue('Опция 1, Опция 2');
    });
  });

  describe('ComboBoxDropdown', () => {
    // Мок для createPortal
    let portalSpy: jest.SpyInstance;

    beforeAll(() => {
      // Используем jest.spyOn вместо прямого переопределения
      // @ts-expect-error - игнорируем типы для мока
      portalSpy = jest.spyOn(ReactDOM, 'createPortal').mockImplementation((element, _container) => {
        return element;
      });
    });

    afterAll(() => {
      portalSpy.mockRestore();
    });

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('должен корректно рендериться с базовыми пропсами', () => {
      render(
        <Provider>
          <ComboBoxDropdown label="Тестовый дропдаун">
            <div data-testid="dropdown-content">Содержимое дропдауна</div>
          </ComboBoxDropdown>
        </Provider>
      );

      expect(screen.getByLabelText('Тестовый дропдаун')).toBeInTheDocument();
      expect(screen.queryByTestId('dropdown-content')).not.toBeInTheDocument();
    });

    it('должен открывать дропдаун при клике на инпут', async () => {
      render(
        <Provider>
          <ComboBoxDropdown label="Тестовый дропдаун">
            <div data-testid="dropdown-content">Содержимое дропдауна</div>
          </ComboBoxDropdown>
        </Provider>
      );

      const input = screen.getByLabelText('Тестовый дропдаун');
      fireEvent.focus(input);

      expect(await screen.findByTestId('dropdown-content')).toBeInTheDocument();
    });

    it('должен быть отключен, когда isDisabled=true', () => {
      render(
        <Provider>
          <ComboBoxDropdown label="Тестовый дропдаун" isDisabled={true}>
            <div data-testid="dropdown-content">Содержимое дропдауна</div>
          </ComboBoxDropdown>
        </Provider>
      );

      expect(screen.getByLabelText('Тестовый дропдаун')).toBeDisabled();
    });

    it('должен отображать tooltipDescription, когда он передан как строка', () => {
      render(
        <Provider>
          <ComboBoxDropdown label="Тестовый дропдаун" tooltipDescription="Тестовая подсказка">
            <div data-testid="dropdown-content">Содержимое дропдауна</div>
          </ComboBoxDropdown>
        </Provider>
      );

      const tooltipWrapper = document.querySelector('.tooltipWrapper');
      expect(tooltipWrapper).toBeInTheDocument();
    });

    it('должен отображать tooltipDescription, когда он передан как массив', () => {
      const tooltipItems: IComboBoxOption[] = [
        { id: 't1', label: 'Подсказка 1' },
        { id: 't2', label: 'Подсказка 2' }
      ];

      render(
        <Provider>
          <ComboBoxDropdown label="Тестовый дропдаун" tooltipDescription={tooltipItems}>
            <div data-testid="dropdown-content">Содержимое дропдауна</div>
          </ComboBoxDropdown>
        </Provider>
      );

      const tooltipWrapper = document.querySelector('.tooltipWrapper');
      expect(tooltipWrapper).toBeInTheDocument();
    });
  });

describe('initialValue', () => {
  const mockInputRef = { current: null };
  const mockOnFocusSearchInput = jest.fn();
  const mockOnOpenClick = jest.fn();
  const mockOnCloseClick = jest.fn();

  const defaultProps = {
    inputRef: mockInputRef,
    isDisabled: false,
    isOpen: false,
    label: 'Тестовый лейбл',
    onFocusSearchInput: mockOnFocusSearchInput,
    onOpenClick: mockOnOpenClick,
    onCloseClick: mockOnCloseClick
  };

  const testOptions: IComboBoxOption[] = [
    { id: '1', label: 'Опция 1' },
    { id: '2', label: 'Опция 2' }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('должен устанавливать initialValue при монтировании', () => {
    render(
      <Provider>
        <InputComboBox 
          {...defaultProps} 
          initialValue={[testOptions[0]]} 
        />
      </Provider>
    );

    const input = screen.getByDisplayValue('Опция 1');
    expect(input).toBeInTheDocument();
  });

  it('должен устанавливать несколько значений в initialValue', () => {
    render(
      <Provider>
        <InputComboBox 
          {...defaultProps} 
          initialValue={testOptions} 
        />
      </Provider>
    );

    const input = screen.getByDisplayValue('Выбрано 2');
    expect(input).toBeInTheDocument();
  });

  it('не должен устанавливать значение при пустом initialValue', () => {
    render(
      <Provider>
        <InputComboBox 
          {...defaultProps} 
          initialValue={[]} 
        />
      </Provider>
    );

    const input = screen.getByDisplayValue('');
    expect(input).toBeInTheDocument();
  });
});

  describe('Функции автофокуса и автораскрытия', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      jest.clearAllTimers();
    });

    afterEach(() => {
      jest.runOnlyPendingTimers();
      jest.useRealTimers();
    });

    describe('autoFocusSearch', () => {
      it('должен передавать autoFocusSearch=true в children через cloneElement', async () => {
        const TestChild = ({ autoFocusSearch, isDropdownOpen }: any) => (
          <div data-testid="test-child">
            <span data-testid="auto-focus-value">{String(autoFocusSearch)}</span>
            <span data-testid="dropdown-open">{String(isDropdownOpen)}</span>
          </div>
        );

        render(
          <Provider>
            <ComboBoxDropdown autoFocusSearch={true}>
              <TestChild />
            </ComboBoxDropdown>
          </Provider>
        );

        const input = screen.getByRole('textbox');
        fireEvent.focus(input);

        expect(await screen.findByTestId('auto-focus-value')).toHaveTextContent('true');
        expect(await screen.findByTestId('dropdown-open')).toHaveTextContent('true');
      });

      it('должен передавать autoFocusSearch=false по умолчанию', async () => {
        const TestChild = ({ autoFocusSearch }: any) => (
          <div data-testid="test-child">
            <span data-testid="auto-focus-value">{String(autoFocusSearch)}</span>
          </div>
        );

        render(
          <Provider>
            <ComboBoxDropdown>
              <TestChild />
            </ComboBoxDropdown>
          </Provider>
        );

        const input = screen.getByRole('textbox');
        fireEvent.focus(input);

        expect(await screen.findByTestId('auto-focus-value')).toHaveTextContent('false');
      });

      it('должен работать с фейковыми таймерами для автофокуса', () => {
        jest.useFakeTimers();

        const mockFocus = jest.fn();
        const MockSearch = ({ autoFocusSearch, isDropdownOpen }: any) => {
          const inputRef = React.useRef({ focus: mockFocus });

          React.useEffect(() => {
            if (autoFocusSearch && isDropdownOpen && inputRef.current) {
              const timeoutId = setTimeout(() => {
                inputRef.current?.focus();
              }, 100);
              return () => clearTimeout(timeoutId);
            }
          }, [autoFocusSearch, isDropdownOpen]);

          return <div data-testid="mock-search">Search Mock</div>;
        };

        render(
          <Provider>
            <ComboBoxDropdown autoFocusSearch={true}>
              <MockSearch />
            </ComboBoxDropdown>
          </Provider>
        );

        const input = screen.getByRole('textbox');
        fireEvent.focus(input);

        expect(mockFocus).not.toHaveBeenCalled();

        jest.advanceTimersByTime(100);

        expect(mockFocus).toHaveBeenCalledTimes(1);
      });
    });

    describe('autoExpandOnSearch', () => {
      it('должен передавать autoExpandOnSearch=true в children', async () => {
        const TestChild = ({ autoExpandOnSearch, isDropdownOpen }: any) => (
          <div data-testid="test-child">
            <span data-testid="auto-expand-value">{String(autoExpandOnSearch)}</span>
            <span data-testid="dropdown-open">{String(isDropdownOpen)}</span>
          </div>
        );

        render(
          <Provider>
            <ComboBoxDropdown autoExpandOnSearch={true}>
              <TestChild />
            </ComboBoxDropdown>
          </Provider>
        );

        const input = screen.getByRole('textbox');
        fireEvent.focus(input);

        expect(await screen.findByTestId('auto-expand-value')).toHaveTextContent('true');
        expect(await screen.findByTestId('dropdown-open')).toHaveTextContent('true');
      });

      it('должен передавать autoExpandOnSearch=false по умолчанию', async () => {
        const TestChild = ({ autoExpandOnSearch }: any) => (
          <div data-testid="test-child">
            <span data-testid="auto-expand-value">{String(autoExpandOnSearch)}</span>
          </div>
        );

        render(
          <Provider>
            <ComboBoxDropdown>
              <TestChild />
            </ComboBoxDropdown>
          </Provider>
        );

        const input = screen.getByRole('textbox');
        fireEvent.focus(input);

        expect(await screen.findByTestId('auto-expand-value')).toHaveTextContent('false');
      });
    });

    describe('комбинированные функции', () => {
      it('должен корректно передавать оба пропса одновременно', async () => {
        const TestChild = ({ autoFocusSearch, autoExpandOnSearch, isDropdownOpen }: any) => (
          <div data-testid="test-child">
            <span data-testid="auto-focus">{String(autoFocusSearch)}</span>
            <span data-testid="auto-expand">{String(autoExpandOnSearch)}</span>
            <span data-testid="is-open">{String(isDropdownOpen)}</span>
          </div>
        );

        render(
          <Provider>
            <ComboBoxDropdown autoFocusSearch={true} autoExpandOnSearch={true}>
              <TestChild />
            </ComboBoxDropdown>
          </Provider>
        );

        const input = screen.getByRole('textbox');
        fireEvent.focus(input);

        expect(await screen.findByTestId('auto-focus')).toHaveTextContent('true');
        expect(await screen.findByTestId('auto-expand')).toHaveTextContent('true');
        expect(await screen.findByTestId('is-open')).toHaveTextContent('true');
      });

      it('должен корректно работать с isDropdownOpen состоянием', async () => {
        const TestChild = ({ isDropdownOpen }: any) => (
          <div data-testid="test-child">
            <span data-testid="is-open">{String(isDropdownOpen)}</span>
          </div>
        );

        render(
          <Provider>
            <ComboBoxDropdown>
              <TestChild />
            </ComboBoxDropdown>
          </Provider>
        );

        expect(screen.queryByTestId('test-child')).not.toBeInTheDocument();

        const input = screen.getByRole('textbox');
        fireEvent.focus(input);

        expect(await screen.findByTestId('is-open')).toHaveTextContent('true');
      });
    });
  });
});
