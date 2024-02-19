import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKovsh24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        stroke={htmlColor || 'currentColor'}
        strokeWidth=".6"
        d="M12.75 12.146a2.002 2.002 0 0 0-1.5 0v-8.56h1.5v1.25h8.249v1.5h-1.25V19.52a3.25 3.25 0 0 1-3.25 3.25H7.51a3.25 3.25 0 0 1-3.25-3.25V6.335H3.01v-1.5h4v1.5H5.76V19.52c0 .966.784 1.75 1.75 1.75h8.99a1.75 1.75 0 0 0 1.75-1.75V6.335h-5.5v4.246a3.502 3.502 0 0 1 2.522 4.662 3.5 3.5 0 0 1-6.715-.611c-.137-.752-.057-1.196.198-1.915l1.34.676c-.095.607-.062.824-.062.968a2 2 0 1 0 2.717-2.215Z"
      />
    </svg>
  );
};

export default IconKovsh24;
