import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconQuestionMarkOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M14.636 16.516c1.128-2.049 3.296-3.257 4.556-5.07 1.333-1.9.586-5.452-3.194-5.452-2.475 0-3.691 1.886-4.204 3.448L8 7.836C9.04 4.696 11.867 2 15.984 2c3.442 0 5.8 1.577 7.002 3.552 1.025 1.694 1.626 4.863.044 7.22-1.758 2.61-3.443 3.405-4.351 5.085-.366.678-.513 1.12-.513 3.3h-4.233c-.015-1.149-.19-3.02.703-4.641Zm4.292 10.537c0 1.62-1.318 2.947-2.93 2.947-1.611 0-2.93-1.326-2.93-2.947s1.319-2.948 2.93-2.948c1.612 0 2.93 1.327 2.93 2.948Z"
      />
    </svg>
  );
};

export default IconQuestionMarkOutlined32;
