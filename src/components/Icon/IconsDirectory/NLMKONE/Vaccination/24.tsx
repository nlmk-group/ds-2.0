import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVaccination24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="m16.77 2 .707.707 1.39 1.392a1.708 1.708 0 0 1 .038.037l1.392 1.392.707.708L19.59 7.65l-.707-.707-.704-.704-1.406 1.407 2.817 2.817.707.708-1.414 1.414-.707-.707-.867-.867-8.047 8.05a1 1 0 0 1-1.414 0l-1.246-1.247L3 21.417V18.51l2.182-2.118-1.237-1.236a1 1 0 0 1 0-1.415l8.047-8.05-.867-.866-.707-.707 1.414-1.415.707.707 2.82 2.822 1.406-1.407-.703-.703-.706-.708L16.77 2ZM6.066 14.448l7.335-7.337 2.489 2.49-7.335 7.338-2.489-2.49Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconVaccination24;
