interface IMatchMediaController {
  /**
   * Меняет результат media query и уведомляет подписчиков, имитируя ресайз окна.
   */
  setMatches: (next: boolean) => void;
}

/**
 * Подменяет window.matchMedia для jsdom-тестов.
 *
 * jsdom не реализует matchMedia, поэтому компоненты и хуки, завязанные на media query
 * (useIsAdaptive, useIsMobile, useIsNarrowScreen), без подмены получают undefined.
 *
 * @param {boolean} matches - Стартовое значение, которое вернёт media query.
 * @returns {IMatchMediaController} Контроллер для смены значения на лету.
 */
export const mockMatchMedia = (matches: boolean): IMatchMediaController => {
  const listeners = new Set<() => void>();
  let currentMatches = matches;

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: (query: string) => ({
      get matches() {
        return currentMatches;
      },
      media: query,
      onchange: null,
      addEventListener: (_: string, listener: () => void) => listeners.add(listener),
      removeEventListener: (_: string, listener: () => void) => listeners.delete(listener),
      addListener: (listener: () => void) => listeners.add(listener),
      removeListener: (listener: () => void) => listeners.delete(listener),
      dispatchEvent: () => false
    })
  });

  return {
    setMatches: (next: boolean) => {
      currentMatches = next;
      listeners.forEach(listener => listener());
    }
  };
};
