import { PropsWithChildren } from 'react';

export interface IAttachFiles extends PropsWithChildren<any> {
  children: JSX.Element[];
  title?: JSX.Element;
}
