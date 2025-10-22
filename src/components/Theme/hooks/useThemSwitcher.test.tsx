import { useThemeSwitcher } from '@components/Theme/hooks';
import { act, renderHook } from '@testing-library/react';

import { Themes } from '../types';

describe('useThemeSwitcher', () => {
  // Мокаем глобальные объекты, которые используются в хуке
  beforeEach(() => {
    sessionStorage.clear();
    jest.clearAllMocks();
  });

  test('should initialize with light theme by default', () => {
    const { result } = renderHook(() => useThemeSwitcher());
    expect(result.current.theme).toBe(Themes.LIGHT);
  });

  test('should initialize with theme from sessionStorage', () => {
    sessionStorage.setItem('theme', Themes.DARK);
    const { result } = renderHook(() => useThemeSwitcher());
    expect(result.current.theme).toBe(Themes.DARK);
  });

  test('should initialize with custom theme if provided', () => {
    const { result } = renderHook(() => useThemeSwitcher(Themes.DARK));
    expect(result.current.theme).toBe(Themes.DARK);
  });

  test('should prioritize customTheme over sessionStorage', () => {
    sessionStorage.setItem('theme', Themes.DARK);
    const { result } = renderHook(() => useThemeSwitcher(Themes.LIGHT));
    expect(result.current.theme).toBe(Themes.LIGHT);
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
    expect(sessionStorage.getItem('theme')).toBe(Themes.DARK);
  });

  test('should persist theme after toggle and re-initialization', () => {
    const { result: firstRender } = renderHook(() => useThemeSwitcher());

    act(() => {
      firstRender.current.toggleTheme();
    });
    expect(firstRender.current.theme).toBe(Themes.DARK);

    const { result: secondRender } = renderHook(() => useThemeSwitcher());

    expect(secondRender.current.theme).toBe(Themes.DARK);
  });
});
