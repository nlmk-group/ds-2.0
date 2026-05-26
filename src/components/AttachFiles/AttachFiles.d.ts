import { FC, ReactNode } from 'react';

/**
 * Свойства компонента AttachFiles.
 * Интерфейс, описывающий свойства, принимаемые компонентом AttachFiles.
 */
export interface IAttachFilesProps {
  /** Дополнительный CSS-класс */
  className?: string;
  /** Заголовок секции прикреплённых файлов */
  title?: ReactNode;
  /** Дочерние элементы (список файлов) */
  children?: ReactNode[] | ReactNode;
}

declare const AttachFiles:FC<IAttachFilesProps>;

export default AttachFiles
