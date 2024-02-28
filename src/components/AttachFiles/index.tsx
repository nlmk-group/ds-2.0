import React, { FC } from 'react';

import { IAttachFiles } from './types';

import styles from './AttachFiles.module.scss';

const AttachFiles: FC<IAttachFiles> = ({
  title,
  children,
  className
}) => {
  return (
    <div className={className} data-testid="ATTACHFILES_WRAPPER">
      <div className={styles.title} data-testid="ATTACHFILES_TITLE">
        {title}
      </div>
      <div className={styles[title ? 'list-with-title' : 'list']} data-testid="ATTACHFILES_LIST">
        {children}
      </div>
    </div>
  );
};

export default AttachFiles;
