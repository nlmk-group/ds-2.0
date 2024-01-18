import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconMarkUnreadMailboxOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M13.4545 4.81818H7.09091V6.09091H13.4545V13.7273H3.27273V6.09091H4.54545V8.63636H5.81818V3.54545H9.63636V1H4.54545V4.81818H3.27273C2.57273 4.81818 2 5.39091 2 6.09091V13.7273C2 14.4273 2.57273 15 3.27273 15H13.4545C14.1545 15 14.7273 14.4273 14.7273 13.7273V6.09091C14.7273 5.39091 14.1545 4.81818 13.4545 4.81818Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMarkUnreadMailboxOutlined16;
