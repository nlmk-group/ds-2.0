import { FC, ReactNode } from 'react';

import { ESegmentButtonGroupSizes } from './enums';

/**
 * Интерфейс свойств компонента `SegmentButtonGroup`
 */
export interface ISegmentButtonGroupProps {
  /** Кастомный класс для дополнительной стилизации группы кнопок */
  className?: string;
  /** Определяет размер кнопок в группе */
  size?: `${ESegmentButtonGroupSizes}`;
  /** Отключает все кнопки в группе */
  disabled?: boolean;
  /** Дочерние элементы – `SegmentButton` внутри `SegmentButtonGroup` */
  children: ReactNode;
}

/**
 * Интерфейс свойств компонента `SegmentButton`
 */
export interface ISegmentButtonProps {
  /** Кастомный класс для стилизации отдельной кнопки */
  className?: string;
  /** Индекс кнопки в группе (используется для определения `active`) */
  buttonIndex: number;
  /** Контент кнопки (иконки, текст, компоненты) */
  children: ReactNode;
  /** Обработчик клика по кнопке */
  onClick?: () => void;
  /** Функция переключения `active` состояния кнопки */
  toggleButton?: () => void;
}

/**
 * Основной компонент `SegmentButtonGroup`, который управляет состоянием группы кнопок.
 */
declare const SegmentButtonGroup: FC<ISegmentButtonGroupProps> & {
  /** Дочерний компонент кнопки внутри группы */
  SegmentButton: FC<ISegmentButtonProps>;
};

export default SegmentButtonGroup;
