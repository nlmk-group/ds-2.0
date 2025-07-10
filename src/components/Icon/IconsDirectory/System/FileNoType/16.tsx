import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileNoType16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3.3 1h7.8L15 4.818v8.91c0 .7-.585 1.272-1.3 1.272H3.294A1.285 1.285 0 0 1 2 13.727l.006-11.454C2.006 1.573 2.585 1 3.3 1Zm0 1.273v11.454h10.4V5.455h-2.275a.965.965 0 0 1-.975-.955V2.273H3.3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFileNoType16;
