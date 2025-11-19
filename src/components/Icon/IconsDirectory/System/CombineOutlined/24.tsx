import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCombineOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7 17H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3ZM4 4h11v3H9a2 2 0 0 0-2 2v6H4V4Zm13 5h3v11H9v-3h6a2 2 0 0 0 2-2V9Zm-2 0v6H9V9h6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCombineOutlined24;
