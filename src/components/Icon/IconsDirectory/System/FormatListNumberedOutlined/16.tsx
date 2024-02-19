import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormatListNumberedOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2.474 5h-.737V2.75H1V2h1.474v3Zm0 7.125v-.375H1V11h2.21v3H1v-.75h1.474v-.375h-.737v-.75h.737ZM1 7.25h1.326L1 8.825V9.5h2.21v-.75H1.885l1.327-1.575V6.5H1v.75Zm3.684-3v-1.5H15v1.5H4.684Zm0 9H15v-1.5H4.684v1.5ZM15 8.75H4.684v-1.5H15v1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFormatListNumberedOutlined16;
