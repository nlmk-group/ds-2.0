import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPechivtoOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.967 12.44H6.052V4.782h3.915v7.66Zm.88 0v-.567h-.362l-.01-1.84h.516l-.006-5.012-1.94-1.806-.523-.007-.325-.48h-.34l-.326.48-.527.007L5.058 5.02v4.972h.497v1.865h-.363v.583h-.898v.363H3.08c-.053.213-.16.376-.228.469H13.15a1.344 1.344 0 0 1-.228-.469H11.77l-.003-.363h-.919Zm1.643-.363h1.323s-.147.24-.184.38c-.035.133.01.242.08.347.027.04.058.08.089.121.09.12.186.244.2.4.028.322-.185.675-.185.675H2.187s-.213-.353-.184-.675c.013-.156.108-.28.2-.4.03-.04.06-.08.088-.12.07-.106.115-.215.08-.348-.038-.14-.184-.38-.184-.38h1.38v-.946h1.261v-.41h-.497V4.703L6.715 2.49l.428-.005.328-.484L8.029 2l.556.002.326.484.424.005 2.377 2.213.007 6.054v.002h-.512l.001.386h1.275l.007.931Zm-9.677 1.554v-.002.002Zm10.375-.002-.001.002v-.002ZM9.24 11.713V5.508H6.78v6.205h2.46Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPechivtoOutlined16;
