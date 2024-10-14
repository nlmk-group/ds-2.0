import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLunch24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M12 3c5.72 0 10.02 2 10 6v1H2V9c0-4 4.29-6 10-6Zm0 2c-3.39 0-6.99.81-7.82 3h15.66c-.13-.37-.35-.7-.65-1.01C17.93 5.73 15.31 5 12 5Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M18.66 11.5c-1.085 0-1.61.31-2.075.584-.372.22-.705.416-1.255.416-.525 0-.863-.195-1.241-.412-.48-.276-1.022-.588-2.09-.588-1.084 0-1.609.31-2.074.584-.371.22-.705.416-1.255.416-.525 0-.863-.195-1.241-.412-.48-.276-1.022-.588-2.09-.588-1.084 0-1.609.31-2.074.584-.371.22-.705.416-1.255.416v2c1.062 0 1.615-.313 2.102-.588.384-.218.728-.412 1.248-.412.525 0 .863.195 1.24.412.48.276 1.022.588 2.09.588 1.085 0 1.61-.31 2.075-.584.371-.22.705-.416 1.255-.416.525 0 .863.195 1.24.412.48.276 1.022.588 2.09.588 1.085 0 1.61-.31 2.075-.584.371-.22.705-.416 1.255-.416.527 0 .861.192 1.238.408.473.272 1.012.58 2.082.592l-.01-1.98c-.695-.142-1.092-.352-1.456-.544-.48-.253-.902-.476-1.874-.476Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3H2v3Zm2 0v-1h16v1H4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconLunch24;
