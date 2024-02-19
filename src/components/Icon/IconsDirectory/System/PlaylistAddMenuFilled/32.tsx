import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPlaylistAddMenuFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3Zm15.625 2.77H2.875v2.637h15.75V6.769Zm0 5.274H2.875v2.637h15.75v-2.637Zm2.625 0h2.625v5.274h5.25v2.638h-5.25v5.275H21.25v-5.275H16v-2.637h5.25v-5.275ZM2.875 19.956h10.5v-2.637h-10.5v2.637Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPlaylistAddMenuFilled32;
