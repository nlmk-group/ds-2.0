import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUploadOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M7 28a2.888 2.888 0 0 1-2.118-.88A2.89 2.89 0 0 1 4 25v-3.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V24a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V25c0 .825-.294 1.532-.88 2.12A2.893 2.893 0 0 1 25 28H7Zm8.5-6a1 1 0 0 1-1-1V9.775l-3.18 3.18a1 1 0 0 1-1.427-.012l-.71-.736a1 1 0 0 1 .012-1.402l6.098-6.098a1 1 0 0 1 1.414 0l6.098 6.098a1 1 0 0 1 .012 1.402l-.71.736a1 1 0 0 1-1.427.012l-3.18-3.18V21a1 1 0 0 1-1 1h-1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUploadOutlined32;
