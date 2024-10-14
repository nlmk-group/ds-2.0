import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRemovedOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M28 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2Zm-.25-17.75H4.25v15.5h23.5V8.25ZM15.171 12a7.167 7.167 0 0 1 6.375 4.015c.232-.918.285-2.186.943-2.431.884-.33 1.654.254 1.49 1.246-.257 1.557-.488 2.241-.779 3.732-.205 1.05-1.016 1.53-2.06 1.158-1.393-.498-2.2-.775-3.571-1.397-.86-.39-1.145-.898-.561-1.675.525-.698 1.747-.166 2.758.154A5.237 5.237 0 0 0 15.17 14c-2.671 0-4.877 2.063-5.232 4.742-.045.344.011 1.258-.964 1.258-1.005 0-1-.919-.97-1.244C8.362 14.963 11.434 12 15.17 12ZM29 4H3a1 1 0 0 1 0-2h26a1 1 0 1 1 0 2ZM3 28h26a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRemovedOutlined32;
