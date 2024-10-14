import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInRepairFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M14.812 8.25 13.5 9.563s-2.438-2.454-2.438-2.438a5.527 5.527 0 0 1 1.62-3.949 5.753 5.753 0 0 1 7.118-.799l-3.397 3.39.338 1.463 1.466.337 3.397-3.388a5.724 5.724 0 0 1-.8 7.103c-.493.493-1.867 1.093-1.867 1.093L14.812 8.25Zm-1.503 4.168 1.35-1.35 7.372 7.369a1.59 1.59 0 0 1 0 2.248l-1.35 1.349a1.591 1.591 0 0 1-2.25 0l-7.37-7.369 1.323-1.323-6.209-6.208-2.137.39-2.523-3.201L4.288 1.55 7.49 4.073 7.1 6.21l6.209 6.208ZM8.062 12l1.5 1.5-1.312 1.313 2.25 2.25-4.925 4.915a1.597 1.597 0 0 1-2.256 0l-1.354-1.35c-.623-.623-.713-1.819-.09-2.44L8.062 12Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInRepairFilled24;
