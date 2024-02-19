import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPictureInPictureOff16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M6.833 1H15v14H1V1h5.833ZM2.556 7.222v6.222h9.788l-2.789-2.788v1.233H8V8h3.889v1.556h-1.234l2.79 2.789v-9.79H7.221v4.667H2.556Zm0-4.666h3.11v3.11h-3.11v-3.11Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPictureInPictureOff16;
