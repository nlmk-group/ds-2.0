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
 * Брейкпоинт (px), ниже которого Sidebar переключается в мобильный режим.
 * Держать синхронно с $sidebar-mobile-breakpoint в Sidebar.module.scss.
 */
export const SIDEBAR_MOBILE_BREAKPOINT = 650;
