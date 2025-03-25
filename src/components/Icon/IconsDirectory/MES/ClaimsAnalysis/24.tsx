import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconClaimsAnalysis24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.128 6.737v.715c0 .458.36.829.804.829h6.136a.817.817 0 0 0 .804-.83v-.714h.956c.578 0 1.046.482 1.046 1.078v9.947c0 .595-.468 1.078-1.046 1.078H7.172c-.578 0-1.046-.483-1.046-1.078V7.815c0-.596.468-1.078 1.046-1.078h.956ZM12 4c.866 0 1.573.697 1.622 1.577h3.206c1.2 0 2.172 1.002 2.172 2.238v9.947C19 18.998 18.027 20 16.828 20H7.172C5.972 20 5 18.998 5 17.762V7.815c0-1.236.973-2.238 2.172-2.238h3.206C10.427 4.697 11.134 4 12 4Zm.654 1.674a.664.664 0 0 1-.654.674.664.664 0 0 1-.654-.674c0-.372.293-.673.654-.673.361 0 .654.301.654.673Zm-1.217 4.41h1.126v4.61h-1.126v-4.61Zm0 6.33c0-.32.252-.58.563-.58.31 0 .563.26.563.58 0 .321-.252.58-.563.58a.572.572 0 0 1-.563-.58Z"
      />
    </svg>
  );
};

export default IconClaimsAnalysis24;
