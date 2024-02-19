import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStaffUnitFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M4.5 4.5C4.5 2.566 6.066 1 8 1s3.5 1.566 3.5 3.5S9.934 8 8 8a3.499 3.499 0 0 1-3.5-3.5ZM1 12.375c0-2.328 4.664-3.5 7-3.5.402 0 .873.035 1.378.104A3.99 3.99 0 0 0 8 12a3.99 3.99 0 0 0 1.354 3H1v-2.625Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M11.354 9.064a3.317 3.317 0 0 1 1.292 0c.057.36.284.676.617.858a1.32 1.32 0 0 0 1.091.078c.29.308.51.67.645 1.063-.3.228-.474.573-.473.937 0 .38.185.717.474.937A2.98 2.98 0 0 1 14.354 14a1.32 1.32 0 0 0-1.091.078c-.332.182-.56.498-.617.858a3.315 3.315 0 0 1-1.292.001 1.199 1.199 0 0 0-.617-.86A1.32 1.32 0 0 0 9.646 14c-.29-.309-.51-.67-.645-1.064.3-.227.473-.572.473-.936 0-.365-.174-.71-.474-.937A2.98 2.98 0 0 1 9.646 10a1.32 1.32 0 0 0 1.091-.078 1.2 1.2 0 0 0 .617-.858ZM12 12.9c.523 0 .947-.403.947-.9s-.424-.9-.947-.9c-.523 0-.947.403-.947.9s.424.9.947.9Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconStaffUnitFilled16;
