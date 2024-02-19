import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTaskOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M28 7.816 14.308 21.52 9.22 16.432l1.692-1.692 3.396 3.396 12-12L28 7.816Zm-2.652 6.048c.156.684.252 1.404.252 2.136 0 5.304-4.296 9.6-9.6 9.6A9.597 9.597 0 0 1 6.4 16c0-5.304 4.296-9.6 9.6-9.6 1.896 0 3.648.552 5.136 1.5l1.728-1.728A11.88 11.88 0 0 0 16 4C9.376 4 4 9.376 4 16s5.376 12 12 12 12-5.376 12-12c0-1.428-.264-2.796-.72-4.068l-1.932 1.932Z"
      />
    </svg>
  );
};

export default IconTaskOutlined32;
