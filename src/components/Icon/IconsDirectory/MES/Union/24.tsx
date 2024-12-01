import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUnion24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9 5c1.04 0 2.06.24 3 .68.94-.44 1.96-.68 3-.68a7 7 0 1 1 0 14c-1.04 0-2.06-.24-3-.68-.94.44-1.96.68-3 .68A7 7 0 1 1 9 5Zm-.5 7c0 1.87.79 3.56 2.06 4.75l1-.46c-1.25-1-2.06-2.55-2.06-4.29 0-1.74.81-3.29 2.06-4.29l-1-.46A6.49 6.49 0 0 0 8.5 12Zm7 0c0-1.87-.79-3.56-2.06-4.75l-1 .46c1.25 1 2.06 2.55 2.06 4.29 0 1.74-.81 3.29-2.06 4.29l1 .46A6.49 6.49 0 0 0 15.5 12Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUnion24;
