import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFunnel32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M19.125 16v10.507c.052.4-.08.826-.38 1.106a1.307 1.307 0 0 1-.926.39 1.29 1.29 0 0 1-.925-.39l-2.638-2.68a1.323 1.323 0 0 1-.38-1.106V16h-.04L6.277 6.16A1.349 1.349 0 0 1 6.5 4.293c.25-.186.525-.293.814-.293h18.372c.289 0 .564.107.814.293a1.349 1.349 0 0 1 .223 1.867L19.164 16h-.04Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFunnel32;
