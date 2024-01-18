import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconCollectionAttributeMapping24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M3 9H17V7H3V9ZM3 13H17V11H3V13ZM3 17H17V15H3V17ZM19 17H21V15H19V17ZM19 7V9H21V7H19ZM19 13H21V11H19V13Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCollectionAttributeMapping24;
