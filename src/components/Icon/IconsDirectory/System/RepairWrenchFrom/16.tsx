import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRepairWrenchFrom16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5.112 1.716 2.94 3.89H8.3v1.013H2.94l2.173 2.173-.716.716L1 4.396 4.396 1l.716.716Zm8.124 3.513A4.195 4.195 0 0 0 6.75 9.736l-1.385 1.385a2.098 2.098 0 0 0 2.967 2.967l1.384-1.384c1.4.373 2.956.011 4.054-1.087a4.196 4.196 0 0 0 .454-5.399l-.938.939-.08.08-.92.918-.07-.07-.849-.849-.07-.07.92-.919.08-.08.938-.938Zm-4.48 1.373a2.89 2.89 0 0 1 2.116-.847l-.493.492-.919.92.92.919.988.989.92.919.919-.92.492-.492a2.895 2.895 0 0 1-3.647 2.866l-.724-.194-.53.53-1.384 1.385a.798.798 0 0 1-1.129-1.129l1.385-1.384.53-.53-.194-.725a2.894 2.894 0 0 1 .75-2.799Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconRepairWrenchFrom16;
