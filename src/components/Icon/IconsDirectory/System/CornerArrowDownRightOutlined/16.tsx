import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowDownRightOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 2a1 1 0 0 1 1 1v.962c0 1.172 0 1.99.053 2.628.051.626.147.99.288 1.266.3.588.777 1.066 1.365 1.366.277.14.64.236 1.266.288.638.052 1.456.053 2.628.053h1.986l-1.73-1.73a1 1 0 0 1 1.414-1.415l3.437 3.437a1 1 0 0 1 0 1.415l-3.437 3.437a1 1 0 0 1-1.415-1.414l1.73-1.73H9.558c-1.119 0-2.019 0-2.748-.06-.75-.061-1.405-.19-2.01-.5a5.125 5.125 0 0 1-2.24-2.239c-.309-.605-.438-1.261-.5-2.01C2 6.023 2 5.123 2 4.004V3a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCornerArrowDownRightOutlined16;
