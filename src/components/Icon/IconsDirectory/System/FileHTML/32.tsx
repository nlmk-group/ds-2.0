import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileHTML32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M17.182 12.375a.78.78 0 0 1 1.128.891l-3.12 10.858a.78.78 0 0 1-1.5-.427l3.12-10.857a.78.78 0 0 1 .372-.465M12.097 14.614a.774.774 0 0 1 .554 1.314l-2.568 2.553 2.568 2.554a.774.774 0 0 1-.554 1.315.78.78 0 0 1-.548-.217l-3.12-3.103a.775.775 0 0 1-.17-.845.8.8 0 0 1 .17-.252l3.12-3.102a.78.78 0 0 1 .548-.217M19.903 14.614a.78.78 0 0 1 .548.217l3.12 3.102a.78.78 0 0 1 .17.846.8.8 0 0 1-.17.251l-3.12 3.103a.782.782 0 0 1-1.321-.552.77.77 0 0 1 .219-.546l2.568-2.554-2.568-2.553a.775.775 0 0 1 .554-1.314"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M29 9.636v17.818c0 1.4-1.17 2.546-2.6 2.546H5.588C4.157 30 3 28.854 3 27.454l.012-22.908C3.012 3.146 4.17 2 5.6 2h15.6zM5.6 27.454h20.8V10.91h-4.55c-1.077 0-1.95-.854-1.95-1.909V4.546H5.6z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFileHTML32;
