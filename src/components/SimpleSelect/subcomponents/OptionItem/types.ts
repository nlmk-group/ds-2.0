import { ReactNode, CSSProperties } from 'react';

export interface IOptionItemProps {
  value: string | number;
  label: string;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  isFocused?: boolean;
}
