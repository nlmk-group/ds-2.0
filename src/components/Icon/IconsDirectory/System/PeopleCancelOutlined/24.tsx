import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPeopleCancelOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15.324 8.185c0 2.312-1.838 4.184-4.108 4.184-2.27 0-4.108-1.872-4.108-4.184C7.108 5.873 8.946 4 11.216 4c2.27 0 4.108 1.873 4.108 4.185Zm-2.054 0c0-1.151-.924-2.093-2.054-2.093s-2.054.942-2.054 2.093c0 1.15.924 2.092 2.054 2.092s2.054-.942 2.054-2.092ZM5.054 18.646c.205-.659 2.64-1.757 5.094-2.03l2.095-2.092a9.43 9.43 0 0 0-1.027-.063C8.474 14.461 3 15.863 3 18.646v2.092h9.243l-2.054-2.092H5.054Zm12.838-3.306 2.66-2.71L22 14.107l-2.66 2.71L22 19.524 20.552 21l-2.66-2.71-2.66 2.71-1.448-1.475 2.66-2.71-2.66-2.71 1.448-1.474 2.66 2.71Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPeopleCancelOutlined24;
