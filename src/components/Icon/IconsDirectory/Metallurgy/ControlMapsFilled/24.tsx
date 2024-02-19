import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconControlMapsFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M21.5 18.384c0-.845-.402-1.594-1.012-2.073l-.254-6.146a2.638 2.638 0 0 0 1.03-2.093c0-1.43-1.152-2.615-2.592-2.615a2.58 2.58 0 0 0-1.723.656L12.187 4.79A2.61 2.61 0 0 0 9.724 3C8.279 3 7.117 4.19 7.117 5.623c0 .48.13.932.356 1.322l-2.755 5.352A2.618 2.618 0 0 0 2.5 14.884c0 1.434 1.162 2.623 2.606 2.623a2.57 2.57 0 0 0 1.823-.762l9.67 2.867A2.607 2.607 0 0 0 18.901 21c1.434 0 2.599-1.18 2.599-2.616Zm-4.28-8.132.214 5.964a2.67 2.67 0 0 0-.448.39l-9.528-2.83-.028-.059 2.808-5.523a2.573 2.573 0 0 0 1.069-.5l4.951 1.378c.198.482.537.893.962 1.18Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconControlMapsFilled24;
