import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLegalSupportWindow24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13 3a1 1 0 1 0-2 0v1H4a1 1 0 0 0 0 2h.429l-2.362 6.141A1 1 0 0 0 2 12.5a3.5 3.5 0 1 0 7 0 1 1 0 0 0-.067-.359L6.571 6H11v10.5a1 1 0 1 0 2 0V6h4.429l-2.362 6.141A1 1 0 0 0 15 12.5a3.5 3.5 0 1 0 7 0 1 1 0 0 0-.067-.359L19.571 6H20a1 1 0 1 0 0-2h-7V3ZM6 20a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm-.5-6a1.5 1.5 0 0 0 1.491-1.337L5.5 8.786l-1.491 3.877A1.5 1.5 0 0 0 5.5 14Zm14.06-.44a1.5 1.5 0 0 1-2.551-.897L18.5 8.786l1.491 3.877a1.5 1.5 0 0 1-.43.898Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconLegalSupportWindow24;
