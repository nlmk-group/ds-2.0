/**
 * Builder.io маппер для Input компонента из дизайн-системы ds-2.0
 * Связывает Figma компоненты с React компонентами
 */
import React from 'react';

import { Input } from '../../src/components';
import { customInputColors, sizesMappingInput } from '../../src/components/declaration';
import { getValidIconName } from './utils/iconValidation';

/**
 * Конфигурация маппера для Input компонента
 */
export const InputMapper = {
  // Ссылка на React компонент
  component: Input,

  // Имя компонента для отображения в Builder.io
  name: 'Input',

  // Описание компонента
  description: 'Компонент поля ввода с различными размерами, цветами и состояниями из дизайн-системы NLMK',

  // Категория компонента
  category: 'Form Controls',

  // Маппинг свойств Figma к пропам React компонента
  properties: {
    // Размер инпута
    size: {
      type: 'string',
      enum: Object.values(sizesMappingInput),
      default: sizesMappingInput.m,
      figmaProperty: 'size',
      description: 'Размер поля ввода'
    },

    // Цвет инпута
    color: {
      type: 'string',
      enum: Object.values(customInputColors),
      default: customInputColors.default,
      figmaProperty: 'color',
      description: 'Цветовая схема поля ввода'
    },

    // Значение инпута
    value: {
      type: 'string',
      default: '',
      figmaProperty: 'value',
      description: 'Значение поля ввода'
    },

    // Плейсхолдер
    placeholder: {
      type: 'string',
      default: '',
      figmaProperty: 'placeholder',
      description: 'Текст плейсхолдера'
    },

    // Лейбл
    label: {
      type: 'string',
      default: '',
      figmaProperty: 'label',
      description: 'Текст метки поля ввода'
    },

    // Состояние disabled
    disabled: {
      type: 'boolean',
      default: false,
      figmaProperty: 'disabled',
      description: 'Отключенное состояние поля ввода'
    },

    // Обязательное поле
    required: {
      type: 'boolean',
      default: false,
      figmaProperty: 'required',
      description: 'Обязательность заполнения поля'
    },

    // Многострочный режим
    multiline: {
      type: 'boolean',
      default: false,
      figmaProperty: 'multiline',
      description: 'Многострочный режим (textarea)'
    },

    // Вспомогательный текст
    helperText: {
      type: 'string',
      default: '',
      figmaProperty: 'helperText',
      description: 'Вспомогательный текст под полем ввода'
    },

    // Имя поля
    name: {
      type: 'string',
      default: '',
      figmaProperty: 'name',
      description: 'Имя поля для форм'
    },

    // Иконка поля ввода
    icon: {
      type: 'string',
      default: '',
      figmaProperty: 'icon',
      description: 'Имя иконки для поля ввода (например: IconSearchFilled24)'
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
    size: sizesMappingInput.m,
    color: customInputColors.default,
    value: '',
    placeholder: '',
    disabled: false,
    required: false,
    multiline: false
  },

  // Функция трансформации свойств из Figma в пропы React компонента
  transformProps: (figmaProps: any) => {
    const transformedProps: any = {
      // Основные свойства
      size: figmaProps.size || sizesMappingInput.m,
      color: figmaProps.color || customInputColors.default,

      // Контент
      value: figmaProps.value || figmaProps.defaultValue || '',
      placeholder: figmaProps.placeholder || '',
      label: figmaProps.label || '',
      helperText: figmaProps.helperText || '',
      name: figmaProps.name || '',

      // Состояния
      disabled: Boolean(figmaProps.disabled),
      required: Boolean(figmaProps.required),
      multiline: Boolean(figmaProps.multiline),

      // Иконка
      icon: figmaProps.icon
        ? React.createElement('Icon', {
            name: getValidIconName(figmaProps.icon, 'Input')
          })
        : undefined,

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
      name: 'Default Input',
      props: {
        size: sizesMappingInput.m,
        color: customInputColors.default,
        placeholder: 'Введите текст'
      }
    },
    {
      name: 'Input with Label',
      props: {
        size: sizesMappingInput.m,
        color: customInputColors.default,
        label: 'Имя пользователя',
        placeholder: 'Введите имя'
      }
    },
    {
      name: 'Error Input',
      props: {
        size: sizesMappingInput.m,
        color: customInputColors.error,
        label: 'Email',
        value: 'invalid-email',
        helperText: 'Введите корректный email адрес'
      }
    },
    {
      name: 'Success Input',
      props: {
        size: sizesMappingInput.m,
        color: customInputColors.success,
        label: 'Пароль',
        helperText: 'Пароль соответствует требованиям'
      }
    },
    {
      name: 'Multiline Input',
      props: {
        size: sizesMappingInput.m,
        color: customInputColors.default,
        label: 'Комментарий',
        placeholder: 'Введите комментарий',
        multiline: true
      }
    },
    {
      name: 'Small Disabled Input',
      props: {
        size: sizesMappingInput.s,
        color: customInputColors.default,
        value: 'Недоступно для редактирования',
        disabled: true
      }
    }
  ]
};

export default InputMapper;
