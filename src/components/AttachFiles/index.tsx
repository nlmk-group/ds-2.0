import React, { FC } from 'react';
import clsx from 'clsx';
import { IAttachFilesProps } from './types';
import styles from './AttachFiles.module.scss';

/**
 * Компонент AttachFiles предоставляет форматированный список прикреплённых файлов.
 *
 * @param {object} props - Свойства компонента AttachFiles.
 * @param {ReactElement<IFile, any>} [props.title] - Заголовок для секции прикреплённых файлов.
 * @param {ReactNode[] | ReactNode} [props.children] - Дочерние элементы (список файлов).
 * @param {string} [props.className] - Дополнительный CSS-класс.
 * @returns {JSX.Element} - Компонент AttachFiles.
 */

const AttachFiles: FC<IAttachFilesProps> = ({
  title,
  children,
  className
}) => {
  return (
    <div className={clsx(styles['list-center'], className)} data-testid="ATTACHFILES_WRAPPER">
      <div data-testid="ATTACHFILES_TITLE">
        {title}
      </div>
      <div className={clsx(title && styles['list-with-title'])} data-testid="ATTACHFILES_LIST">
        {children}
      </div>
    </div>
  );
};

export default AttachFiles;
