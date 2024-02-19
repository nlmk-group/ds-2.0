import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTackleCraneFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M11.75 7.424V2.5h1.5v3.497a3.878 3.878 0 0 1 1.308 7.091L16.5 17.75h6v4.5h-20v-4.5h6l1.942-4.662a3.877 3.877 0 0 1-1.82-3.286h1.5A2.378 2.378 0 1 0 12.5 7.424h-.75Zm.094 6.2c.432.074.876.074 1.312 0l1.72 4.126h-4.751l1.72-4.126Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconTackleCraneFilled24;
