import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEyeOffFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4.52 5.934 1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31A10.948 10.948 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9A10.98 10.98 0 0 1 4.52 5.934Zm10.237 10.238-1.464-1.464a3 3 0 0 1-4.001-4.001L7.828 9.243a5 5 0 0 0 6.929 6.929ZM12 3c-1.42 0-2.779.27-4.026.76l3.293 3.292a5 5 0 0 1 5.68 5.68l3.86 3.86A10.946 10.946 0 0 0 22.819 12C21.878 6.88 17.392 3 12 3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconEyeOffFilled24;
