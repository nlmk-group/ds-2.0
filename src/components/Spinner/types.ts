export enum sizes {
  EXTRA_EXTRA_LARGE = 'xxl',
  EXTRA_LARGE = 'xl',
  LARGE = 'l',
  MEDIUM = 'm'
}

export interface ISpinner {
  size?: `${sizes}`;
  color?: string;
  bgColor?: string;
  children?: JSX.Element;
}
