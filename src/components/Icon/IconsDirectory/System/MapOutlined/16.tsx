import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMapOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m13.667 2-.107.02L10 3.4 6.071 2 2.24 3.267a.336.336 0 0 0-.24.32v10.08a.33.33 0 0 0 .333.333l.107-.02 3.631-1.38L10 14l3.76-1.267a.336.336 0 0 0 .24-.32V2.333A.33.33 0 0 0 13.667 2Zm-7 1.267L9.5 4.29v8.31l-2.833-.957V3.267Zm-3.596.876 2.572-.876v8.376L3.07 12.6V4.143Zm9.858 7.714-2.358.743V4.357L12.93 3.5v8.357Z"
      />
    </svg>
  );
};

export default IconMapOutlined16;
