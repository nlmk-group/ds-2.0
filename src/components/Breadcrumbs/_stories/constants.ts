import { targetMapping } from './enums';

export const BASIC_COMPONENT_USE = 'Breadcrumbs по умолчанию';
export const CUSTOM_WIDTH = 'Breadcrumbs с заданной шириной';
export const DIFFERENT_TARGET = 'Breadcrumbs с разными target';

export const breadcrumbsLinks = [
  { href: '/about', label: 'О компании' },
  { href: '/business-model', label: 'Бизнес-модель' },
  { href: '/production', label: 'Производство' },
  { href: '/production/steel', label: 'Сталеплавильное производство' },
  { href: '/production/steel/converters', label: 'Конвертерный цех' }
];

export const targetLinks = [
  { href: 'https://nlmk.com/ru/about/', label: `${targetMapping._blank}`, target: targetMapping._blank },
  { href: 'https://nlmk.shop', label: `${targetMapping._parent}`, target: targetMapping._parent },
  { href: 'https://career.nlmk.com', label: `${targetMapping._self}`, target: targetMapping._self },
  { href: 'https://lipetsk.nlmk.com', label: `${targetMapping._top}`, target: targetMapping._top }
];
