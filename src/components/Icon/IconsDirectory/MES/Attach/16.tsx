import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAttach16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M2.525 12.792c-2.68-2.68 0-5.45 0-5.45l4.552-4.553a.642.642 0 0 1 .909.909L3.433 8.25a2.57 2.57 0 0 0 3.634 3.634l5.905-5.905c.627-.627.514-1.53-.114-2.158-.627-.627-1.53-.74-2.157-.113L5.704 8.704a.642.642 0 1 0 .909.909l3.186-3.187a.642.642 0 1 1 .909.909L7.52 10.52c-.756.697-1.992.734-2.725 0-1.312-1.312 0-2.725 0-2.725l4.996-4.997s2.02-1.841 3.975.114c1.956 1.955.114 3.975.114 3.975l-5.906 5.904s-2.77 2.681-5.45 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAttach16;
