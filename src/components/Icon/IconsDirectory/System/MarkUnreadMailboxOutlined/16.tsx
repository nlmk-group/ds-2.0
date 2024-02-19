import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMarkUnreadMailboxOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M13.454 4.818H7.091v1.273h6.363v7.636H3.274V6.091h1.272v2.545h1.273v-5.09h3.818V1h-5.09v3.818H3.272c-.7 0-1.273.573-1.273 1.273v7.636c0 .7.573 1.273 1.273 1.273h10.181c.7 0 1.273-.573 1.273-1.273V6.091c0-.7-.572-1.273-1.273-1.273Z"
      />
    </svg>
  );
};

export default IconMarkUnreadMailboxOutlined16;
