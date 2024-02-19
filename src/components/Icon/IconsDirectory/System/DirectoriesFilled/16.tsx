import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDirectoriesFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.516 12.941H3.64c-1.09 0-1.64-.548-1.64-1.65V7h12v4.29c0 1.097-.544 1.651-1.484 1.651ZM14 6H2V4.667c0-1.076.528-1.608 1.443-1.608H5c.512 0 .784.101 1.129.394l.319.271c.261.224.47.315.826.315h5.085c1.092 0 1.641.548 1.641 1.645V6Z"
      />
    </svg>
  );
};

export default IconDirectoriesFilled16;
