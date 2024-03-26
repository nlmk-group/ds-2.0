import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilterClean24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.478 3.19a.9.9 0 0 0-.535-.19H3.863a.9.9 0 0 0-.534.19.863.863 0 0 0-.147 1.208l4.133 5.289v4.417a.853.853 0 0 0 .25.716l3.46 3.46a.723.723 0 0 0 .302.19 6.026 6.026 0 0 1-.56-2.528c0-1.579.62-3.098 1.725-4.228V9.687l4.133-5.29a.863.863 0 0 0-.147-1.207Zm-5.712 5.893v6.496l-1.725-1.725V9.09L5.624 4.726h8.559l-3.417 4.357Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M19.601 13.399a.85.85 0 0 1 0 1.202L17.702 16.5l1.899 1.899a.85.85 0 1 1-1.202 1.202L16.5 17.702l-1.899 1.899a.85.85 0 1 1-1.202-1.202l1.899-1.899-1.899-1.899a.85.85 0 1 1 1.202-1.202l1.899 1.899 1.899-1.899a.85.85 0 0 1 1.202 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterClean24;
