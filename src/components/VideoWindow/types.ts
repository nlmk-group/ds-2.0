import { CSSProperties, ReactNode } from 'react';

/**
 * Тип, описывающий начальную позицию окна при перетаскивании
 */
export type TDraggableStartPosition = {
  /** Координата X начальной позиции */
  x: number;
  /** Координата Y начальной позиции */
  y: number;
};

/**
 * Свойства компонента VideoWindow
 */
export type TVideoWindowProps = {
  /** URL видео для воспроизведения */
  videoUrl: string;
  /** Уникальный идентификатор видео элемента */
  id?: string;
  /** Заголовок окна или кастомный компонент заголовка */
  title?: string | ReactNode;
  /** Флаг автоматического воспроизведения видео */
  autoPlay?: boolean;
  /** Функция обработки закрытия окна */
  onClose: () => void;
  /** Дополнительные CSS стили */
  style?: CSSProperties;
  /** Дополнительный CSS класс */
  className?: string;
  /** Флаг возможности изменения размера окна */
  resizable?: boolean;
  /** Флаг возможности перетаскивания окна */
  draggable?: boolean;
  /** Начальная позиция окна при перетаскивании */
  draggableStartPosition?: TDraggableStartPosition;
};
