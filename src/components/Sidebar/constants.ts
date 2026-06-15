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
 * Брейкпоинт (px), на котором и ниже Sidebar переключается в адаптивный режим.
 * Текущее значение соответствует планшетному гриду NLMK (800px). Держать синхронно с
 * $sidebar-adaptive-breakpoint в Sidebar.module.scss.
 */
export const SIDEBAR_ADAPTIVE_BREAKPOINT = 800;
