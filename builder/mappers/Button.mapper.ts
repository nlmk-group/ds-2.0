/**
 * Builder.io маппер для Button компонента из дизайн-системы ds-2.0
 * Связывает Figma компоненты с React компонентами
 */

import { Button } from '../../src/components/Button';
import { EButtonVariant, EButtonColor, EButtonSize } from '../../src/components/Button/enums';

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
