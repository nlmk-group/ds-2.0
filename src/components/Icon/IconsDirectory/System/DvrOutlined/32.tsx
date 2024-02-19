import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDvrOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M4.545 5h22.91A2.558 2.558 0 0 1 30 7.556v15.333a2.558 2.558 0 0 1-2.546 2.555h-6.363V28H10.909v-2.556H4.545c-1.4 0-2.545-1.15-2.545-2.555V7.556A2.558 2.558 0 0 1 4.545 5Zm0 17.889h22.91V7.556H4.545v15.333Zm20.364-11.5h-14v2.556h14v-2.556Zm-14 5.111h14v2.556h-14V16.5Zm-1.273-5.111H7.091v2.556h2.545v-2.556ZM7.091 16.5h2.545v2.556H7.091V16.5Z"
      />
    </svg>
  );
};

export default IconDvrOutlined32;
