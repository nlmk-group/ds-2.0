import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHillsView16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.17 9.877h.705c.345 0 .625.251.625.561 0 .31-.28.562-.625.562H1.125C.78 11 .5 10.749.5 10.438c0-.31.28-.561.625-.561h.67L4.057 5.36c.317-.632 1.323-.613 1.61.03l.474 1.065L7.486 3.49c.3-.665 1.353-.65 1.63.023l1.451 3.52.11-.266c.265-.634 1.238-.691 1.592-.094l1.902 3.204Zm-2.43 0h1.297l-1.52-2.562-.42 1.005.642 1.557Zm-8.848 0H4.59l1.007-2.223-.75-1.683-1.955 3.906Zm2.778 0h5.003L8.29 4.097l-2.62 5.78Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconHillsView16;
