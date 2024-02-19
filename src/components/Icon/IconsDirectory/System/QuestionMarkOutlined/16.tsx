import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconQuestionMarkOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.318 8.258c.564-1.024 1.648-1.629 2.278-2.535.666-.95.293-2.726-1.597-2.726-1.238 0-1.846.943-2.102 1.724L4 3.918C4.52 2.348 5.934 1 7.992 1c1.721 0 2.9.788 3.5 1.776.513.847.814 2.431.023 3.61-.88 1.305-1.721 1.702-2.176 2.542-.183.34-.256.56-.256 1.65H6.966c-.007-.574-.095-1.51.352-2.32Zm2.146 5.268c0 .81-.66 1.474-1.465 1.474a1.474 1.474 0 0 1 0-2.947c.806 0 1.465.663 1.465 1.473Z"
      />
    </svg>
  );
};

export default IconQuestionMarkOutlined16;
