/**
 * Builder.io маппер для Icon компонента из дизайн-системы ds-2.0
 * Связывает Figma компоненты с React компонентами
 */
import { Icon } from '../../src/components';
import { IconColor, TContainerSize } from '../../src/components/Icon/types';
import { getValidIconName, VALID_ICONS } from './utils/iconValidation';

/**
 * Популярные иконки для примеров и демонстрации
 * ⚠️ ВАЖНО: Используются только РЕАЛЬНО СУЩЕСТВУЮЩИЕ иконки из ds-2.0
 */
// Используем список из общей утилиты
const POPULAR_ICONS = VALID_ICONS;

/**
 * Конфигурация маппера для Icon компонента
 */
export const IconMapper = {
  // Ссылка на React компонент
  component: Icon,

  // Имя компонента для отображения в Builder.io
  name: 'Icon',

  // Описание компонента
  description: 'Компонент иконки с поддержкой различных размеров, цветов и стилей из дизайн-системы NLMK',

  // Категория компонента
  category: 'Media',

  // Маппинг свойств Figma к пропам React компонента
  properties: {
    // Имя иконки
    name: {
      type: 'string',
      enum: POPULAR_ICONS,
      default: 'IconAddPlusFilled24',
      figmaProperty: 'name',
      description: 'Имя иконки из библиотеки ds-2.0'
    },

    // Цвет иконки
    color: {
      type: 'string',
      enum: [
        'action',
        'disabled',
        'error',
        'primary',
        'secondary',
        'inherit',
        'success',
        'warning',
        'default'
      ] as IconColor[],
      default: 'inherit',
      figmaProperty: 'color',
      description: 'Цветовая схема иконки'
    },

    // Размер контейнера
    containerSize: {
      type: 'number',
      enum: [16, 24, 32] as TContainerSize[],
      default: 24,
      figmaProperty: 'containerSize',
      description: 'Размер контейнера иконки в пикселях'
    },

    // HTML цвет (кастомный)
    htmlColor: {
      type: 'string',
      default: '',
      figmaProperty: 'htmlColor',
      description: 'Кастомный HTML цвет иконки'
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
    name: 'IconAddPlusFilled24',
    color: 'inherit' as IconColor,
    containerSize: 24 as TContainerSize
  },

  // Функция трансформации свойств из Figma в пропы React компонента
  transformProps: (figmaProps: any) => {
    const transformedProps: any = {
      // Основные свойства
      name: figmaProps.name || 'IconAddPlusFilled24',
      color: figmaProps.color || 'inherit',
      containerSize: parseInt(figmaProps.containerSize) || 24,

      // Кастомный цвет
      htmlColor: figmaProps.htmlColor || undefined,

      // Дополнительные свойства
      className: figmaProps.className || undefined
    };

    // ⚠️ ВАЛИДАЦИЯ ИМЕНИ ИКОНКИ - используем общую утилиту
    transformedProps.name = getValidIconName(transformedProps.name, 'Icon');

    // Валидация размера контейнера
    if (![16, 24, 32].includes(transformedProps.containerSize)) {
      transformedProps.containerSize = 24;
    }

    // Валидация цвета
    const validColors: IconColor[] = [
      'action',
      'disabled',
      'error',
      'primary',
      'secondary',
      'inherit',
      'success',
      'warning',
      'default'
    ];
    if (!validColors.includes(transformedProps.color)) {
      transformedProps.color = 'inherit';
    }

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
      name: 'Default Icon',
      props: {
        name: 'IconAddPlusFilled24',
        color: 'inherit',
        containerSize: 24
      }
    },
    {
      name: 'Primary Icon',
      props: {
        name: 'IconCheckFilled24',
        color: 'primary',
        containerSize: 24
      }
    },
    {
      name: 'Error Icon',
      props: {
        name: 'IconErrorFilled24',
        color: 'error',
        containerSize: 24
      }
    },
    {
      name: 'Success Icon',
      props: {
        name: 'IconSuccessFilled24',
        color: 'success',
        containerSize: 24
      }
    },
    {
      name: 'Small Icon',
      props: {
        name: 'IconSearchFilled16',
        color: 'action',
        containerSize: 16
      }
    },
    {
      name: 'Large Icon',
      props: {
        name: 'IconSettingsAltFilled24',
        color: 'secondary',
        containerSize: 32
      }
    },
    {
      name: 'Custom Color Icon',
      props: {
        name: 'IconSuccessFilled24',
        htmlColor: '#ff4757',
        containerSize: 24
      }
    },
    {
      name: 'Navigation Icons',
      props: {
        name: 'IconArrowLeftFilled24',
        color: 'action',
        containerSize: 24
      }
    }
  ],

  // Популярные иконки для быстрого доступа
  popularIcons: POPULAR_ICONS,

  // Категории иконок (только реально существующие)
  iconCategories: {
    Actions: [
      'IconAddPlusFilled24',
      'IconEditPenFilled24',
      'IconDeleteBinFilled24',
      'IconCloseFilled24',
      'IconDoneCheckFilled24',
      'IconSearchFilled24'
    ],
    Navigation: [
      'IconArrowLeftFilled24',
      'IconArrowRightFilled24',
      'IconArrowUpFilled24',
      'IconArrowDownFilled24',
      'IconHomeOutlined24'
    ],
    Status: ['IconSuccessFilled24', 'IconWarningFilled24', 'IconInfoFilled24'],
    User: ['IconPersonFilled24', 'IconSuccessFilled24', 'IconSettingsAltFilled24']
  }
};

export default IconMapper;
