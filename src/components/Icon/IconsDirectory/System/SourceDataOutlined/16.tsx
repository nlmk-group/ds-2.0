import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSourceDataOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M4.353 7.428H2v1.356h2.46a9.631 9.631 0 0 1-.107-1.356Zm.446-2.11c-.202.413-.34.861-.406 1.333H2V5.318h2.799Zm2.195-2.121A4.501 4.501 0 0 0 5.292 4.53H2V3.197h4.994Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.842 3.621c-2.016 0-3.66 1.623-3.66 3.637 0 2.013 1.644 3.636 3.66 3.636.659 0 1.277-.173 1.812-.476l2.21 2.192a.667.667 0 0 0 .939-.947l-2.124-2.107a3.605 3.605 0 0 0 .824-2.298c0-2.014-1.644-3.637-3.66-3.637ZM6.516 7.258c0-.062.002-.122.007-.182h2.32V5.742H7.09a2.33 2.33 0 0 1 1.752-.787 2.315 2.315 0 0 1 2.327 2.303A2.315 2.315 0 0 1 8.842 9.56c-.463 0-.893-.134-1.255-.364h1.255V7.864H6.597a2.281 2.281 0 0 1-.081-.606Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSourceDataOutlined16;
