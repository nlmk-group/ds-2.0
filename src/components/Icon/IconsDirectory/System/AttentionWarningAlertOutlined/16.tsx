import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAttentionWarningAlertOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.91 13.027 8.577 2.324A.668.668 0 0 0 8 2a.668.668 0 0 0-.576.324L1.09 13.027a.635.635 0 0 0 0 .649.67.67 0 0 0 .576.324h12.67a.668.668 0 0 0 .576-.324.635.635 0 0 0 0-.649Zm-1.727-.324H2.817L8 3.946l5.183 8.757Zm-5.848-1.946h1.33v1.297h-1.33v-1.297Zm1.33-4.54h-1.33v3.242h1.33V6.216Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAttentionWarningAlertOutlined16;
