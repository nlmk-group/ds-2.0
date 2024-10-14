import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSoobshchestva24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M6.292 3A3.5 3.5 0 1 1 6 9.988v.021a4.28 4.28 0 0 0-4 4.27V15h2.006a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1v-1.72a6.28 6.28 0 0 1 3.52-5.643A3.5 3.5 0 0 1 6.292 3Zm1.5 3.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM12 8a4 4 0 0 0-2.983 6.665A7 7 0 0 0 5 21v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a7 7 0 0 0-4.018-6.335A4 4 0 0 0 12 8Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5Zm6-5.991a4.28 4.28 0 0 1 4 4.27V15h-2.007a1 1 0 1 0 0 2H23a1 1 0 0 0 1-1v-1.72a6.28 6.28 0 0 0-3.52-5.643A3.5 3.5 0 1 0 18 9.987v.022ZM16.207 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSoobshchestva24;
