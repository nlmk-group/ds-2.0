import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormatListNumberedOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4.158 10.25h-1.58V5.562H1V4h3.158v6.25Zm0 14.844v-.782H1V22.75h4.737V29H1v-1.563h3.158v-.78h-1.58v-1.563h1.58ZM1 14.937h2.842L1 18.22v1.406h4.737v-1.563H2.895l2.842-3.28v-1.407H1v1.562Zm7.895-6.25V5.564H31v3.125H8.895Zm0 18.75H31v-3.125H8.895v3.125ZM31 18.063H8.895v-3.125H31v3.126Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFormatListNumberedOutlined32;
