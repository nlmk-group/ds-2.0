import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFolderHumanFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.933 4h-5.6l-1.4-1.333h-4.2c-.77 0-1.393.6-1.393 1.333l-.007 8c0 .733.63 1.333 1.4 1.333h11.2c.77 0 1.4-.6 1.4-1.333V5.333c0-.733-.63-1.333-1.4-1.333Zm-3.5 2c.77 0 1.4.6 1.4 1.333 0 .734-.63 1.334-1.4 1.334-.77 0-1.4-.6-1.4-1.334 0-.733.63-1.333 1.4-1.333Zm-2.8 4.667v.666h5.6v-.666c0-.887-1.869-1.334-2.8-1.334-.93 0-2.8.447-2.8 1.334Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFolderHumanFilled16;
