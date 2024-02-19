import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRoundedArrowForwardOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M23.963 9.053h-9.437c-4.36 0-7.894 3.635-7.894 8.12 0 4.485 3.534 8.12 7.894 8.12h11.842V28H14.526C8.713 28 4 23.153 4 17.173c0-5.98 4.713-10.827 10.526-10.827h9.437l-3.337-3.432L22.486 1 29 7.7l-6.513 6.699-1.86-1.914 3.336-3.432Z"
      />
    </svg>
  );
};

export default IconRoundedArrowForwardOutlined32;
