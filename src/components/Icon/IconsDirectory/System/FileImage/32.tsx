import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileImage32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M17.358 13.604c.293 0 .602.125.768.395l4.754 7.741.052.099a.8.8 0 0 1-.05.737.87.87 0 0 1-.323.31.93.93 0 0 1-.448.114H9.89a.93.93 0 0 1-.453-.117.86.86 0 0 1-.326-.317.8.8 0 0 1-.11-.427.8.8 0 0 1 .134-.42l3.395-5.161a.9.9 0 0 1 .322-.29.93.93 0 0 1 .864-.001c.131.069.242.169.321.289l.508.772L16.589 14c.166-.269.477-.395.77-.396m-5.873 7.718h3.598l-1.799-2.734zm4.124-2.382 1.565 2.382h3.395l-3.21-5.23zM11.926 11c1.243 0 2.246.96 2.246 2.129s-1.003 2.13-2.246 2.13-2.246-.96-2.246-2.13S10.682 11 11.926 11m-.196 4.056.196.009a2 2 0 0 1-.2-.01zm.196-2.378a.48.48 0 0 0-.331.13.443.443 0 0 0 0 .642.483.483 0 0 0 .66 0c.09-.084.14-.2.14-.321a.44.44 0 0 0-.14-.321.48.48 0 0 0-.33-.13"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M29 9.637v17.817c0 1.4-1.17 2.546-2.6 2.546H5.588C4.158 30 3 28.854 3 27.454l.014-22.908C3.014 3.146 4.17 2 5.6 2h15.6zM5.6 27.454h20.8V10.91h-4.55c-1.076 0-1.95-.855-1.95-1.909V4.546H5.6z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFileImage32;
