import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDirectoriesOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M5.462 19.823h13.311c1.412 0 2.227-.83 2.227-2.475v-8.41c0-1.646-.823-2.468-2.462-2.468H10.91c-.533 0-.846-.136-1.238-.472l-.479-.407C8.676 5.151 8.268 5 7.5 5H5.164C3.792 5 3 5.799 3 7.412v9.936c0 1.653.823 2.476 2.462 2.476Zm-1.2-12.347c0-.79.408-1.19 1.16-1.19h1.749c.525 0 .839.128 1.238.48l.479.398c.51.432.925.591 1.7.591h7.935c.776 0 1.215.424 1.215 1.254v.48H4.262V7.476Zm1.215 11.062c-.784 0-1.215-.424-1.215-1.254v-6.59H19.737v6.598c0 .822-.44 1.246-1.215 1.246H5.477Z"
      />
    </svg>
  );
};

export default IconDirectoriesOutlined24;
