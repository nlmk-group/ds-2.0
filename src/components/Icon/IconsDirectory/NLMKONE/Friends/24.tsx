import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFriends24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M10.603.6H12.6v4.8h-1.998V.6Zm-5.19 2.413L6.99 1.787l2.1 2.7-1.578 1.226-2.099-2.7Zm15.684 8.483c0 .9-.276 1.74-.75 2.43 2.55.168 2.55 2.414 2.55 4.79V22.5a.999.999 0 0 1-.995 1.002h-7.26c.03-.45.072-1.158.084-1.998h6.18v-2.64c-.276.084-.57.138-.906.138h-7.2V22.5a.999.999 0 0 1-.997 1.002H1.598c-.546 0-.996-.45-.996-1.002v-3.498c0-2.478.132-4.554 2.436-5.076a4.302 4.302 0 1 1 7.104 0h3.101a4.302 4.302 0 1 1 7.854-2.43Zm-1.992.006a2.305 2.305 0 1 0-4.609.001 2.305 2.305 0 0 0 4.61 0Zm-10.2 0a2.305 2.305 0 1 0-4.609.001 2.305 2.305 0 0 0 4.61 0Zm1.897 5.598H20c.9 0 .9-1.2 0-1.2H4.196C2.6 15.9 2.6 17.232 2.6 19.002v2.502h8.2V17.1Zm5.712-15.31-2.1 2.7 1.578 1.227 2.1-2.7-1.578-1.227Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFriends24;
