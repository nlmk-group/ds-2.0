import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStandartnyeTrebovaniyakOrganizaciiOfisnyhProstranstv24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6h-2V6a1 1 0 0 0-1-1h-4v4h-2V5H6a1 1 0 0 0-1 1v6h9v5h-2v-3H5v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h2v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconStandartnyeTrebovaniyakOrganizaciiOfisnyhProstranstv24;
