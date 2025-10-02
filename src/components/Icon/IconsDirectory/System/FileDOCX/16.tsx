import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileDOCX16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3.3 1h7.8L15 4.818v8.91c0 .7-.585 1.272-1.3 1.272H3.294A1.285 1.285 0 0 1 2 13.727l.006-11.454C2.006 1.573 2.585 1 3.3 1Zm0 1.273v11.454h10.4V5.455h-2.275a.965.965 0 0 1-.975-.955V2.273H3.3Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.9 7.901c0 .215.193.39.43.39.238 0 .431-.175.431-.39v-.395h3.478V7.9c0 .215.193.389.43.39.238 0 .431-.175.431-.39v-.784c0-.215-.193-.39-.43-.39H6.33c-.237 0-.43.175-.43.39V7.9Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.07 7.116v4.313c0 .215.192.39.43.39s.43-.175.43-.39V7.116c0-.215-.192-.389-.43-.389s-.43.174-.43.39Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="m9.15 11.818.045-.002c.217-.02.387-.186.387-.387 0-.202-.17-.367-.387-.387l-.044-.002H7.849c-.238 0-.43.174-.43.389 0 .215.192.39.43.39h1.302Z"
      />
    </svg>
  );
};

export default IconFileDOCX16;
