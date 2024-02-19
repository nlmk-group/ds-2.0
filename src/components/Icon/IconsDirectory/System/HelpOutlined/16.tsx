import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelpOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8 14.932c3.792 0 6.932-3.14 6.932-6.932 0-3.786-3.146-6.932-6.939-6.932-3.785 0-6.925 3.146-6.925 6.932 0 3.792 3.146 6.932 6.932 6.932Zm0-1.155A5.75 5.75 0 0 1 2.23 8a5.748 5.748 0 0 1 5.763-5.777A5.77 5.77 0 0 1 13.777 8 5.75 5.75 0 0 1 8 13.777Zm-.143-4.37c.347 0 .55-.21.55-.483v-.081c0-.38.225-.619.694-.931.66-.435 1.128-.836 1.128-1.645 0-1.135-1.006-1.74-2.154-1.74-1.17 0-1.937.55-2.128 1.176a1.183 1.183 0 0 0-.054.34.46.46 0 0 0 .462.469c.388 0 .449-.211.666-.463.225-.373.55-.598 1.006-.598.619 0 1.026.347 1.026.87 0 .462-.292.687-.883 1.095-.49.34-.85.7-.85 1.366v.088c0 .36.19.537.537.537Zm-.013 2.032c.394 0 .734-.313.734-.707 0-.4-.333-.707-.734-.707-.401 0-.734.313-.734.707 0 .388.34.707.734.707Z"
      />
    </svg>
  );
};

export default IconHelpOutlined16;
