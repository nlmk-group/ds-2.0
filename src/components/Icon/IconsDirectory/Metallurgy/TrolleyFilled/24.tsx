import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTrolleyFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.106 6.22c0-1.282-1.03-2.326-2.3-2.326-1.269 0-2.3 1.044-2.3 2.326v10.108a.087.087 0 0 1-.062.081c-.216.07-.42.169-.605.294a.116.116 0 0 1-.113.005c-.036-.017-.056-.046-.056-.08V8.577a.288.288 0 0 0-.287-.29H4.015a.288.288 0 0 0-.287.29v9.394a.076.076 0 0 1-.075.077h-.472c-.16 0-.287.13-.287.29v.732c0 .158.127.29.287.29h10.63c.031 0 .065.022.078.063a2.383 2.383 0 0 0 2.267 1.684c1.312 0 2.377-1.08 2.377-2.404a2.405 2.405 0 0 0-1.665-2.293.087.087 0 0 1-.063-.08V6.218c0-.56.45-1.014 1.002-1.014.55 0 1.001.454 1.001 1.015v.88c0 .16.127.29.287.29h.724c.16 0 .287-.13.287-.29v-.88Zm-3.95 11.39c.593 0 1.078.489 1.078 1.092 0 .604-.485 1.093-1.078 1.093a1.087 1.087 0 0 1-1.078-1.093c0-.603.485-1.092 1.078-1.092ZM9.52 11.563a.286.286 0 0 0-.407 0l-1.899 1.921a.291.291 0 0 0 0 .409l.512.518a.286.286 0 0 0 .407 0l.407-.412a.074.074 0 0 1 .128.054v2.117c0 .159.127.29.287.29h.724c.16 0 .287-.131.287-.29v-2.117c0-.07.082-.1.127-.055l.407.413a.286.286 0 0 0 .407 0l.512-.518a.29.29 0 0 0 0-.409L9.52 11.563Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTrolleyFilled24;
