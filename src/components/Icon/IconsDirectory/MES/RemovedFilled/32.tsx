import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRemovedFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M28 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2Zm-5.51-12.416c-.659.245-.712 1.513-.944 2.431A7.167 7.167 0 0 0 15.171 12c-3.736 0-6.808 2.963-7.167 6.756-.03.325-.035 1.244.971 1.244.977 0 .92-.914.966-1.258C10.293 16.064 12.5 14 15.17 14a5.238 5.238 0 0 1 4.594 2.802c-1.011-.32-2.233-.852-2.758-.154-.583.777-.298 1.285.561 1.675 1.372.623 2.18.9 3.572 1.397 1.044.373 1.855-.108 2.06-1.158.291-1.49.521-2.175.779-3.732.163-.992-.605-1.575-1.49-1.246ZM29 4H3a1 1 0 0 1 0-2h26a1 1 0 1 1 0 2ZM3 28h26a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRemovedFilled32;
