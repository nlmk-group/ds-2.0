import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBirthday: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.25 4.25C8.25 3.56 7 2 7 2S5.75 3.56 5.75 4.25a1.25 1.25 0 1 0 2.5 0Zm10 0C18.25 3.56 17 2 17 2s-1.25 1.56-1.25 2.25a1.25 1.25 0 1 0 2.5 0ZM12 2s1.25 1.56 1.25 2.25a1.25 1.25 0 1 1-2.5 0C10.75 3.56 12 2 12 2Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M6 11.126c-1.725.444-3 2.01-3 3.874v7h18v-7a4.002 4.002 0 0 0-3-3.874V7h-2v4h-3V7h-2v4H8V7H6v4.126ZM19 15v.517c-.585-.255-1.284-.517-2.5-.517-1.327 0-2.038.311-2.656.586l-.017.008c-.5.222-.914.406-1.827.406-.913 0-1.328-.184-1.827-.406l-.017-.008C9.538 15.311 8.826 15 7.5 15c-1.217 0-1.915.262-2.5.517V15a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2ZM5 20v-2.317a9 9 0 0 0 .656-.27l.017-.007c.5-.222.914-.406 1.827-.406.913 0 1.328.184 1.827.406l.017.008c.618.275 1.33.586 2.656.586 1.327 0 2.038-.311 2.656-.586l.017-.008c.5-.222.914-.406 1.827-.406.913 0 1.328.184 1.827.406l.017.008c.203.09.415.184.656.27V20H5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconBirthday;
