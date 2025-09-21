/**
 * Builder.io маппер для Header компонента из дизайн-системы ds-2.0
 * Связывает Figma компоненты с React компонентами
 */
import { Header } from '../../src/components';

/**
 * Конфигурация маппера для Header компонента
 */
export const HeaderMapper = {
  // Ссылка на React компонент
  component: Header,

  // Имя компонента для отображения в Builder.io
  name: 'Header',

  // Описание компонента
  description: 'Компонент заголовка страницы с кнопками управления и навигацией из дизайн-системы NLMK',

  // Категория компонента
  category: 'Layout',

  // Маппинг свойств Figma к пропам React компонента
  properties: {
    // Заголовок
    title: {
      type: 'string',
      default: 'Заголовок страницы',
      figmaProperty: 'title',
      description: 'Основной заголовок страницы'
    },

    // Кнопка "Назад"
    showBack: {
      type: 'boolean',
      default: false,
      figmaProperty: 'showBack',
      description: 'Показать кнопку "Назад"'
    },

    // Кнопка "Избранное"
    showFavorite: {
      type: 'boolean',
      default: false,
      figmaProperty: 'showFavorite',
      description: 'Показать кнопку "Избранное"'
    },

    // Состояние избранного
    isFavorite: {
      type: 'boolean',
      default: false,
      figmaProperty: 'isFavorite',
      description: 'Элемент находится в избранном'
    },

    // Кнопка "Уведомления"
    showNotification: {
      type: 'boolean',
      default: false,
      figmaProperty: 'showNotification',
      description: 'Показать кнопку "Уведомления"'
    },

    // Количество уведомлений
    notificationAmount: {
      type: 'number',
      default: 0,
      figmaProperty: 'notificationAmount',
      description: 'Количество непрочитанных уведомлений'
    },

    // Кнопка "Сообщения"
    showMessage: {
      type: 'boolean',
      default: false,
      figmaProperty: 'showMessage',
      description: 'Показать кнопку "Сообщения"'
    },

    // Кнопка "Видео"
    showVideo: {
      type: 'boolean',
      default: false,
      figmaProperty: 'showVideo',
      description: 'Показать кнопку "Видео"'
    },

    // Кнопка "Печать"
    showPrint: {
      type: 'boolean',
      default: false,
      figmaProperty: 'showPrint',
      description: 'Показать кнопку "Печать"'
    },

    // Показать дату
    showDate: {
      type: 'boolean',
      default: false,
      figmaProperty: 'showDate',
      description: 'Показать текущую дату'
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
    title: 'Заголовок страницы',
    showBack: false,
    showFavorite: false,
    isFavorite: false,
    showNotification: false,
    notificationAmount: 0,
    showMessage: false,
    showVideo: false,
    showPrint: false,
    showDate: false
  },

  // Функция трансформации свойств из Figma в пропы React компонента
  transformProps: (figmaProps: any) => {
    const transformedProps: any = {
      // Основные свойства
      title: figmaProps.title || 'Заголовок страницы',

      // Кнопки управления
      showBack: Boolean(figmaProps.showBack),
      showFavorite: Boolean(figmaProps.showFavorite),
      isFavorite: Boolean(figmaProps.isFavorite),
      showNotification: Boolean(figmaProps.showNotification),
      showMessage: Boolean(figmaProps.showMessage),
      showVideo: Boolean(figmaProps.showVideo),
      showPrint: Boolean(figmaProps.showPrint),
      showDate: Boolean(figmaProps.showDate),

      // Числовые значения
      notificationAmount: parseInt(figmaProps.notificationAmount) || 0,

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
      name: 'Simple Header',
      props: {
        title: 'Главная страница'
      }
    },
    {
      name: 'Header with Back Button',
      props: {
        title: 'Детали проекта',
        showBack: true
      }
    },
    {
      name: 'Header with Favorite',
      props: {
        title: 'Избранная страница',
        showFavorite: true,
        isFavorite: true
      }
    },
    {
      name: 'Header with Notifications',
      props: {
        title: 'Уведомления',
        showNotification: true,
        notificationAmount: 5
      }
    },
    {
      name: 'Full Header',
      props: {
        title: 'Полный заголовок',
        showBack: true,
        showFavorite: true,
        isFavorite: false,
        showNotification: true,
        notificationAmount: 3,
        showMessage: true,
        showVideo: true,
        showPrint: true,
        showDate: true
      }
    },
    {
      name: 'Header with Date',
      props: {
        title: 'Отчеты',
        showDate: true,
        showPrint: true
      }
    }
  ]
};

export default HeaderMapper;
