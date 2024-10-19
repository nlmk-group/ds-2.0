import { FC, ReactElement, ReactNode } from 'react';
import { IFile } from './subcomponents/File/types';

/**
 * Свойства компонента AttachFiles.
 * Интерфейс, описывающий свойства, принимаемые компонентом AttachFiles.
 */
export interface IAttachFilesProps {
  /** Дополнительный CSS-класс */
  className?: string;
  /** Заголовок для секции прикреплённых файлов */
  title?: ReactElement<IFile, any>;
  /** Дочерние элементы (список файлов) */
  children?: ReactNode[] | ReactNode;
}

declare const AttachFiles:FC<IAttachFilesProps>;

export default AttachFiles