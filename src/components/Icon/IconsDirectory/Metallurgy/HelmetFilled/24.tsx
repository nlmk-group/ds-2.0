import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelmetFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="M19.945 14v1.526c1.055 0 1.055 0 1.055 1.65 0 .826 0 1.223-.198 1.414-.198.19-.594.174-1.384.174H4.582c-.785 0-1.18 0-1.38-.197C3 18.366 3 17.96 3 17.145c0-1.62 0-1.62 1.055-1.62V14c0-1.743.56-3.4 1.619-4.791a8.074 8.074 0 0 1 2.638-2.235v4.908h1.054V6.497A1.587 1.587 0 0 1 10.946 5h2.109c.843 0 1.534.665 1.58 1.5v5.382h1.053V6.974a8.074 8.074 0 0 1 2.638 2.235 7.848 7.848 0 0 1 1.62 4.79ZM4.582 17.706h14.836c.29 0 .527 0 .527-.53s-.236-.53-.527-.53H4.582c-.29 0-.527 0-.527.53s.236.53.527.53Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHelmetFilled24;
