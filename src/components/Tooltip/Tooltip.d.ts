import { ReactNode  } from 'react';
import { ETooltipBehaviorType, ETooltipPlacementType, ETooltipSizes, ETooltipType } from './enums';

/**
 * Свойства компонента Tooltip.
 * Интерфейс, описывающий свойства, принимаемые компонентом Tooltip.
 */
export interface ITooltipProps {
  /** Дополнительный CSS-класс */
  className?: string;
  /** Размер тултипа */
  size?: `${ETooltipSizes}`;
  /** Тип тултипа */
  type?: `${ETooltipType}`;
  /** Дополнительный CSS-класс для всплывающего окна тултипа */
  popupClassName?: string;
  /** Поведение тултипа (наведение, клик, фокус) */
  behavior?: `${ETooltipBehaviorType}`;
  /** Размещение тултипа относительно элемента */
  placement?: `${ETooltipPlacementType}`;
  /** Контент, вокруг которого будет отображаться тултип */
  children: ReactNode;
  /** Кастомный рендер функции для содержимого тултипа */
  render?: ReactNode;
  /** Заголовок тултипа */
  title?: string;
  /** Описание тултипа */
  description?: string;
  /** Определяет, является ли тултип кликабельным */
  clickable?: boolean;
  /** Флаг отображения тултипа */
  isOpen?: boolean;
  /** Задержка появления тултипа **/
  delayShow?: number;
  /** Задержка исчезания тултипа **/
  delayHide?: number;
  /** Определяет следование за позицией курсора **/
  float?: boolean;
}

/**
 * Перечисление типов поведения тултипа.
 * Описывает возможные значения поведения тултипа.
 */
export enum ETooltipBehaviorType {
  hover = 'hover',
  click = 'click',
  focus = 'focus'
}

/**
 * Перечисление размеров тултипа.
 * Описывает возможные размеры тултипа.
 */
export enum ETooltipSizes {
  default = 'normal',
  compact = 'compact'
}

/**
 * Перечисление типов тултипа.
 */
export enum ETooltipType {
  default = 'default',
  inverse = 'inverse'
}

/**
 * Перечисление размещений тултипа.
 * Описывает возможные размещения тултипа.
 */
export enum ETooltipPlacementType {
  top = 'top',
  'top-start' = 'top-start',
  'top-end' = 'top-end',
  bottom = 'bottom',
  'bottom-start' = 'bottom-start',
  'bottom-end' = 'bottom-end',
  left = 'left',
  'left-start' = 'left-start',
  'left-end' = 'left-end',
  right = 'right',
  'right-start' = 'right-start',
  'right-end' = 'right-end'
}

/**
 * Компонент Tooltip предоставляет всплывающие подсказки с различными вариантами поведения и размещения.
 */
declare const Tooltip: React.FC<ITooltipProps> & { componentType?: string };

export default Tooltip;
