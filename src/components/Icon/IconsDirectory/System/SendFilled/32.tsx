import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSendFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M3 17.314h8.016v-2.628H3V2.656a.649.649 0 0 1 .328-.565.676.676 0 0 1 .662-.01l24.664 13.343A.664.664 0 0 1 29 16a.65.65 0 0 1-.346.576L3.99 29.919a.676.676 0 0 1-.902-.25.649.649 0 0 1-.088-.326V17.314Z"
      />
    </svg>
  );
};

export default IconSendFilled32;
