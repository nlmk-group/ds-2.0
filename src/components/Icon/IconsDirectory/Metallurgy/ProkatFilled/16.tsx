import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconProkatFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.969 1.85h-9.32v10.618l-1.349.888.002 1.294h12v-1.3l-1.333-.873V1.85Zm-2.667 6.3V11l1.367.621v-3.47h-1.367Zm1.367-1.3v-3.7h-6.72v3.7h6.72Zm-6.72 1.3v3.462L6.302 11V8.15H4.95Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconProkatFilled16;
