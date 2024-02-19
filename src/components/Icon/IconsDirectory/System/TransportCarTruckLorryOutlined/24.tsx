import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTransportCarTruckLorryOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.965 17a3.5 3.5 0 0 1-6.93 0H1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3l3 4.056V17h-2.035a3.5 3.5 0 0 1-6.93 0h-5.07ZM15 6H3v8.05a3.5 3.5 0 0 1 5.663.95h5.674c.168-.353.393-.674.663-.95V6Zm2 6h4v-.285L18.992 9H17v3Zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 16.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
      />
    </svg>
  );
};

export default IconTransportCarTruckLorryOutlined24;
