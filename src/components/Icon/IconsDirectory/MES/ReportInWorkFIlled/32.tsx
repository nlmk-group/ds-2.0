import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReportInWorkFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M26 30H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4.087a2.497 2.497 0 0 1 2.163-1.25h1.25c0-.829 1.12-1.5 2.5-1.5s2.5.671 2.5 1.5h1.25A2.497 2.497 0 0 1 21.913 4H26a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2ZM11.5 6c.386.883 1.021 1.742 2.25 1.75h4.5c1.253.008 1.864-.867 2.25-1.75h-9Zm10.656 9.087c-.28-.794-.752-2.327-1.04-3.198-.23-.698-.856-.518-1.241.152-.155.27-.45.782-.628 1.088-.07-.046-.14-.09-.213-.133A6.49 6.49 0 0 0 9.29 18.75l1.999-.5c-.023-.805.164-1.125.596-1.875a4.502 4.502 0 0 1 6.148-1.647c.075.043.146.078.216.125l-.632 1.097c-.364.629-.177 1.275.498 1.135.905-.189 2.454-.525 3.29-.699a.994.994 0 0 0 .75-1.299ZM20.71 19.25c.023.805-.164 1.125-.596 1.875a4.5 4.5 0 0 1-6.147 1.647c-.075-.043-.146-.078-.217-.125.178-.306.478-.831.632-1.097.365-.629.177-1.275-.498-1.135-.905.188-2.454.525-3.29.698a.994.994 0 0 0-.75 1.3c.28.795.753 2.328 1.04 3.199.231.698.856.518 1.242-.153l.627-1.087c.07.046.14.09.214.133a6.489 6.489 0 0 0 9.742-5.755l-1.999.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReportInWorkFilled32;
