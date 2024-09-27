import { FC } from 'react';
import {
  EIconsAccordion,
  ESizesAccordion,
  EVariantsAccordion
} from './enums';
import { TAccordionItem } from './subcomponents/AccordionItem/types';

/**
 * Свойства компонента Accordion.
 * Интерфейс, описывающий свойства, принимаемые компонентом Accordion.
 */
export interface IAccordionProps {
  /** Массив элементов аккордеона */
  items: TAccordionItem[];
  /** Иконка в начале заголовка аккордеона */
  startIcon?: `${EIconsAccordion}` | null;
  /** Иконка в конце заголовка аккордеона */
  endIcon?: `${EIconsAccordion}` | null;
  /** Размер аккордеона */
  size?: `${ESizesAccordion}`;
  /** Вариант внешнего вида аккордеона */
  variant?: `${EVariantsAccordion}`;
  /** Дополнительный CSS-класс */
  className?: string;
  /** Разрешает одновременное разворачивание нескольких элементов */
  multipleExpanded?: boolean;
  /** Отключает взаимодействие с аккордеоном */
  disabled?: boolean;
}

/**
 * Перечисление типов иконок для аккордеона.
 * Описывает возможные значения иконок, используемых в компоненте Accordion.
 */
export enum EIconsAccordion {
  plus = 'plus',
  arrow = 'arrow'
}

/**
 * Перечисление размеров аккордеона.
 * Описывает возможные размеры компонента Accordion.
 */
export enum ESizesAccordion {
  xs = 'xs',
  s = 's',
  m = 'm'
}

/**
 * Перечисление вариантов внешнего вида аккордеона.
 * Описывает возможные стили компонента Accordion.
 */
export enum EVariantsAccordion {
  default = 'default',
  paper = 'paper'
}

/**
 * Компонент Accordion предоставляет интерфейс аккордеона с возможностью управления
 * состоянием открытия/закрытия его элементов.
 */
declare const Accordion: FC<IAccordionProps>;

export default Accordion;
