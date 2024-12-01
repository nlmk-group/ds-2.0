import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRadarChart32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.187 5.307a2.3 2.3 0 0 0 .494 1.427l-2.968 7.808a2.305 2.305 0 0 0-2.13 2.301 2.302 2.302 0 0 0 4.387.98h5.04a2.302 2.302 0 0 0 4.386-.98 2.3 2.3 0 0 0-.332-1.194l2.292-3.446A2.305 2.305 0 0 0 28 9.921a2.305 2.305 0 0 0-3.639-1.878L18.752 4.88A2.304 2.304 0 0 0 16.49 3a2.305 2.305 0 0 0-2.302 2.307Zm2.302 2.307c.69 0 1.308-.303 1.73-.784l5.183 2.922a2.315 2.315 0 0 0 .326 1.364l-2.292 3.445a2.302 2.302 0 0 0-2.427 1.301h-5.04a2.313 2.313 0 0 0-.428-.622l2.9-7.626h.048Zm-4.652-.67-.215.57-.074.194-3.912 2.264a2.668 2.668 0 0 0-1.331 2.31v7.589c0 .953.507 1.833 1.33 2.31l6.559 3.794a2.656 2.656 0 0 0 2.661 0l6.558-3.794a2.668 2.668 0 0 0 1.331-2.31v-2.177l.615-.924 1.38-2.068c.104-.015.208-.034.31-.057v6.56c0 .952-.507 1.833-1.33 2.31l-8.864 5.128a2.656 2.656 0 0 1-2.661 0L5.33 23.514A2.669 2.669 0 0 1 4 21.204V10.948c0-.953.507-1.834 1.33-2.31L11.55 5.04a3.997 3.997 0 0 0 .289 1.904Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRadarChart32;
