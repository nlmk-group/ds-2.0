import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTelegramFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M21.412 3.247c-.337-.286-.867-.327-1.416-.107-.577.232-16.318 6.984-16.959 7.26-.116.04-1.134.42-1.03 1.266.094.762.912 1.078 1.012 1.115l4.002 1.37c.266.884 1.244 4.145 1.46 4.841.136.434.356 1.005.741 1.122.339.13.675.012.893-.16l2.447-2.269 3.95 3.08.094.057c.268.119.525.178.77.178.19 0 .371-.035.545-.107.592-.243.828-.806.853-.87l2.95-15.335c.18-.82-.07-1.236-.312-1.44ZM10.55 14.7 9.2 18.3l-1.35-4.5L18.2 6.15l-7.65 8.55Z"
      />
    </svg>
  );
};

export default IconTelegramFilled24;
