import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconNotificationsBellOffFilled24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M11.3846 21C12.4 21 13.2308 20.1692 13.2308 19.1538H9.53846C9.53846 20.1692 10.36 21 11.3846 21ZM16.9231 10.8462C16.9231 8.01231 15.4092 5.64 12.7692 5.01231V3H10V5.01231C9.77846 5.06769 9.56615 5.15077 9.36308 5.22462L16.9231 12.7846V10.8462ZM5.30154 3.78462L4 5.08615L6.59385 7.68C6.11385 8.60308 5.84615 9.67385 5.84615 10.8462V15.4615L4 17.3077V18.2308H17.1446L18.7508 19.8369L20.0523 18.5354L5.30154 3.78462Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNotificationsBellOffFilled24;
