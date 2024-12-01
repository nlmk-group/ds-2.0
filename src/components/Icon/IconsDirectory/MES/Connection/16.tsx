import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconConnection16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M12 7.333H9.88A2.007 2.007 0 0 0 8 6c-.867 0-1.6.56-1.88 1.333H4c-.22 0-1.334-.066-1.334-1.333v-.667C2.666 4.113 3.693 4 4 4h6.786a2.007 2.007 0 0 0 1.88 1.333 2 2 0 1 0 0-4c-.866 0-1.6.56-1.88 1.334H4c-1.074 0-2.667.706-2.667 2.666V6c0 1.96 1.593 2.667 2.667 2.667h2.12A2.007 2.007 0 0 0 8 10c.866 0 1.6-.56 1.88-1.333H12c.22 0 1.333.066 1.333 1.333v.667C13.333 11.887 12.306 12 12 12H5.213a2.007 2.007 0 0 0-1.88-1.333 2 2 0 1 0 0 4c.867 0 1.6-.56 1.88-1.334H12c1.073 0 2.666-.713 2.666-2.666V10c0-1.953-1.593-2.667-2.666-2.667Zm.666-4.666a.666.666 0 1 1 0 1.333.666.666 0 0 1 0-1.333ZM3.333 13.333a.667.667 0 1 1 0-1.333.667.667 0 0 1 0 1.333Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconConnection16;
