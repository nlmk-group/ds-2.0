import { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type TSpacingProps = string | number;

export interface IBox extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * Дочерние элементы для отображения внутри Box
   */
  children?: ReactNode;

  /**
   * Базовый padding для всех сторон. Числа автоматически конвертируются в px
   */
  p?: TSpacingProps;

  /**
   * Горизонтальный padding (left, right). Перезаписывает p для левой и правой стороны
   */
  px?: TSpacingProps;

  /**
   * Вертикальный padding (top, bottom). Перезаписывает p для верхней и нижней стороны
   */
  py?: TSpacingProps;

  /**
   * Padding сверху. Наивысший приоритет для верхней стороны
   */
  pt?: TSpacingProps;

  /**
   * Padding справа. Наивысший приоритет для правой стороны
   */
  pr?: TSpacingProps;

  /**
   * Padding снизу. Наивысший приоритет для нижней стороны
   */
  pb?: TSpacingProps;

  /**
   * Padding слева. Наивысший приоритет для левой стороны
   */
  pl?: TSpacingProps;

  /**
   * Цвет фона контейнера
   */
  background?: string;

  /**
   * Высота контейнера
   */
  height?: TSpacingProps;

  /**
   * Ширина контейнера
   */
  width?: TSpacingProps;

  /**
   * Максимальная ширина контейнера
   */
  maxWidth?: TSpacingProps;

  /**
   * CSS свойство border
   */
  border?: string;

  /**
   * Цвет текста
   */
  color?: string;

  /**
   * Радиус скругления углов
   */
  borderRadius?: TSpacingProps;

  /**
   * CSS свойство display
   */
  display?: CSSProperties['display'];

  /**
   * Направление flex контейнера
   */
  flexDirection?: CSSProperties['flexDirection'];

  /**
   * Выравнивание по главной оси
   */
  justifyContent?: CSSProperties['justifyContent'];

  /**
   * Выравнивание по поперечной оси
   */
  alignItems?: CSSProperties['alignItems'];

  /**
   * Перенос flex элементов
   */
  flexWrap?: CSSProperties['flexWrap'];

  /**
   * Промежуток между дочерними элементами
   */
  gap?: TSpacingProps;

  /**
   * Дополнительные inline стили (наивысший приоритет)
   */
  st?: CSSProperties;

  /**
   * Дополнительные CSS классы
   */
  className?: string;
}
