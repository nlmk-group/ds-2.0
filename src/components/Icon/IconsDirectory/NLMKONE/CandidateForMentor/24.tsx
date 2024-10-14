import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCandidateForMentor24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13.5 6a3 3 0 1 1 5.616 1.469A5 5 0 0 1 22 12v1a1 1 0 0 1-1 1h-4.5a1 1 0 1 1 0-2H20a3 3 0 0 0-3-3h-.5a3 3 0 0 1-3-3Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 9a4 4 0 1 1 6.983 2.665A7 7 0 0 1 16 18v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a7 7 0 0 1 4.017-6.335A3.985 3.985 0 0 1 5 9Zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-7 9a5 5 0 0 1 10 0H4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCandidateForMentor24;
