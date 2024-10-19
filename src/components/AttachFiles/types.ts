import { ReactElement, ReactNode } from 'react';
import { IFileProps } from './subcomponents/File/types'

export interface IAttachFilesProps {
  className?: string;
  title?: ReactElement<IFileProps, any>;
  children?: ReactNode[] | ReactNode;
}
