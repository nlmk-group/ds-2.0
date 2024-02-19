import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPhotoCameraOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5.889 3h3.333l1.017 1.111H12c.611 0 1.111.5 1.111 1.111v6.667c0 .611-.5 1.111-1.111 1.111H3.111C2.5 13 2 12.5 2 11.889V5.222c0-.61.5-1.11 1.111-1.11h1.761L5.89 3ZM9.75 5.222l-1.017-1.11H6.378L5.36 5.221H3.11v6.667H12V5.222H9.75ZM7.556 6.89c.916 0 1.666.75 1.666 1.667 0 .916-.75 1.666-1.666 1.666-.917 0-1.667-.75-1.667-1.666 0-.917.75-1.667 1.667-1.667ZM4.778 8.556a2.779 2.779 0 0 1 5.555 0 2.779 2.779 0 0 1-5.555 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPhotoCameraOutlined16;
