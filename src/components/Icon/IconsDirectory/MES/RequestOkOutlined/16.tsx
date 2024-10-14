import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRequestOkOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13 15H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Zm-.125-12.875h-9.75v11.75h9.75V2.125ZM7.657 10.69l3.005-3.005.973.972-3.978 3.978L4.74 9.718l.973-.972 1.944 1.944ZM5.5 5h3a.5.5 0 1 1 0 1h-3a.5.5 0 1 1 0-1Zm5-1h-5a.5.5 0 1 1 0-1h5a.5.5 0 0 1 0 1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRequestOkOutlined16;
