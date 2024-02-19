import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBackSpaceOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M28.5 5H9.75c-.863 0-1.537.428-1.987 1.076L1 16l6.763 9.912C8.213 26.56 8.886 27 9.75 27H28.5c1.375 0 2.5-1.1 2.5-2.444V7.444C31 6.1 29.875 5 28.5 5Zm0 19.556H9.837L4 16l5.825-8.556H28.5v17.112Zm-10-6.833-4.488 4.388-1.762-1.723L16.738 16l-4.488-4.388 1.762-1.723 4.488 4.388 4.488-4.388 1.762 1.723L20.262 16l4.488 4.388-1.762 1.723-4.488-4.388Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconBackSpaceOutlined32;
