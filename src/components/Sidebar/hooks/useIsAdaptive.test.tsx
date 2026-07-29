import { mockMatchMedia } from '@components/declaration/mocks/matchMediaMock';
import { renderHook } from '@testing-library/react';

import { useIsAdaptive } from './useIsAdaptive';

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
