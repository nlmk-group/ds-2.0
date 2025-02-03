import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBox24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.729 1.19a1.492 1.492 0 0 0-1.457 0l-8.5 4.753A1.512 1.512 0 0 0 2 7.263v9.474c0 .548.295 1.053.772 1.32l8.5 4.753a1.492 1.492 0 0 0 1.457 0l8.5-4.753c.476-.267.771-.772.771-1.32V7.263c0-.548-.295-1.053-.771-1.32l-8.5-4.753ZM4 8.678v7.763l7 3.914v-7.763L4 8.678Zm16 0v7.763l-7 3.914v-7.763l2.518-1.408c.088.465.494.816.982.816.552 0 1-.45 1-1.007v-.917L20 8.678Zm-5.514.78L7.742 5.467 5.059 6.967 12 10.848l2.486-1.39ZM9.771 4.333 12 3.086l6.94 3.881-2.426 1.357-6.742-3.992Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBox24;
