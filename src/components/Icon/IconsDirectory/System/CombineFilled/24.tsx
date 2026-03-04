import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCombineFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1H6.286C5.576 5 5 5.574 5 6.284V17H4a2 2 0 0 1-2-2V4Zm5 15v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1v10.715c0 .71-.576 1.286-1.286 1.286H7Z"
      />
      <path fill={htmlColor || 'currentColor'} d="M7 17V7h10v10H7Z" />
    </svg>
  );
};

export default IconCombineFilled24;
