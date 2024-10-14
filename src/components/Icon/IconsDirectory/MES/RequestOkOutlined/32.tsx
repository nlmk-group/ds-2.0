import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRequestOkOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M26 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2Zm-.25-25.75H6.25v23.5h19.5V4.25ZM15.314 21.38l6.011-6.01 1.945 1.944-7.955 7.955-5.834-5.833 1.944-1.945 3.89 3.89ZM11 10h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2Zm10-2H11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRequestOkOutlined32;
