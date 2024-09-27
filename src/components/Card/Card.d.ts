import { PropsWithChildren } from 'react';

import { sizesMapping } from '@components/declaration';

import { EIndicatorStatusMapping, EOrientationMapping } from './enums';

/**
 * Тип ориентации компонента.
 * Перечисление всех возможных типов ориентации компонента.
 */
export type OrientationType = `${EOrientationMapping}`;

/**
 * Тип размера индикатора.
 * Перечисление всех возможных размеров индикатора.
 */
export type IndicatorSizeType = `${sizesMapping}`;

/**
 * Тип статуса индикатора.
 * Перечисление всех возможных статусов индикатора.
 */
export type IndicatorStatusType = `${EIndicatorStatusMapping}`;

/**
 * Свойства компонента Card.
 * Интерфейс, описывающий свойства, принимаемые компонентом Card.
 */
export interface ICardProps extends PropsWithChildren<any> {
  /** Ориентация компонента */
  orientation?: OrientationType;
  /** Размер индикатора */
  indicatorSize?: IndicatorSizeType;
  /** Статус индикатора */
  indicatorStatus?: IndicatorStatusType;
  /** Дополнительные CSS классы */
  className?: string;
}

/**
 * Компонент Card для отображения карточек информации.
 * Компонент Card принимает свойства, описанные в ICardProps, и отображает карточку информации.
 */
declare const Card: FC<ICardProps> & { componentType?: string };

export default Card;
