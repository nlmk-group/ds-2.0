import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconJsonOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M5 1.75A2.75 2.75 0 0 0 2.25 4.5V6c0 .69-.56 1.25-1.25 1.25v1.5c.69 0 1.25.56 1.25 1.25v1.5A2.75 2.75 0 0 0 5 14.25h1v-1.5H5c-.69 0-1.25-.56-1.25-1.25V10c0-.788-.331-1.499-.863-2a2.742 2.742 0 0 0 .863-2V4.5c0-.69.56-1.25 1.25-1.25h1v-1.5H5Zm6 12.5a2.75 2.75 0 0 0 2.75-2.75V10c0-.69.56-1.25 1.25-1.25v-1.5c-.69 0-1.25-.56-1.25-1.25V4.5A2.75 2.75 0 0 0 11 1.75h-1v1.5h1c.69 0 1.25.56 1.25 1.25V6c0 .788.331 1.499.863 2a2.742 2.742 0 0 0-.863 2v1.5c0 .69-.56 1.25-1.25 1.25h-1v1.5h1Z"
      />
    </svg>
  );
};

export default IconJsonOutlined16;
