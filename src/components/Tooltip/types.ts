import { ReactNode } from 'react';

import { ETooltipBehaviorType, ETooltipPlacementType, ETooltipSizes, ETooltipType } from './enums';

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

