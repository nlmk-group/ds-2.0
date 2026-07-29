/**
 * Подменяет window.matchMedia для jsdom-тестов.
 *
 * jsdom не реализует matchMedia, поэтому компоненты и хуки, завязанные на media query
 * (useIsAdaptive, useIsMobile, useIsNarrowScreen), без подмены получают undefined.
 *
 * @param {boolean} matches - Значение, которое вернёт media query.
 */
export const mockMatchMedia = (matches: boolean): void => {
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
