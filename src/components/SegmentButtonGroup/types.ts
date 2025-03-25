import { ReactNode, SyntheticEvent } from 'react';

import { ESegmentButtonGroupSizes } from './enums';

/**
 * Интерфейс пропсов для компонента `SegmentButtonGroup`
 */
export interface ISegmentButtonGroupProps {
  /**
   * Кастомный класс для дополнительной стилизации группы кнопок.
   */
  className?: string;

  /**
   * Размер кнопок в группе.
   * Возможные значения: `s`, `m`
   */
  size?: `${ESegmentButtonGroupSizes}`;

  /**
   * Флаг, отключающий всю кнопку
   */
  disabled?: boolean;

  /**
   * Дочерние элементы – кнопки внутри группы.
   */
  children: ReactNode;
}

/**
 * Интерфейс для пропсов компонента кнопки `SegmentButton`
 */
export interface ISegmentButtonProps {
  /**
   * Кастомный класс для кнопки.
   */
  className?: string;

  /**
   * Индекс кнопки в группе (для управления `active` состоянием).
   */
  buttonIndex?: number;

  /**
   * Контент кнопки (иконки, текст и т. д.).
   */
  children: ReactNode;

  /**
   * Коллбэк, вызываемый при клике на кнопку.
   */
  onClick?: (e: SyntheticEvent) => void;

  /**
   * Функция для переключения `active` состояния кнопки.
   */
  toggleButton?: () => void;
}
