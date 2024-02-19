import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBunkerFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M3 12c0-4.963 4.037-9 9-9s9 4.037 9 9v7.537c0 .807-.656 1.463-1.463 1.463H17.7v-4.759a.7.7 0 0 0-.7-.7h-1.906v-3.783a.7.7 0 0 0-.7-.7H9.606a.7.7 0 0 0-.7.7v3.783H7a.7.7 0 0 0-.7.7V21H4.463A1.465 1.465 0 0 1 3 19.537V12Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M7.7 21h3.6v-4.059h-.994v.38a.7.7 0 1 1-1.4 0v-.38H7.7V21Zm5 0h3.6v-4.059h-1.206v.38a.7.7 0 1 1-1.4 0v-.38H12.7V21Zm-1.4-8.542v.469a.7.7 0 1 0 1.4 0v-.47h.994v3.084h-3.388v-3.083h.994Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBunkerFilled24;
