import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSendOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m3.99 2.081 24.664 13.343A.664.664 0 0 1 29 16a.65.65 0 0 1-.346.576L3.99 29.919a.676.676 0 0 1-.902-.25.649.649 0 0 1-.088-.326V2.657a.649.649 0 0 1 .328-.566.676.676 0 0 1 .662-.01Zm1.682 15.233v8.695L24.175 16 5.672 5.99v8.696h6.68v2.628h-6.68Z"
      />
    </svg>
  );
};

export default IconSendOutlined32;
