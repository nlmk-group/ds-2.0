import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormatListNumberedFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2Zm.99 3.891h.589V3.423H2.4v.617h.59v1.851Zm.589 5.553v.308h-.59v.617h.59v.309H2.4v.617h1.768v-2.468H2.4v.617h1.179ZM3.46 7.742H2.4v-.617h1.768v.555l-1.06 1.296h1.06v.617H2.4v-.555l1.061-1.296ZM5.347 4.04v1.234H13.6V4.04H5.347Zm8.253 8.638H5.347v-1.234H13.6v1.234ZM5.347 8.976H13.6V7.742H5.347v1.234Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFormatListNumberedFilled16;
