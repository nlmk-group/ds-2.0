import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDeleteBinFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.5 3.8H15v1.4h-1.4v9.1a.7.7 0 0 1-.7.7H3.1a.7.7 0 0 1-.7-.7V5.2H1V3.8h3.5V1.7a.7.7 0 0 1 .7-.7h5.6a.7.7 0 0 1 .7.7v2.1Zm.7 1.4H3.8v8.4h8.4V5.2ZM5.9 2.4v1.4h4.2V2.4H5.9Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M12.2 5.2H3.8v8.4h8.4V5.2Zm-6.3 7.233V6.367h.7v6.066h-.7Zm1.867 0V6.367h.7v6.066h-.7Zm1.866 0V6.367h.7v6.066h-.7Z"
      />
    </svg>
  );
};

export default IconDeleteBinFilled16;
