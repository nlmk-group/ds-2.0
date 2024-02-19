import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPechivtoFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.95 18.661H9.079V7.171h5.873v11.49Zm3.786-.545h1.984s-.22.36-.276.57c-.053.198.015.363.12.52.04.061.086.121.132.182.137.18.28.365.3.6.043.482-.276 1.012-.276 1.012H3.28s-.319-.53-.276-1.012c.02-.235.163-.42.3-.6.046-.06.092-.12.132-.182.105-.157.173-.322.12-.52-.056-.21-.276-.57-.276-.57h2.07v-1.42h1.892v-.616h-.745V7.057l3.575-3.32.642-.007.492-.725.837-.004.834.004.49.725.636.007 3.565 3.32.01 9.081v.004h-.768l.003.578h1.912l.01 1.397Zm-4.876-.546V8.263h-3.69v9.307h3.69Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPechivtoFilled24;
