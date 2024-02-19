import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTaskOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M21 5.862 10.731 16.14l-3.816-3.816 1.269-1.269 2.547 2.547 9-9L21 5.862Zm-1.989 4.536c.117.513.189 1.053.189 1.602 0 3.978-3.222 7.2-7.2 7.2A7.198 7.198 0 0 1 4.8 12c0-3.978 3.222-7.2 7.2-7.2 1.422 0 2.736.414 3.852 1.125l1.296-1.296A8.91 8.91 0 0 0 12 3c-4.968 0-9 4.032-9 9s4.032 9 9 9 9-4.032 9-9a9.025 9.025 0 0 0-.54-3.051l-1.449 1.449Z"
      />
    </svg>
  );
};

export default IconTaskOutlined24;
