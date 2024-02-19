import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDirectoriesOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M3.641 12.941h8.875c.94 0 1.484-.554 1.484-1.65V5.684c0-1.097-.549-1.645-1.641-1.645H7.274c-.356 0-.565-.091-.826-.315l-.32-.271C5.785 3.16 5.513 3.059 5 3.059H3.443C2.528 3.059 2 3.59 2 4.667v6.624c0 1.102.549 1.65 1.641 1.65Zm-.8-8.232c0-.527.272-.793.774-.793H4.78c.35 0 .56.085.826.32l.32.266c.339.287.616.394 1.133.394h5.29c.517 0 .81.282.81.836v.32H2.84V4.708Zm.81 7.375c-.522 0-.81-.282-.81-.836V6.855H13.16v4.398c0 .549-.293.83-.81.83H3.651Z"
      />
    </svg>
  );
};

export default IconDirectoriesOutlined16;
