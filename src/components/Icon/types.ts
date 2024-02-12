export type IconColor = 'action' | 'disabled' | 'error' | 'primary' | 'secondary' | 'inherit' | 'success' | 'warning';

export type TContainerSize = 32 | 24 | 16;

export interface TIconProps {
  name: string;
  color?: IconColor;
  htmlColor?: string;
  containerSize?: TContainerSize;
}

export interface IIconsProps {
  color?: IconColor;
  htmlColor?: string;
}

export interface ISvgProps {
  className?: string;
  onClick?: (e: any) => void;
  active?: boolean;
}

export type TIconsMap = {
  [key: number]: {
    [key: string]: any;
  };
};
