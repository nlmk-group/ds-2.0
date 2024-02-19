import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMarkUnreadMailboxOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M24.636 10.546H13.727v2.181h10.91v13.091H7.181v-13.09h2.182v4.363h2.181V8.364h6.546V4H9.364v6.546H7.182c-1.2 0-2.182.981-2.182 2.181v13.091C5 27.018 5.982 28 7.182 28h17.454c1.2 0 2.182-.982 2.182-2.182v-13.09c0-1.2-.982-2.182-2.182-2.182Z"
      />
    </svg>
  );
};

export default IconMarkUnreadMailboxOutlined32;
