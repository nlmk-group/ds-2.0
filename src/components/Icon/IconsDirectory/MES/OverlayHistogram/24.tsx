import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOverlayHistogram24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m19.685 4.735.597-.578L19.088 3l-.596.578-6.354 6.16-2.383-2.31-.596-.578-.597.578-4.965 4.813-.597.578 1.194 1.157.596-.578L9.16 9.164l2.382 2.309.597.578.596-.578 6.951-6.738Zm-2.458 7.242L21 8.367V21h-3.773v-9.023Zm-9.26 2.045-3.773 3.97V21h3.773v-6.978Zm4.492 1.925-1.81-1.684V21h3.772v-6.737l-1.962 1.684Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconOverlayHistogram24;
