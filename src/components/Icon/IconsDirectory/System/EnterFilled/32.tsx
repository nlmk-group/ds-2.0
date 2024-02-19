import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEnterFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M13.548 3h11.549c1.581 0 2.881 1.3 2.881 2.882V26.14c0 1.582-1.3 2.86-2.881 2.86H13.548c-1.581 0-2.881-1.278-2.881-2.86v-8.688h7.215v4.333L23.667 16l-5.785-5.785v4.333h-7.215V5.882A2.88 2.88 0 0 1 13.548 3ZM3 14.549h7.667v2.881H3v-2.88Z"
      />
    </svg>
  );
};

export default IconEnterFilled32;
