import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHealthProgram24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M17 4H6v15h4.14c.15.71.39 1.38.72 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v6.15c-.48-.1-.99-.15-1.5-.15-.161 0-.313.009-.473.018L17 10.02V4Zm-2 4H8V6h7v2Zm-7 4h4v-2H8v2Zm6.34 0c-1.1-.05-2.07.5-2.69 1.3l-.01-.01c-.6.8-.78 1.66-.62 2.51.15.8.58 1.51 1.05 2.11.73.93 1.76 1.8 2.5 2.42a30.409 30.409 0 0 1 .5.43c.53.47 1.32.47 1.85 0 .116-.107.252-.221.402-.348a37.126 37.126 0 0 0 .208-.175c.73-.62 1.696-1.442 2.39-2.327.47-.6.9-1.31 1.05-2.11.16-.84-.01-1.71-.62-2.5-.62-.8-1.59-1.34-2.69-1.3-.7.03-1.25.29-1.66.59-.41-.3-.96-.56-1.66-.59Zm-1.1 2.52c.27-.36.65-.53 1.02-.52h-.03c.24 0 .44.11.62.25a1.37 1.37 0 0 1 .247.242c.007.01.014.02.023.028 0 0 .01.02.02.02.4.59 1.27.59 1.67 0 0 0 0-.01.01-.02a.32.32 0 0 1 .06-.07c.05-.06.12-.13.21-.2.18-.14.38-.24.62-.25h.01c.37-.01.75.16 1.02.52.26.33.3.62.25.92-.06.34-.27.75-.65 1.23-.569.724-1.334 1.373-2.042 1.975l-.078.065a2.093 2.093 0 0 1-.145.129 4.52 4.52 0 0 0-.085.071 2.006 2.006 0 0 0-.145-.128 4.52 4.52 0 0 1-.085-.072c-.73-.61-1.53-1.29-2.12-2.04-.37-.47-.59-.89-.65-1.23-.05-.29-.01-.58.25-.92Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHealthProgram24;
