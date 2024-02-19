import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPechivtoFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.967 12.44H6.052V4.782h3.915v7.66Zm2.523-.363h1.323s-.147.24-.184.38c-.035.133.01.242.08.347.027.04.058.08.089.121.09.12.186.244.2.4.028.322-.185.675-.185.675H2.187s-.213-.353-.184-.675c.013-.156.108-.28.2-.4.03-.04.06-.08.088-.12.07-.106.115-.215.08-.348-.038-.14-.184-.38-.184-.38h1.38v-.946h1.261v-.41h-.497V4.703L6.715 2.49l.428-.005.328-.484L8.029 2l.556.002.326.484.424.005 2.377 2.213.007 6.054v.002h-.512l.001.386h1.275l.007.931Zm-3.25-.364V5.508H6.78v6.205h2.46Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPechivtoFilled16;
