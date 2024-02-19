import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMetalOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="M19.43 3.008c-.297-.16-.635-.026-.825.073l-8.8 4.571a.75.75 0 0 0-.233.193l-.252.131-4.4 10.666a.94.94 0 0 0 .13.935l7.333 9.244a.32.32 0 0 0 .014.016l.002.003a.87.87 0 0 0 .668.31h8.8a.876.876 0 0 0 .793-.505l4.4-9.243.003-.007a.95.95 0 0 0 .06-.624L24.19 6.59a.927.927 0 0 0-.372-.542l-4.389-3.04Zm-4.815 11.305-3.237-5.605 6.672-3.466v4.313l-3.435 4.758Zm5.202-6.166V5.472l1.931 1.338-1.931 1.337Zm-3.784 7.254 3.518-4.874 3.229-2.236 2.275 9.453-9.022-2.343ZM7.316 17.49l2.949-7.147 2.948 5.105-5.897 2.042Zm6.75 9.842 1.222-10.243 9.705 2.52-3.676 7.723h-7.252Zm-1.624-1.314-5.215-6.573 6.258-2.167-1.043 8.74Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMetalOutlined32;
