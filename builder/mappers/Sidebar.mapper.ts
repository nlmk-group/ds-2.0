/**
 * Builder.io маппер для Sidebar компонента из дизайн-системы ds-2.0
 * Связывает Figma компоненты с React компонентами
 */
import { Sidebar } from '../../src/components';
import { ESidebarOrientationMapping, ESidebarVariantMapping } from '../../src/components/Sidebar/enums';

/**
 * Конфигурация маппера для Sidebar компонента
 */
export const SidebarMapper = {
  // Ссылка на React компонент
  component: Sidebar,

  // Имя компонента для отображения в Builder.io
  name: 'Sidebar',

  // Описание компонента
  description: 'Компонент бокового меню с навигацией, пользовательским контролем и настройками из дизайн-системы NLMK',

  // Категория компонента
  category: 'Navigation',

  // Маппинг свойств Figma к пропам React компонента
  properties: {
    // Вариант сайдбара
    variant: {
      type: 'string',
      enum: Object.values(ESidebarVariantMapping),
      default: ESidebarVariantMapping.default,
      figmaProperty: 'variant',
      description: 'Вариант отображения сайдбара'
    },

    // Ориентация
    orientation: {
      type: 'string',
      enum: Object.values(ESidebarOrientationMapping),
      default: ESidebarOrientationMapping.vertical,
      figmaProperty: 'orientation',
      description: 'Ориентация сайдбара'
    },

    // Текущий путь для активного элемента
    currentPath: {
      type: 'string',
      default: '/',
      figmaProperty: 'currentPath',
      description: 'Текущий путь для определения активного элемента меню'
    },

    // Системное имя
    systemName: {
      type: 'string',
      default: '',
      figmaProperty: 'systemName',
      description: 'Название системы для отображения в меню'
    },

    // Имя пользователя
    userName: {
      type: 'string',
      default: '',
      figmaProperty: 'userName',
      description: 'Имя пользователя'
    },

    // Фамилия пользователя
    userSurname: {
      type: 'string',
      default: '',
      figmaProperty: 'userSurname',
      description: 'Фамилия пользователя'
    },

    // Статус авторизации
    isLoggedIn: {
      type: 'boolean',
      default: false,
      figmaProperty: 'isLoggedIn',
      description: 'Флаг авторизации пользователя'
    },

    // Разрешить избранное
    allowFavorites: {
      type: 'boolean',
      default: false,
      figmaProperty: 'allowFavorites',
      description: 'Разрешить функционал избранного'
    },

    // Меню развернуто по умолчанию
    defaultMenuOpen: {
      type: 'boolean',
      default: false,
      figmaProperty: 'defaultMenuOpen',
      description: 'Меню развернуто по умолчанию'
    },

    // Показать оверлей
    overlay: {
      type: 'boolean',
      default: false,
      figmaProperty: 'overlay',
      description: 'Показать оверлей при открытом подменю'
    },

    // Показать пользовательский контроль
    isShowUserControl: {
      type: 'boolean',
      default: true,
      figmaProperty: 'isShowUserControl',
      description: 'Показать блок управления пользователем'
    },

    // CSS класс для кастомизации
    className: {
      type: 'string',
      default: '',
      figmaProperty: 'className',
      description: 'Дополнительный CSS класс'
    }
  },

  // Значения по умолчанию для всех пропов
  defaultProps: {
    variant: ESidebarVariantMapping.default,
    orientation: ESidebarOrientationMapping.vertical,
    currentPath: '/',
    systemName: '',
    userName: '',
    userSurname: '',
    isLoggedIn: false,
    allowFavorites: false,
    defaultMenuOpen: false,
    overlay: false,
    isShowUserControl: true
  },

  // Функция трансформации свойств из Figma в пропы React компонента
  transformProps: (figmaProps: any) => {
    const transformedProps: any = {
      // Основные свойства
      variant: figmaProps.variant || ESidebarVariantMapping.default,
      orientation: figmaProps.orientation || ESidebarOrientationMapping.vertical,
      currentPath: figmaProps.currentPath || '/',

      // Системная информация
      systemName: figmaProps.systemName || '',

      // Пользовательские данные
      userName: figmaProps.userName || '',
      userSurname: figmaProps.userSurname || '',
      isLoggedIn: Boolean(figmaProps.isLoggedIn),

      // Настройки поведения
      allowFavorites: Boolean(figmaProps.allowFavorites),
      defaultMenuOpen: Boolean(figmaProps.defaultMenuOpen),
      overlay: Boolean(figmaProps.overlay),
      isShowUserControl: figmaProps.isShowUserControl !== undefined ? Boolean(figmaProps.isShowUserControl) : true,

      // Дополнительные свойства
      className: figmaProps.className || undefined
    };

    // Удаляем undefined значения
    Object.keys(transformedProps).forEach(key => {
      if (transformedProps[key] === undefined) {
        delete transformedProps[key];
      }
    });

    return transformedProps;
  },

  // Примеры использования для документации
  examples: [
    {
      name: 'Default Sidebar',
      props: {
        variant: ESidebarVariantMapping.default,
        orientation: ESidebarOrientationMapping.vertical,
        currentPath: '/',
        systemName: 'NLMK System'
      }
    },
    {
      name: 'Burger Sidebar',
      props: {
        variant: ESidebarVariantMapping.burger,
        orientation: ESidebarOrientationMapping.vertical,
        currentPath: '/dashboard',
        systemName: 'Dashboard'
      }
    },
    {
      name: 'Horizontal Sidebar',
      props: {
        variant: ESidebarVariantMapping.default,
        orientation: ESidebarOrientationMapping.horizontal,
        currentPath: '/reports',
        systemName: 'Reports System'
      }
    },
    {
      name: 'Sidebar with User',
      props: {
        variant: ESidebarVariantMapping.default,
        orientation: ESidebarOrientationMapping.vertical,
        currentPath: '/profile',
        systemName: 'User Portal',
        userName: 'Иван',
        userSurname: 'Петров',
        isLoggedIn: true,
        isShowUserControl: true
      }
    },
    {
      name: 'Sidebar with Favorites',
      props: {
        variant: ESidebarVariantMapping.default,
        orientation: ESidebarOrientationMapping.vertical,
        currentPath: '/favorites',
        systemName: 'NLMK Portal',
        allowFavorites: true,
        userName: 'Анна',
        userSurname: 'Сидорова',
        isLoggedIn: true
      }
    },
    {
      name: 'Expanded Sidebar',
      props: {
        variant: ESidebarVariantMapping.default,
        orientation: ESidebarOrientationMapping.vertical,
        currentPath: '/expanded',
        systemName: 'Admin Panel',
        defaultMenuOpen: true,
        overlay: true,
        userName: 'Администратор',
        isLoggedIn: true
      }
    }
  ]
};

export default SidebarMapper;
