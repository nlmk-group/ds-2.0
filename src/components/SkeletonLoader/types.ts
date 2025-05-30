/**
 * Типы анимации для компонента SkeletonLoader
 */
export enum ESkeletonAnimation {
  /** Анимация волны (по умолчанию) */
  wave = 'wave',
  /** Анимация пульсации */
  pulse = 'pulse'
}

/**
 * Свойства компонента SkeletonLoader
 */
export interface ISkeletonLoadingProps {
  /** Уникальный идентификатор компонента */
  id?: string;
  /** Дополнительные CSS классы */
  className?: string;
  /** Количество отображаемых элементов скелетона (по умолчанию: 1) */
  count?: number;
  /** Ширина элемента скелетона (по умолчанию: '200px') */
  width?: string;
  /** Высота элемента скелетона (по умолчанию: '100px') */
  height?: string;
  /** Тип анимации (по умолчанию: 'wave') */
  animation?: `${ESkeletonAnimation}`;
}
