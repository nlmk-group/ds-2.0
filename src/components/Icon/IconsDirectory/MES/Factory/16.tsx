import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFactory16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="none" viewBox="0 0 16 15" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.114.195a.437.437 0 0 1-.121.607l-.57.38a.977.977 0 0 1-1.232-.123.102.102 0 0 0-.129-.012l-.57.38a.437.437 0 0 1-.485-.728l.57-.38A.977.977 0 0 1 5.81.44c.035.034.088.04.129.012l.57-.38a.437.437 0 0 1 .606.122Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3.188 8.625a.5.5 0 0 1 .5-.5h1.75a.5.5 0 0 1 .5.5v3.313a.5.5 0 0 1-.5.5h-1.75a.5.5 0 0 1-.5-.5V8.624ZM4.061 9v2.563h1V9h-1Zm3.064-.875a.5.5 0 0 0-.5.5v3.313a.5.5 0 0 0 .5.5h1.75a.5.5 0 0 0 .5-.5V8.624a.5.5 0 0 0-.5-.5h-1.75Zm.375 3.438V9h1v2.563h-1Zm3.063-3.438a.5.5 0 0 0-.5.5v3.313a.5.5 0 0 0 .5.5h1.75a.5.5 0 0 0 .5-.5V8.624a.5.5 0 0 0-.5-.5h-1.75Zm.374 3.438V9h1v2.563h-1Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m1.443 6.575.805-4.292a.5.5 0 0 1 .491-.408h1.772a.5.5 0 0 1 .491.408l.802 4.28h8.633c.311 0 .563.251.563.562v6.313c0 .31-.252.562-.563.562H1.563A.562.562 0 0 1 1 13.437V7.125c0-.27.19-.495.443-.55Zm.893-.012L3.05 2.75h1.148l.715 3.813H2.336Zm-.461 6.562V7.438h12.25v5.687H1.875Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFactory16;
