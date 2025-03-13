import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconClaimsAnalysis32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.798 9.42v.895c0 .572.437 1.036.977 1.036h7.45c.54 0 .977-.464.977-1.036V9.42h1.16c.702 0 1.27.603 1.27 1.347v12.435c0 .744-.568 1.347-1.27 1.347H10.638c-.702 0-1.27-.603-1.27-1.347V10.768c0-.744.568-1.347 1.27-1.347h1.16ZM16.5 6c1.051 0 1.91.872 1.97 1.97h3.892C23.82 7.97 25 9.224 25 10.769v12.435C25 24.748 23.82 26 22.362 26H10.638C9.18 26 8 24.748 8 23.203V10.768c0-1.545 1.18-2.797 2.638-2.797h3.892C14.59 6.87 15.449 6 16.5 6Zm.794 2.093c0 .465-.356.842-.794.842-.438 0-.794-.377-.794-.842 0-.465.356-.842.794-.842.438 0 .794.377.794.842Zm-1.478 5.512h1.368v5.764h-1.368v-5.764Zm0 7.913c0-.4.306-.725.684-.725.378 0 .684.325.684.725 0 .4-.306.725-.684.725-.378 0-.684-.324-.684-.725Z"
      />
    </svg>
  );
};

export default IconClaimsAnalysis32;
