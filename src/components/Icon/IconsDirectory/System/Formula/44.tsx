import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormula44: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none" viewBox="0 0 44 44" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m22 2 20 26.667L36 42H8L2 28.667 22 2Zm4.75 28.889h-9.5l3 6.667h3.5l3-6.667ZM24 11.61v14.833h11.1L24 11.611Zm-4 0L8.9 26.444H20V11.611Zm-7.2 19.28H7.5l3 6.667h5.3l-3-6.667Zm23.7 0h-5.3l-3 6.667h5.3l3-6.667Z"
      />
    </svg>
  );
};

export default IconFormula44;
