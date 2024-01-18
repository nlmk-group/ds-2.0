import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconChatBubbleOutline24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.01 4.5C2.01 3.4 2.9 2.5 4 2.5H20C21.1 2.5 22 3.4 22 4.5V16.5C22 17.6 21.1 18.5 20 18.5H6L2 22.5L2.01 4.5ZM20 4.5H4V17.67L5.17 16.5H20V4.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChatBubbleOutline24;
