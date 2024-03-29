import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSettingFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M9.363 1.472a6.66 6.66 0 0 0-2.727.001 2.663 2.663 0 0 1-3.607 2.082 6.695 6.695 0 0 0-1.364 2.362 2.662 2.662 0 0 1 1.002 2.082c0 .81-.368 1.576-1 2.082.286.873.75 1.678 1.362 2.364a2.662 2.662 0 0 1 2.304.173 2.662 2.662 0 0 1 1.304 1.91c.9.187 1.828.186 2.727-.003.122-.8.601-1.502 1.303-1.906a2.662 2.662 0 0 1 2.304-.174 6.696 6.696 0 0 0 1.364-2.362A2.66 2.66 0 0 1 13.333 8a2.662 2.662 0 0 1 1-2.083 6.66 6.66 0 0 0-1.362-2.363 2.662 2.662 0 0 1-2.304-.174 2.662 2.662 0 0 1-1.304-1.908ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSettingFilled16;
