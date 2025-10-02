import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilePPT16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M14.727 4.818v8.91c0 .7-.573 1.272-1.273 1.272H3.267C2.567 15 2 14.427 2 13.727l.007-11.455c0-.7.566-1.272 1.265-1.272h7.637l3.818 3.818Zm-11.455 8.91h10.182V5.454h-2.227a.955.955 0 0 1-.954-.954V2.272h-7v11.455Zm4.471-7.576a3.182 3.182 0 1 1 1.242 6.241 3.182 3.182 0 0 1-1.242-6.24Zm.166.895a2.272 2.272 0 1 0 1.324 4.325 2.274 2.274 0 0 0 1.356-1.644H8.363a.456.456 0 0 1-.454-.456V7.047Zm.91 1.771h1.772a2.273 2.273 0 0 0-1.773-1.772v1.772Z"
      />
    </svg>
  );
};

export default IconFilePPT16;
