/**
 * Builder.io маппер для Button компонента из дизайн-системы ds-2.0
 * Связывает Figma компоненты с React компонентами
 */
import React from 'react';

import { Button } from '../../src/components';
import { EButtonColor, EButtonSize, EButtonVariant } from '../../src/components/Button/enums';
import { getValidIconName } from './utils/iconValidation';

/**
 * Конфигурация маппера для Button компонента
 */
export const ButtonMapper = {
  component: Button,

  name: 'Button',

  description: 'Компонент кнопки с различными вариантами стилей, размеров и цветов из дизайн-системы NLMK',

  category: 'Form Controls',

  properties: {
    variant: {
      type: 'string',
      enum: Object.values(EButtonVariant),
      default: EButtonVariant.primary,
      figmaProperty: 'variant',
      description: 'Вариант стиля кнопки'
    },

    color: {
      type: 'string',
      enum: Object.values(EButtonColor),
      default: EButtonColor.brand,
      figmaProperty: 'color',
      description: 'Цветовая схема кнопки'
    },

    size: {
      type: 'string',
      enum: Object.values(EButtonSize),
      default: EButtonSize.m,
      figmaProperty: 'size',
      description: 'Размер кнопки'
    },

    children: {
      type: 'string',
      default: 'Button',
      figmaProperty: 'text',
      description: 'Текст кнопки'
    },

    disabled: {
      type: 'boolean',
      default: false,
      figmaProperty: 'disabled',
      description: 'Отключенное состояние кнопки'
    },

    type: {
      type: 'string',
      enum: ['button', 'submit', 'reset'],
      default: 'button',
      figmaProperty: 'type',
      description: 'HTML тип кнопки'
    },

    // Иконка для кнопки-иконки
    iconButton: {
      type: 'string',
      default: '',
      figmaProperty: 'iconButton',
      description: 'Имя иконки для кнопки-иконки (например: IconAddPlusFilled24)'
    },

    // Иконка в начале кнопки
    startIcon: {
      type: 'string',
      default: '',
      figmaProperty: 'startIcon',
      description: 'Имя иконки в начале кнопки'
    },

    // Иконка в конце кнопки
    endIcon: {
      type: 'string',
      default: '',
      figmaProperty: 'endIcon',
      description: 'Имя иконки в конце кнопки'
    },

    className: {
      type: 'string',
      default: '',
      figmaProperty: 'className',
      description: 'Дополнительный CSS класс'
    }
  },

  defaultProps: {
    variant: EButtonVariant.primary,
    color: EButtonColor.brand,
    size: EButtonSize.m,
    children: 'Button',
    disabled: false,
    type: 'button'
  },

  transformProps: (figmaProps: any) => {
    const transformedProps: any = {
      variant: figmaProps.variant || EButtonVariant.primary,
      color: figmaProps.color || EButtonColor.brand,
      size: figmaProps.size || EButtonSize.m,

      children: figmaProps.text || figmaProps.children || 'Button',

      disabled: Boolean(figmaProps.disabled),

      type: figmaProps.type || 'button',

      // Иконки с валидацией имен
      iconButton: figmaProps.iconButton
        ? React.createElement('Icon', {
            name: getValidIconName(figmaProps.iconButton, 'Button')
          })
        : undefined,
      startIcon: figmaProps.startIcon
        ? React.createElement('Icon', {
            name: getValidIconName(figmaProps.startIcon, 'Button')
          })
        : undefined,
      endIcon: figmaProps.endIcon
        ? React.createElement('Icon', {
            name: getValidIconName(figmaProps.endIcon, 'Button')
          })
        : undefined,

      className: figmaProps.className || undefined
    };

    Object.keys(transformedProps).forEach(key => {
      if (transformedProps[key] === undefined) {
        delete transformedProps[key];
      }
    });

    return transformedProps;
  },

  examples: [
    {
      name: 'Primary Button',
      props: {
        variant: EButtonVariant.primary,
        color: EButtonColor.brand,
        size: EButtonSize.m,
        children: 'Primary Button'
      }
    },
    {
      name: 'Secondary Button',
      props: {
        variant: EButtonVariant.secondary,
        color: EButtonColor.grey,
        size: EButtonSize.m,
        children: 'Secondary Button'
      }
    },
    {
      name: 'Small Button',
      props: {
        variant: EButtonVariant.primary,
        color: EButtonColor.brand,
        size: EButtonSize.s,
        children: 'Small Button'
      }
    },
    {
      name: 'Disabled Button',
      props: {
        variant: EButtonVariant.primary,
        color: EButtonColor.brand,
        size: EButtonSize.m,
        children: 'Disabled Button',
        disabled: true
      }
    }
  ]
};

export default ButtonMapper;
