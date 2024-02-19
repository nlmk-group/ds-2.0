import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTuneControlOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1 11.889v1.555h4.667V11.89H1Zm0-9.333V4.11h7.778V2.556H1ZM8.778 15v-1.556H15V11.89H8.778v-1.556H7.222V15h1.556ZM4.11 5.667v1.555H1v1.556h3.111v1.555h1.556V5.667H4.11ZM15 8.777V7.223H7.222v1.556H15Zm-4.667-3.11h1.556V4.11H15V2.556h-3.111V1h-1.556v4.667Z"
      />
    </svg>
  );
};

export default IconTuneControlOutlined16;
