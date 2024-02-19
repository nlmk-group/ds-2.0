import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBusinessOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.778 4.111V1H0v14h15.556V4.111H7.778ZM3.11 13.444H1.556V11.89H3.11v1.555Zm0-3.11H1.556V8.777H3.11v1.555Zm0-3.112H1.556V5.667H3.11v1.555Zm0-3.11H1.556V2.555H3.11V4.11Zm3.111 9.332H4.667V11.89h1.555v1.555Zm0-3.11H4.667V8.777h1.555v1.555Zm0-3.112H4.667V5.667h1.555v1.555Zm0-3.11H4.667V2.555h1.555V4.11ZM14 13.443H7.778V11.89h1.555v-1.556H7.778V8.778h1.555V7.222H7.778V5.667H14v7.777Zm-1.556-6.222H10.89v1.556h1.555V7.222Zm0 3.111H10.89v1.556h1.555v-1.556Z"
      />
    </svg>
  );
};

export default IconBusinessOutlined16;
