import { CSSProperties, ReactNode } from 'react';

/**
 * Интерфейс пропсов для компонента Suffix
 */
export interface ISuffixProps {
  /** Дополнительный CSS класс для стилизации */
  className?: string;
  /** Содержимое суффикса (любой ReactNode) */
  children: ReactNode;
  /** Инлайн-стили для компонента */
  style?: CSSProperties;
}
