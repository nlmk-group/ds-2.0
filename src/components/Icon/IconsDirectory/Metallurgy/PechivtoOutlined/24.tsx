import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPechivtoOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.95 18.661H9.079V7.171h5.873v11.49Zm1.32 0v-.851h-.543l-.013-2.76h.772l-.009-7.518-2.909-2.71-.785-.01-.487-.72-.253-.001-.257.001-.49.72-.79.01-2.918 2.71v7.458h.745v2.797h-.546v.874H6.441v.545H4.618c-.079.32-.239.563-.341.703h15.446a2.017 2.017 0 0 1-.341-.703h-1.729l-.004-.545H16.27Zm2.466-.545h1.984s-.22.36-.276.57c-.053.198.015.363.12.52.04.061.086.121.132.182.137.18.28.365.3.6.043.482-.276 1.012-.276 1.012H3.28s-.319-.53-.276-1.012c.02-.235.163-.42.3-.6.046-.06.092-.12.132-.182.105-.157.173-.322.12-.52-.056-.21-.276-.57-.276-.57h2.07v-1.42h1.892v-.616h-.745V7.057l3.575-3.32.642-.007.492-.725.837-.004.834.004.49.725.636.007 3.565 3.32.01 9.081v.004h-.768l.003.578h1.912l.01 1.397ZM4.22 20.446l-.002-.002.002.002Zm15.562-.002-.001.002.002-.002ZM13.86 17.57V8.263h-3.69v9.307h3.69Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPechivtoOutlined24;
