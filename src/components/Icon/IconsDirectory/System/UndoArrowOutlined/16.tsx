import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUndoArrowOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M3.229 9.405h2.388v1.3H1.042V6.163h1.3v2.414c3.07-4.24 10.263-3.668 12.222 1.718l-1.128.41c-1.634-4.494-7.716-4.927-10.207-1.3Z"
      />
    </svg>
  );
};

export default IconUndoArrowOutlined16;
