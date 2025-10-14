import { CSSProperties, ReactNode } from 'react';

/**
 * @enum {string} sizesMappingOptionItem
 * Размеры для OptionItem (аналогичны размерам Input)
 */
export enum sizesMappingOptionItem {
  m = 'm',
  s = 's',
  xs = 'xs'
}

export type TOptionItemSize = `${sizesMappingOptionItem}`;

export interface IOptionItemProps {
  value: string | number;
  label: string;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  isFocused?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
  size?: TOptionItemSize;
}
