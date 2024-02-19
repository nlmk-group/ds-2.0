import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconListSheets24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M10.16 15.446a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z" />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m20.127 13.32-6.73 6.73a6.68 6.68 0 1 1-9.338-9.555l6.577-6.576.005.005a6.68 6.68 0 0 1 9.491 9.402l-.005-.005Zm-.94-1.18-6.85 6.85a5.18 5.18 0 1 1-2.653-8.744c1.022.203 1.927.656 2.64 1.37l.53.53 6.593-6.593a5.184 5.184 0 0 1-.26 6.587Zm-.811-7.637a5.179 5.179 0 0 0-6.826.637l-.008-.007L7.995 8.68a6.68 6.68 0 0 1 1.982.094 6.689 6.689 0 0 1 2.845 1.282l5.554-5.553Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconListSheets24;
