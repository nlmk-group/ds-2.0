import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPovtornayaObrabotkaPachek24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M12.948 1h-1.896v1.148h1.896V1Z" />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M1 4.826c0-.634.51-1.148 1.138-1.148h6.069c.628 0 1.138.514 1.138 1.148v14.348c0 .634-.51 1.148-1.138 1.148h-6.07A1.143 1.143 0 0 1 1 19.174V4.826ZM2.897 18.41V5.59h4.551v12.82H2.897Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.052 4.252h1.896v2.296h-1.896V4.252Zm1.896 4.4h-1.896v2.296h1.896V8.652Zm-1.896 4.4h1.896v2.296h-1.896v-2.296Zm1.896 4.4h-1.896v2.296h1.896v-2.296Zm-1.896 4.4h1.896V23h-1.896v-1.148Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.655 4.826c0-.634.51-1.148 1.138-1.148h6.07c.628 0 1.137.514 1.137 1.148v14.348c0 .634-.51 1.148-1.138 1.148h-6.069a1.143 1.143 0 0 1-1.138-1.148V4.826Zm1.897 13.583V5.59h4.552v12.82h-4.552Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPovtornayaObrabotkaPachek24;
