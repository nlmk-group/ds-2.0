import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

export const IconAddCommentFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M1 2.647V15l2.722-2.722h9.63c.91 0 1.648-.738 1.648-1.647V2.647C15 1.737 14.263 1 13.353 1H2.647C1.737 1 1 1.737 1 2.647Zm6.588 6.588v-2.47h-2.47V5.94h2.47V3.47h.824v2.47h2.47v.824h-2.47v2.47h-.824Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAddCommentFilled16;
