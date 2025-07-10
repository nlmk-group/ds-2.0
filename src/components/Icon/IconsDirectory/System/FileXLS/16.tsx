import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileXLS16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15 4.818v8.91c0 .7-.585 1.272-1.3 1.272H3.294A1.285 1.285 0 0 1 2 13.727l.006-11.454C2.006 1.573 2.585 1 3.3 1h7.8L15 4.818Zm-11.7 8.91h10.4V5.454h-2.275a.965.965 0 0 1-.975-.955V2.273H3.3v11.454Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.286 12.454a.458.458 0 0 0 .464-.452V7.18a.458.458 0 0 0-.464-.452H5.714a.458.458 0 0 0-.464.452v4.823c0 .25.208.452.464.452h5.572ZM6.179 7.632h4.642v.703H6.18v-.703Zm0 1.607h4.642v.703H6.18V9.24Zm0 1.608h4.642v.703H6.18v-.703Z"
      />
    </svg>
  );
};

export default IconFileXLS16;
