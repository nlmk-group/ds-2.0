import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBugReportFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M21 7.556h-3.161a6.684 6.684 0 0 0-2.048-2.178l1.834-1.811L16.039 2l-2.442 2.411A6.905 6.905 0 0 0 12 4.222c-.551 0-1.08.067-1.586.19L7.96 2 6.375 3.567l1.822 1.81a6.769 6.769 0 0 0-2.036 2.179H3v2.222h2.351a7.286 7.286 0 0 0-.101 1.11V12H3v2.222h2.25v1.111c0 .378.045.745.101 1.111H3v2.223h3.161A6.762 6.762 0 0 0 12 22a6.762 6.762 0 0 0 5.839-3.333H21v-2.223h-2.351c.056-.366.101-.733.101-1.11v-1.112H21V12h-2.25v-1.111c0-.378-.045-.745-.101-1.111H21V7.556Zm-6.75 8.888h-4.5v-2.222h4.5v2.222Zm0-4.444h-4.5V9.778h4.5V12Z"
      />
    </svg>
  );
};

export default IconBugReportFilled24;
