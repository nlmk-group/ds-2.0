import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWarningFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3.611 4h7.333c.337 0 .612.275.612.611V6.75L14 4.306v6.722l-2.444-2.445v2.14a.613.613 0 0 1-.612.61H3.611a.613.613 0 0 1-.611-.61V4.61c0-.335.275-.61.611-.61Zm6.722 6.111V5.222h-6.11v4.89h6.11Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconWarningFilled16;
