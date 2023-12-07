export type IconColor =
  | 'action'
  | 'disabled'
  | 'error'
  | 'primary'
  | 'secondary'
  | 'inherit'
  | 'success'
  | 'warning';

export type TIconProps =
  | {
      name: string;
      color?: IconColor;
      htmlColor?: string;
      containerSize?: 32;
    }
  | {
      name: string;
      color?: IconColor;
      htmlColor?: string;
      containerSize?: 24;
    }
  | {
      name: string;
      color?: IconColor;
      htmlColor?: string;
      containerSize?: 16;
    };

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
