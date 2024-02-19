import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSourceDataOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.515 15.698H2v2.17h5.677a24.083 24.083 0 0 1-.162-2.17Zm.799-5.113a10.84 10.84 0 0 0-.635 2.17H2v-2.17h6.314Zm4.377-5.113a10.605 10.605 0 0 0-2.572 2.17H2v-2.17h10.691Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M11 18.864a8.334 8.334 0 0 1-1.085-4.126c0-4.53 3.597-8.244 8.085-8.244 4.488 0 8.085 3.714 8.085 8.244 0 1.99-.694 3.821-1.852 5.25l5.34 5.461a1.5 1.5 0 0 1-2.146 2.098l-5.485-5.61A7.924 7.924 0 0 1 18 22.981c-2.99 0-5.586-1.65-6.985-4.09H11v-.027Zm1.085-4.126c0-.327.025-.648.073-.96H18v-2.17h-5.07c1.038-1.77 2.93-2.944 5.07-2.944 3.244 0 5.915 2.696 5.915 6.074 0 3.377-2.671 6.073-5.915 6.073a5.838 5.838 0 0 1-4.316-1.92H18v-2.17h-5.593a6.216 6.216 0 0 1-.322-1.983Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSourceDataOutlined32;
