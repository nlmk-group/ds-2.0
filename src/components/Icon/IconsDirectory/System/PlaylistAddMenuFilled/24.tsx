import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPlaylistAddMenuFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm9.75 1.846H3.25v1.758h10.5V5.846Zm0 3.517H3.25v1.758h10.5V9.363Zm1.75 0h1.75v3.516h3.5v1.758h-3.5v3.517H15.5v-3.517H12V12.88h3.5V9.363ZM3.25 14.637h7V12.88h-7v1.758Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPlaylistAddMenuFilled24;
