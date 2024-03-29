import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKPEOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M5.319 12.188a.425.425 0 0 0 0-.59.403.403 0 0 0-.582 0l-.58.6a5.255 5.255 0 0 1-1.184-2.955h.824c.23 0 .41-.191.41-.419a.414.414 0 0 0-.41-.418h-.823a5.28 5.28 0 0 1 1.184-2.954l.579.598a.404.404 0 0 0 .582 0 .425.425 0 0 0 0-.59l-.585-.603A4.937 4.937 0 0 1 7.591 3.63v.854c0 .227.18.418.41.418.229 0 .409-.19.409-.418V3.63a4.937 4.937 0 0 1 2.856 1.227l-.585.604a.425.425 0 0 0 0 .589.404.404 0 0 0 .582 0l.579-.598a5.28 5.28 0 0 1 1.184 2.954h-.823c-.23 0-.41.19-.41.418 0 .228.18.419.41.419h.824a5.254 5.254 0 0 1-1.183 2.955l-.58-.6a.403.403 0 0 0-.583 0 .425.425 0 0 0 0 .59l.883.912a.404.404 0 0 0 .582 0 6.108 6.108 0 0 0 1.716-4.276 6.128 6.128 0 0 0-1.684-4.237.405.405 0 0 0-.069-.072A5.752 5.752 0 0 0 8 2.775c-1.6 0-3.052.666-4.11 1.74a.421.421 0 0 0-.068.072 6.129 6.129 0 0 0-1.684 4.237c0 1.512.575 3.272 1.74 4.3a.404.404 0 0 0 .547-.012l.894-.924Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        d="M9 8.76c.32.46.372 1.036.151 1.488a1.273 1.273 0 0 1-1.144.732c-.169 0-.361-.036-.537-.108a1.014 1.014 0 0 1-.455-.342c-.319-.46-.381-1.017-.151-1.488a1.273 1.273 0 0 1 1.184-.731L8.91 6.06a.433.433 0 0 1 .572-.253.447.447 0 0 1 .242.585L8.87 8.623A.668.668 0 0 1 9 8.76Zm-1.354.688c-.145.296.052.628.361.628.151 0 .29-.087.362-.234a.44.44 0 0 0-.215-.603.403.403 0 0 0-.509.208Z"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconKPEOutlined16;
