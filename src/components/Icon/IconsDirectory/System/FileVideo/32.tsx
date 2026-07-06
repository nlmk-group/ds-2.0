import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileVideo32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11 14.166c0-1.039.73-1.462 1.63-.945l6.694 3.843c.901.517.901 1.355 0 1.872l-6.693 3.843c-.9.517-1.631.094-1.631-.946z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M29 9.637v17.817c0 1.4-1.17 2.546-2.6 2.546H5.588C4.158 30 3 28.854 3 27.454l.014-22.908C3.014 3.146 4.17 2 5.6 2h15.6zM5.6 27.454h20.8V10.91h-4.55c-1.076 0-1.95-.855-1.95-1.909V4.546H5.6z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFileVideo32;
