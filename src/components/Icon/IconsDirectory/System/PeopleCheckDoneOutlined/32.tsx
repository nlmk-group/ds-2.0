import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPeopleCheckDoneOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M19.684 10.06c0 3.35-2.638 6.061-5.895 6.061-3.256 0-5.894-2.712-5.894-6.06C7.895 6.712 10.533 4 13.79 4c3.256 0 5.894 2.712 5.894 6.06Zm-2.947 0c0-1.666-1.326-3.03-2.947-3.03-1.622 0-2.948 1.364-2.948 3.03 0 1.667 1.326 3.03 2.947 3.03 1.622 0 2.948-1.363 2.948-3.03ZM4.947 25.213c.295-.954 3.788-2.545 7.31-2.94l3.006-3.03c-.575-.06-1.002-.09-1.473-.09-3.935 0-11.79 2.03-11.79 6.06v3.03h13.263l-2.947-3.03H4.947Zm15.43-.5 7.56-7.833L30 19.015 20.377 29l-5.114-5.303 2.063-2.136 3.05 3.151Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPeopleCheckDoneOutlined32;
