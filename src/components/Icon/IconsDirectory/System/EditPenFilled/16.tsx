import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEditPenFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12.196h3.064l8.259-8.016a.687.687 0 0 0 0-.992L11.28 1.205a.738.738 0 0 0-1.021 0L2 9.221v2.975Zm13 1.402H2V15h13v-1.402Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconEditPenFilled16;
