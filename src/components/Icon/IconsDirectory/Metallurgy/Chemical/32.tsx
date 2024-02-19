import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChemical32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M11.817 5.35h-3.15v-1.7h14.666v1.7h-3.15v7.15c0 1.015.342 1.919.861 2.819.261.452.56.892.878 1.343.076.11.155.22.234.332.241.34.49.692.719 1.039.165.25.335.504.51.762 1.604 2.384 3.465 5.149 3.465 9.705v.85H5.15v-.85c0-4.556 1.861-7.321 3.466-9.705.173-.258.344-.511.51-.762.228-.348.476-.699.718-1.04.08-.11.158-.222.234-.33.318-.452.617-.892.877-1.344.52-.9.862-1.804.862-2.82V5.35Zm1.7 0v7.15c0 1.421-.486 2.624-1.09 3.668-.3.52-.634 1.012-.958 1.472l-.007.01h9.076l-.007-.01a19.58 19.58 0 0 1-.96-1.472c-.602-1.044-1.088-2.247-1.088-3.668V5.35h-4.966Zm8.191 14H10.292l-.262.39c-1.479 2.205-2.95 4.398-3.156 7.91h18.251c-.205-3.512-1.676-5.705-3.155-7.91l-.262-.39Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconChemical32;
