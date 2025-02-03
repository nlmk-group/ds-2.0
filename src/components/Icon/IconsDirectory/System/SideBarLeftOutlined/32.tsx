import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSideBarLeftOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M5.6 26a2.555 2.555 0 0 1-1.836-.734C3.254 24.776 3 24.188 3 23.5v-15c0-.688.255-1.276.764-1.766A2.555 2.555 0 0 1 5.6 6h20.8c.715 0 1.327.245 1.836.734.51.49.764 1.079.764 1.766v15c0 .688-.255 1.276-.764 1.766S27.115 26 26.4 26H5.6Zm7.8-2.5h13v-15h-13v15Zm-2.6 0v-15H5.6v15h5.2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSideBarLeftOutlined32;
