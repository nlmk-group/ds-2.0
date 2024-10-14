import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMostImportant24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M15.503 1.136a1 1 0 0 1 .433 1.215L13.443 9H19a1 1 0 0 1 .768 1.64l-10 12a1 1 0 0 1-1.704-.991L10.557 15H5a1 1 0 0 1-.769-1.64l10-12a1 1 0 0 1 1.272-.224ZM7.135 13h4.864a1 1 0 0 1 .937 1.351l-.93 2.48L16.866 11h-4.867a1 1 0 0 1-.936-1.351l.93-2.478L7.135 13Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMostImportant24;
