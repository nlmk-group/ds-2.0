import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconToRepairFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="m17.387 13.584 3.774-3.772a5.471 5.471 0 0 1 .788 3.634l.012-.01a5.464 5.464 0 0 1-7.275 4.45l-3.553 3.67a1.52 1.52 0 0 1-2.15 0l-1.291-1.29a1.52 1.52 0 0 1 0-2.15l3.62-3.683a5.96 5.96 0 0 1-.206-.968 5.471 5.471 0 0 1 8.334-5.373l-3.773 3.772.322 1.398 1.398.322Zm-9.875-3.057L6.098 9.113 8.211 7H2V5h6.21L6.099 2.888l1.415-1.415L12 6l-4.487 4.527Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconToRepairFilled24;
