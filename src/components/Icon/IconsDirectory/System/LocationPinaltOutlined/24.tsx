import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLocationPinaltOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12 10.79a1.998 1.998 0 0 0 1.848-1.236 2.005 2.005 0 0 0-1.458-2.729A1.999 1.999 0 0 0 10 8.788a2.003 2.003 0 0 0 2 2.002Zm-.71 6.916a1 1 0 0 0 1.42 0l4.09-4.103A6.798 6.798 0 0 0 12 2a6.786 6.786 0 0 0-6.273 4.196A6.801 6.801 0 0 0 7.2 13.603l4.09 4.103ZM7.23 8.328a4.817 4.817 0 0 1 2.13-3.553 4.807 4.807 0 0 1 5.28 0 4.822 4.822 0 0 1 1.873 5.628 4.824 4.824 0 0 1-1.123 1.788L12 15.584l-3.39-3.393a4.775 4.775 0 0 1-1.38-3.863ZM19 19.998H5a1 1 0 0 0-.707 1.709A1 1 0 0 0 5 22h14a1 1 0 0 0 .707-1.709 1 1 0 0 0-.707-.293Z"
      />
    </svg>
  );
};

export default IconLocationPinaltOutlined24;
