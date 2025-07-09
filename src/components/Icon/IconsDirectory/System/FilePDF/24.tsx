import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilePDF24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M22 7v14c0 1.1-.9 2-2 2H3.99C2.89 23 2 22.1 2 21l.01-18c0-1.1.89-2 1.99-2h12l6 6ZM4 21h16V8h-3.5A1.5 1.5 0 0 1 15 6.5V3H4v18Zm8-12c1.192 0 1.937 1.28 1.34 2.305l-.656 1.129 1.452 2.494h1.313c1.192 0 1.937 1.28 1.341 2.304-.596 1.024-2.086 1.024-2.682 0l-.657-1.128h-2.903l-.656 1.128c-.596 1.024-2.086 1.024-2.682 0-.596-1.023.148-2.304 1.34-2.304h1.314l1.452-2.494-.657-1.13C10.064 10.282 10.81 9 12 9Zm-3.45 7.104a.36.36 0 0 0-.315.54c.14.24.49.24.63 0l.316-.54H8.55Zm6.585.54c.14.241.49.24.63 0a.36.36 0 0 0-.216-.527l-.1-.014h-.629l.315.541Zm-3.904-1.716h1.537l-.769-1.319-.768 1.319ZM12 10.176a.36.36 0 0 0-.315.54l.314.543.316-.542a.36.36 0 0 0-.315-.541Z"
      />
    </svg>
  );
};

export default IconFilePDF24;
