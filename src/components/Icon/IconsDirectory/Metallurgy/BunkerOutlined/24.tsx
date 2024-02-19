import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBunkerOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3c-4.963 0-9 4.037-9 9v7.537C3 20.344 3.656 21 4.463 21h15.074c.807 0 1.463-.656 1.463-1.463V12c0-4.963-4.037-9-9-9Zm-7.544 9c0-4.16 3.384-7.544 7.544-7.544S19.544 7.84 19.544 12v7.538l-.001.002-.002.001a.015.015 0 0 1-.003.003h-1.847v-3.316a.728.728 0 0 0-.728-.728h-1.845v-3.684a.728.728 0 0 0-.728-.728H9.61a.728.728 0 0 0-.728.728V15.5H7.037a.728.728 0 0 0-.728.728v3.316H4.462l-.003-.003a.012.012 0 0 1-.003-.003V12Zm5.882 3.5v-2.956h.934v.375a.728.728 0 0 0 1.456 0v-.375h.934V15.5h-3.324Zm-2.573 4.044v-2.588h1.117v.375a.728.728 0 0 0 1.456 0v-.375h.934v2.588H7.765Zm4.963 0v-2.588h.934v.375a.728.728 0 0 0 1.456 0v-.375h1.117v2.588h-3.507Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBunkerOutlined24;
