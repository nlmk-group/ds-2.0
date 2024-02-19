import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowDownRightFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 2a1 1 0 0 1 1 1v.962c0 1.172 0 1.99.053 2.628.051.626.147.99.288 1.266.3.588.777 1.066 1.365 1.366.277.14.64.236 1.266.288.631.051 1.439.052 2.59.053V7.124a1 1 0 0 1 1.708-.707l3.437 3.437a1 1 0 0 1 0 1.415l-3.437 3.437A1 1 0 0 1 9.563 14v-2.438h-.006c-1.119 0-2.019 0-2.748-.059-.75-.061-1.405-.19-2.01-.5a5.125 5.125 0 0 1-2.24-2.239c-.309-.605-.438-1.261-.5-2.01C2 6.023 2 5.123 2 4.004V3a1 1 0 0 1 1-1Zm8.563 9.563v.023l.023-.024h-.024Zm.023-2h-.024v-.024l.024.024Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCornerArrowDownRightFilled16;
