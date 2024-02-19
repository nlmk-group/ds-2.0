import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDNSOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.667 10v2.667H3.333V10h9.334Zm.666-1.333H2.667c-.367 0-.667.3-.667.666v4c0 .367.3.667.667.667h10.666c.367 0 .667-.3.667-.667v-4c0-.366-.3-.666-.667-.666Zm-8.666 3.666c-.547 0-1-.446-1-1 0-.553.453-1 1-1 .546 0 1 .447 1 1 0 .554-.447 1-1 1Zm8-9V6H3.333V3.333h9.334ZM13.333 2H2.667C2.3 2 2 2.3 2 2.667v4c0 .366.3.666.667.666h10.666c.367 0 .667-.3.667-.666v-4C14 2.3 13.7 2 13.333 2ZM4.667 5.667c-.547 0-1-.447-1-1 0-.554.453-1 1-1 .546 0 1 .453 1 1 0 .546-.447 1-1 1Z"
      />
    </svg>
  );
};

export default IconDNSOutlined16;
