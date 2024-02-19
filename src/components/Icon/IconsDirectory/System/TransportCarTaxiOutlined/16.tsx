import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTransportCarTaxiOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.667 13.333H3.333V14a.666.666 0 0 1-.666.666H2A.666.666 0 0 1 1.333 14V7.333l1.654-3.859a1.333 1.333 0 0 1 1.226-.808h7.574a1.333 1.333 0 0 1 1.225.808l1.655 3.86V14a.667.667 0 0 1-.667.666h-.667a.667.667 0 0 1-.666-.666v-.667ZM2.667 8.667V12h10.666V8.667H2.667ZM2.783 7.333h10.433L11.787 4H4.213L2.785 7.333h-.001Zm1.55 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm7.334 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      />
    </svg>
  );
};

export default IconTransportCarTaxiOutlined16;
