import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAttentionWarningAlertFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m17.152 4.676 12.67 22.297a1.368 1.368 0 0 1-.487 1.846 1.314 1.314 0 0 1-.665.181H3.33a1.32 1.32 0 0 1-.665-.181 1.341 1.341 0 0 1-.487-.495 1.368 1.368 0 0 1 0-1.351l12.67-22.297a1.34 1.34 0 0 1 .487-.495 1.314 1.314 0 0 1 1.817.495ZM14.67 22.243v2.703h2.66v-2.703h-2.66Zm0-9.46v6.758h2.66v-6.757h-2.66Z"
      />
    </svg>
  );
};

export default IconAttentionWarningAlertFilled32;
