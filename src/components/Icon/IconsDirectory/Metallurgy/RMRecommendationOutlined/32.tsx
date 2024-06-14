import React, { FC } from 'react';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRMRecommendationOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = styles[color as keyof typeof styles];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.477 11.587h2.37v2.37h-2.37v-2.37Zm2.369 7.538h-2.37v2.37h2.37v-2.37Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M17.081 2H16C8.268 2.002 2 8.27 2 16.002c0 7.732 6.268 14 14 14s14-6.268 14-14c0-5.519-3.194-10.291-7.834-12.572A9.7 9.7 0 0 0 17.081 2ZM16 4.371c-6.424 0-11.63 5.208-11.63 11.631 0 6.424 5.206 11.631 11.63 11.631s11.63-5.207 11.63-11.63c0-1.502-.284-2.938-.801-4.256a9.748 9.748 0 0 1-9.748 9.748H16v-2.37h1.081a7.378 7.378 0 0 0 5.342-12.468 5.977 5.977 0 0 1-5.83 7.3H16v-2.37h.593a3.607 3.607 0 0 0 .72-7.142 11.706 11.706 0 0 0-1.136-.072L16 4.37Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconRMRecommendationOutlined32;
