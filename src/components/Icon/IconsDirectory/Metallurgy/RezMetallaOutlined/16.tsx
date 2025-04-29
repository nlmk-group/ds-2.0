import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRezMetallaOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3.5 3A1.5 1.5 0 0 1 5 1.5h6A1.5 1.5 0 0 1 12.5 3v2h-1V3a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v2h-1V3ZM12.5 13a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 13v-2h1v2a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-2h1v2ZM3.592 7H2v2h3.796L4.345 7.341A1 1 0 0 0 3.592 7Zm1.506-.317A2 2 0 0 0 3.592 6H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6L5.098 6.683ZM12.408 9H14V7h-3.796l1.451 1.659a1 1 0 0 0 .753.341Zm-1.506.317a2 2 0 0 0 1.506.683H14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H8l2.902 3.317Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRezMetallaOutlined16;
