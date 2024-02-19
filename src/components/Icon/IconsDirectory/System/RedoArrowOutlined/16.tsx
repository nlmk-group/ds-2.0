import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRedoArrowOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.376 9.405H9.988v1.3h4.576V6.163h-1.3v2.414C10.192 4.337 3 4.909 1.04 10.295l1.128.41c1.634-4.494 7.716-4.927 10.207-1.3Z"
      />
    </svg>
  );
};

export default IconRedoArrowOutlined16;
