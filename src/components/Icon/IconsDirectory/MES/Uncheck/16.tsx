import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUncheck16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m3.331 12.103-1.614 1.614.565.566 1.615-1.614c.316.209.695.331 1.103.331h6a2 2 0 0 0 2-2V5a1.99 1.99 0 0 0-.332-1.103l1.615-1.614-.566-.566-1.614 1.614A1.99 1.99 0 0 0 11 3H5a2 2 0 0 0-2 2v6c0 .408.122.787.331 1.103Zm1.462-.33A.798.798 0 0 0 5 11.8h6a.8.8 0 0 0 .8-.8V5a.798.798 0 0 0-.027-.207l-6.98 6.98Zm6.414-7.546-6.98 6.98A.8.8 0 0 1 4.2 11V5a.8.8 0 0 1 .8-.8h6a.8.8 0 0 1 .207.027Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconUncheck16;
