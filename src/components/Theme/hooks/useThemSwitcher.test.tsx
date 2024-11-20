import { useThemeSwitcher } from '@components/Theme/hooks';
import { act, renderHook } from '@testing-library/react';

import { Themes } from '../types';

describe('useThemeSwitcher', () => {
  // Мокаем глобальные объекты, которые используются в хуке
  beforeAll(() => {
    Object.defineProperty(window, 'sessionStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn()
      },
      writable: true
    });
  });

  test('should initialize with light theme by default', () => {
    const { result } = renderHook(() => useThemeSwitcher());
    expect(result.current.theme).toBe(Themes.LIGHT);
  });

  test('should initialize with custom theme if provided', () => {
    const { result } = renderHook(() => useThemeSwitcher(Themes.DARK));
    expect(result.current.theme).toBe(Themes.DARK);
  });

  test('should toggle theme', () => {
    const { result } = renderHook(() => useThemeSwitcher());
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe(Themes.DARK);
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe(Themes.LIGHT);
  });

  test('should set theme in sessionStorage', () => {
    const { result } = renderHook(() => useThemeSwitcher());
    act(() => {
      result.current.toggleTheme();
    });
    // Сделал так чтобы сохранить правило eslint и игнорировать только эту строку
    expect(window.sessionStorage.setItem).toHaveBeenCalledWith('theme', Themes.DARK);
  });
});
