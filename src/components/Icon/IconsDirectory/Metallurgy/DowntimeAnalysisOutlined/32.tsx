import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDowntimeAnalysisOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M16 28c6.565 0 12-5.152 12-11.374 0-2.598-.953-5.007-2.541-6.936l.918-.88c.27-.257.423-.603.423-.904 0-.624-.53-1.126-1.212-1.126-.4 0-.682.112-.965.368l-.894.836a12.294 12.294 0 0 0-6.482-2.665V4.227c0-.67-.553-1.227-1.259-1.227-.682 0-1.259.558-1.259 1.227v1.092C8.741 5.933 4 10.817 4 16.626 4 22.848 9.447 28 16 28Zm0-1.896c-5.553 0-9.988-4.215-9.988-9.478 0-5.252 4.423-9.478 9.976-9.478 5.553 0 10 4.226 10.012 9.478.012 5.263-4.447 9.478-10 9.478Zm0-7.671c1.047 0 1.894-.803 1.894-1.796 0-.702-.423-1.315-1.082-1.617V9.48c0-.435-.365-.77-.824-.77-.459 0-.811.335-.811.77v5.53c-.648.324-1.071.926-1.071 1.628 0 .993.835 1.796 1.894 1.796Z"
      />
    </svg>
  );
};

export default IconDowntimeAnalysisOutlined32;
