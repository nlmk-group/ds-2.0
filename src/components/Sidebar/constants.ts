export const COLLAPSE_TEXTS = {
  ru: {
    collapse: 'Свернуть',
    expand: 'Развернуть'
  },
  en: {
    collapse: 'Collapse',
    expand: 'Expand'
  }
} as const;

/**
 * Брейкпоинт (px), ниже которого Sidebar переключается в адаптивный режим.
 * Значение и семантика «строго меньше» повторяют $bp-md и миксин down()
 * из src/components/_adaptive.scss.
 */
export const SIDEBAR_ADAPTIVE_BREAKPOINT = 768;
