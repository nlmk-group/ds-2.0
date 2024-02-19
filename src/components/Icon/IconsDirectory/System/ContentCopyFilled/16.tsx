import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconContentCopyFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M6.235 12.2c-.388 0-.72-.137-.996-.41a1.343 1.343 0 0 1-.415-.99V2.4c0-.385.138-.715.415-.99.276-.273.608-.41.996-.41h6.353c.389 0 .72.137.998.41.276.275.414.605.414.99v8.4c0 .385-.138.715-.414.99-.277.273-.61.41-.998.41H6.235ZM3.412 15c-.388 0-.72-.137-.998-.41A1.344 1.344 0 0 1 2 13.6V3.8h1.412v9.8h7.765V15H3.412Z"
      />
    </svg>
  );
};

export default IconContentCopyFilled16;
