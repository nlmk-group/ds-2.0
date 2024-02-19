import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLocationPinaltFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15.471 24.07a1.382 1.382 0 0 1-.447-.299L9.4 18.183a9.231 9.231 0 0 1-2.557-4.74 9.181 9.181 0 0 1 .531-5.347 9.273 9.273 0 0 1 3.439-4.155A9.394 9.394 0 0 1 16 2.381c1.847 0 3.652.543 5.188 1.56a9.273 9.273 0 0 1 3.438 4.155 9.181 9.181 0 0 1 .53 5.348 9.23 9.23 0 0 1-2.556 4.739l-5.624 5.588a1.377 1.377 0 0 1-.976.403c-.181 0-.361-.035-.529-.104ZM13.25 11.626c0 .271.04.538.119.793l-.119-.793Zm.119.793c.13.425.364.815.687 1.135a2.762 2.762 0 0 0 3.472.339 2.731 2.731 0 0 0 1.04-1.291 2.704 2.704 0 0 0 .13-1.508 2.718 2.718 0 0 0-.753-1.396 2.772 2.772 0 0 0-2.997-.591 2.744 2.744 0 0 0-1.547 1.627c-.1.285-.151.587-.151.892"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M6.375 26.893h19.25c.365 0 .714.143.972.399a1.357 1.357 0 0 1 0 1.928 1.383 1.383 0 0 1-.972.399H6.375a1.38 1.38 0 0 1-.972-.4 1.357 1.357 0 0 1 0-1.927c.258-.256.607-.4.972-.4Z"
      />
    </svg>
  );
};

export default IconLocationPinaltFilled32;
