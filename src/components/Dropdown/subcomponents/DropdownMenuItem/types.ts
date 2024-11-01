import { ReactNode } from 'react';

export interface IDropdownMenuItemProps {
  onClick?: (value: string) => void;
  value: string;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}
