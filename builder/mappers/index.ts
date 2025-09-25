/**
 * Индексный файл для всех Builder.io мапперов дизайн-системы ds-2.0
 * Экспортирует все доступные мапперы компонентов
 */

export { ButtonMapper } from './Button.mapper';
export { InputMapper } from './Input.mapper';
export { HeaderMapper } from './Header.mapper';
export { SidebarMapper } from './Sidebar.mapper';
export { IconMapper } from './Icon.mapper';

/**
 * Объект со всеми мапперами для удобного доступа
 */
export const componentMappers = {
  Button: () => import('./Button.mapper').then(m => m.ButtonMapper),
  Input: () => import('./Input.mapper').then(m => m.InputMapper),
  Header: () => import('./Header.mapper').then(m => m.HeaderMapper),
  Sidebar: () => import('./Sidebar.mapper').then(m => m.SidebarMapper),
  Icon: () => import('./Icon.mapper').then(m => m.IconMapper)
};

/**
 * Список всех доступных компонентов для маппинга
 */
export const availableComponents = ['Button', 'Input', 'Header', 'Sidebar', 'Icon'] as const;

/**
 * Тип для доступных компонентов
 */
export type AvailableComponent = typeof availableComponents[number];

/**
 * Метаданные о дизайн-системе
 */
export const designSystemMeta = {
  name: '@nlmk/ds-2.0',
  version: '2.25.13',
  description: 'Дизайн-система NLMK версии 2.0',
  author: 'NLMK IT',
  repository: 'https://github.com/nlmk-group/ds-2.0',
  documentation: 'https://storybook.ds-2.0.nlmk.com/',

  categories: {
    'Form Controls': ['Button', 'Input', 'Checkbox', 'Radio', 'Switch'],
    'Typography': ['Typography'],
    'Layout': ['Header', 'Card', 'Box', 'Grid', 'Divider'],
    'Navigation': ['Sidebar', 'Breadcrumbs', 'Tabs', 'Pagination'],
    'Feedback': ['Alert', 'Snackbar', 'Modal', 'Tooltip'],
    'Data Display': ['Avatar', 'Badge', 'Chip', 'Table'],
    'Media': ['Icon', 'ImagePicture']
  }
};
