import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPechivtoOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.934 24.881h-7.83V9.562h7.83v15.32Zm1.76 0-.002-1.134h-.723l-.017-3.68h1.03l-.012-10.025-3.88-3.613-1.046-.012-.65-.96-.337-.002-.343.001-.653.961-1.053.012-3.891 3.614v9.943h.994v3.73h-.728v1.165H8.588v.728h-2.43c-.105.426-.32.75-.456.936h20.596a2.688 2.688 0 0 1-.456-.936h-2.304l-.006-.728h-1.837Zm3.287-.727h2.646s-.294.481-.368.76c-.07.265.02.484.16.695.053.08.114.16.176.241.183.24.372.487.4.8.056.644-.368 1.35-.368 1.35H4.373s-.425-.706-.368-1.35c.028-.313.217-.56.4-.8.062-.08.122-.16.176-.241.14-.21.23-.43.16-.695-.074-.279-.368-.76-.368-.76h2.76v-1.892h2.523v-.821h-.994V9.408l4.768-4.426.855-.01.657-.967L16.057 4l1.112.005.654.966.847.01 4.754 4.427.014 12.108v.005h-1.025l.004.771h2.55l.014 1.862ZM5.626 27.262l-.002-.004.002.004Zm12.853-3.835v-12.41h-4.92v12.41h4.92Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPechivtoOutlined32;
