import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconAddedMapping24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.90073 1.99927H18.1007C18.5007 1.99927 19.0007 2.39927 19.0007 2.89927V11.0156L17.0007 13.0063V3.99927H3.00073V17.9993H8.77712L10.8366 19.9993H1.90073C1.40073 19.9993 1.00073 19.4993 1.00073 19.0993V2.89927C1.00073 2.39927 1.40073 1.99927 1.90073 1.99927ZM5.00073 5.99927H7.00073V7.99927H5.00073V5.99927ZM15.0007 5.99927H9.00073V7.99927H15.0007V5.99927ZM15.0007 9.99927H9.00073V11.9993H15.0007V9.99927ZM7.00073 9.99927H5.00073V11.9993H7.00073V9.99927ZM5.00073 13.9993H7.00073V15.9993H5.00073V13.9993Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M22.4992 12L15.97 18.42L12.8995 15.3984L11.4995 16.8084L15.97 21.25L23.8992 13.41L22.4992 12Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAddedMapping24;
