import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAddCommentOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.325 13.8h1.35v-2.925H15.6v-1.35h-2.925V6.6h-1.35v2.925H8.4v1.35h2.925V13.8ZM3 21V4.35c0-.345.135-.656.405-.934C3.675 3.14 3.99 3 4.35 3h15.3c.345 0 .656.139.934.416.277.278.416.589.416.934v11.7c0 .345-.139.656-.416.934-.278.277-.589.416-.934.416H6.6L3 21Zm1.35-3.262 1.688-1.688H19.65V4.35H4.35v13.388Zm0-13.388v13.388V4.35Z"
      />
    </svg>
  );
};

export default IconAddCommentOutlined24;
