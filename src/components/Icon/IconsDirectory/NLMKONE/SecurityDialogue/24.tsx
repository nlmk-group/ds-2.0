import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSecurityDialogue24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M4 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.94a1 1 0 0 1-1 1H6.85a3 3 0 0 0-2.47 1.297L4 14.79V5Zm1-3a3 3 0 0 0-3 3v11.395c0 1.471 1.899 2.063 2.735.851l1.292-1.873a1 1 0 0 1 .823-.432H15a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm9 6H6V6h8v2Zm-8 3h8V9H6v2Zm14-3a1 1 0 1 1 2 0v12.482c0 1.447-1.846 2.055-2.706.892l-1.499-2.027a1 1 0 0 0-.804-.406H10a1 1 0 1 1 0-2h6.991a3 3 0 0 1 2.413 1.217l.596.806V8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSecurityDialogue24;
