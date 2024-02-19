import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFullScreenExitCloseOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="M1 4.889h3.889V1h1.555v5.444H1V4.89Zm3.889 6.222H1V9.444h5.556V15H4.889v-3.889ZM9.556 15h1.555v-3.889H15V9.444H9.556V15ZM11.11 1v3.889H15v1.667H9.556V1h1.555Z"
        fill={htmlColor || 'currentColor'}
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFullScreenExitCloseOutlined16;
