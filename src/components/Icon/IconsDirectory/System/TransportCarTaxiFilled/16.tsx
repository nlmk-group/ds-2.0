import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTransportCarTaxiFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.667 13.333H3.333V14a.667.667 0 0 1-.666.667H2A.667.667 0 0 1 1.333 14V8L3.01 3.532a1.333 1.333 0 0 1 1.248-.865h7.486a1.333 1.333 0 0 1 1.248.865L14.667 8v6a.667.667 0 0 1-.667.667h-.667a.667.667 0 0 1-.666-.667v-.667ZM2.757 8h10.486l-1.5-4H4.257l-1.5 4Zm1.576 3.333a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7.334 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  );
};

export default IconTransportCarTaxiFilled16;
