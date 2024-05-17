import React, { FC } from 'react';
import clsx from 'clsx';
import { IAttachFiles } from './types';
import styles from './AttachFiles.module.scss';

const AttachFiles: FC<IAttachFiles> = ({
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
