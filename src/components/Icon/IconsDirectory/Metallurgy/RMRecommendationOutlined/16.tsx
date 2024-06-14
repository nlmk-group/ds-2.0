import React, { FC } from 'react';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRMRecommendationOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = styles[color as keyof typeof styles];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.738 5.793h1.185v1.185H5.738V5.794Zm1.185 3.77H5.738v1.184h1.185V9.563Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.54 1H8a7.002 7.002 0 0 0 0 14.001 7 7 0 0 0 3.083-13.286A4.85 4.85 0 0 0 8.541 1ZM8 2.186a5.815 5.815 0 1 0 5.414 3.688 4.874 4.874 0 0 1-4.873 4.873H8V9.563h.54a3.69 3.69 0 0 0 2.671-6.234 2.988 2.988 0 0 1-2.915 3.65H8V5.792h.296a1.804 1.804 0 0 0 .36-3.57 5.855 5.855 0 0 0-.568-.037H8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconRMRecommendationOutlined16;
