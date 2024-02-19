import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAddCommentFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 4.353V22l3.889-3.889h13.758c1.3 0 2.353-1.053 2.353-2.353V4.353C22 3.053 20.947 2 19.647 2H4.353A2.353 2.353 0 0 0 2 4.353Zm9.412 9.412v-3.53h-3.53V9.06h3.53V5.53h1.176v3.53h3.53v1.176h-3.53v3.53h-1.176Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAddCommentFilled24;
