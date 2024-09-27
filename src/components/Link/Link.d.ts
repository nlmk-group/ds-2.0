import { FC, PropsWithChildren, ReactNode } from 'react';

export enum targetMapping {
  blank = '_blank',
  self = '_self',
  parent = '_parent',
  top = '_top'
}

export enum sizeMapping {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  sub1 = 'sub1',
  sub2 = 'sub2',
  sub3 = 'sub3',
  body = 'body',
  body1 = 'body1',
  body2 = 'body2',
  caption = 'caption'
}

export interface ILink extends PropsWithChildren<{
  children: ReactNode;
  href: string;
  preventRedirect?: boolean;
  className?: string;
  size?: keyof typeof sizeMapping;
  target?: keyof typeof targetMapping;
  disabled?: boolean;
  leftIcon?: JSX.Element | ReactNode;
  rightIcon?: JSX.Element | ReactNode;
}> {}

declare const Link: FC<ILink>;

export default Link;
