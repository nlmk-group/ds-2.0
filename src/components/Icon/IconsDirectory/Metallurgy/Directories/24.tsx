import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDirectories24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M17.25 8.288H6.75V6.713h10.5v1.575Zm-1.5 2.999h-7.5V9.713h7.5v1.575Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 3v18h18V3H3Zm16.418 1.582H4.582v8.88h5.204v2.25h4.425v-2.25h5.206v-8.88Zm0 10.456h-3.63v2.25H8.212v-2.25h-3.63v4.38h14.835v-4.38Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconDirectories24;
