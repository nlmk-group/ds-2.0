import { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';

type TLinkOutput = string | ReactNode;

export interface ILink extends PropsWithChildren<{
  children: TLinkOutput;
}> {
  href: string;
  preventRedirect?: boolean;
  className?: string;
  size?: string;
  target?: string;
  disabled?: boolean;
  leftIcon?: React.JSX.Element | ReactNode;
  rightIcon?: React.JSX.Element | ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
