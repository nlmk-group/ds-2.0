import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMixer16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.35 5.69v2.814a.65.65 0 0 0 1.3 0V1.496c-1.87.052-3.587.36-5.09 1.594a6.995 6.995 0 0 0-1.731 8.708 7 7 0 0 0 11.99.59 6.997 6.997 0 0 0-.872-8.835l-.919.919a5.7 5.7 0 0 1 .71 7.194 5.695 5.695 0 0 1-9.763-.48A5.699 5.699 0 0 1 7.35 2.838v1.527a4.184 4.184 0 1 0 1.865 8.139 4.183 4.183 0 0 0 1.744-6.964l-.92.92a2.886 2.886 0 0 1-1.201 4.8A2.885 2.885 0 1 1 7.35 5.689Z"
      />
    </svg>
  );
};

export default IconMixer16;
