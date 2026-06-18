import { renderHook } from '@testing-library/react';

import { useIsAdaptive } from './useIsAdaptive';

const mockMatchMedia = (matches: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: (query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn()
    })
  });
};

describe('useIsAdaptive', () => {
  test('возвращает true когда media query совпадает', () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => useIsAdaptive());
    expect(result.current).toBe(true);
  });

  test('возвращает false когда media query не совпадает', () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => useIsAdaptive());
    expect(result.current).toBe(false);
  });
});
