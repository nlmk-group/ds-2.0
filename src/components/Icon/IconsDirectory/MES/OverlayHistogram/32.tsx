import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOverlayHistogram32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m27.174 5.41.829-.803L26.345 3l-.829.803-8.825 8.554-3.308-3.207-.83-.803-.828.803-6.896 6.684-.829.804 1.658 1.606.829-.803 6.067-5.88 3.308 3.207.83.803.828-.803 9.654-9.358ZM23.76 15.468 29 10.455V28h-5.24V15.468Zm-12.86 2.84-5.241 5.515V28h5.24v-9.691Zm6.239 2.674-2.516-2.34V28h5.241v-9.357l-2.725 2.34Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconOverlayHistogram32;
