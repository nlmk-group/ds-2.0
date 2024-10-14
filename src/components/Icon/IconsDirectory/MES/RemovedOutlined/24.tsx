import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRemovedOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M21 19.5H3A1.5 1.5 0 0 1 1.5 18V6A1.5 1.5 0 0 1 3 4.5h18A1.5 1.5 0 0 1 22.5 6v12a1.5 1.5 0 0 1-1.5 1.5Zm-.188-13.313H3.188v11.625h17.625V6.188ZM11.379 9a5.376 5.376 0 0 1 4.782 3.012c.174-.69.214-1.64.707-1.824.663-.247 1.24.19 1.117.934-.193 1.168-.366 1.681-.584 2.8-.154.787-.762 1.147-1.545.868-1.044-.373-1.65-.581-2.678-1.048-.645-.292-.859-.673-.421-1.256.394-.524 1.31-.125 2.068.115a3.928 3.928 0 0 0-3.446-2.101c-2.003 0-3.658 1.547-3.924 3.557-.034.257.009.943-.723.943-.753 0-.75-.69-.727-.933C6.272 11.222 8.576 9 11.378 9ZM21.75 3H2.25a.75.75 0 0 1 0-1.5h19.5a.75.75 0 1 1 0 1.5ZM2.25 21h19.5a.75.75 0 1 1 0 1.5H2.25a.75.75 0 1 1 0-1.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRemovedOutlined24;
