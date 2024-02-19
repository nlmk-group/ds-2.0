import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTuneControlFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 1a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm0 25.111v-2.889h8.667v2.89H3ZM3 8.778v-2.89h14.444v2.89H3ZM17.444 26.11V29h-2.888v-8.667h2.888v2.89H29v2.888H17.444ZM8.778 14.556v-2.89h2.889v8.667h-2.89v-2.889H3v-2.888h5.778Zm20.222 0v2.888H14.556v-2.888H29Zm-5.778-2.89h-2.889V3h2.89v2.889H29v2.889h-5.778v2.889Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconTuneControlFilled32;
