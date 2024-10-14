import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBusinessTrip24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M17.952 9h.1a6 6 0 0 1 5.573 3.776l.218.547a1.953 1.953 0 0 1-1.813 2.676h-5.518l-2.614 3a2.906 2.906 0 0 1-2.19.996h-2.44c-.884 0-1.483-.9-1.143-1.715L9.077 16H6.222a2.43 2.43 0 0 1-2.159-1.315L.171 7.154a1.476 1.476 0 0 1 1.312-2.155h2.493c.74 0 1.439.337 1.9.915l2.46 3.085h2.292L9.012 5.8a1.238 1.238 0 0 1 1.106-1.796h2.114c.833 0 1.627.358 2.178.983L17.952 9Zm-5.084 0h2.416l-2.373-2.69a.906.906 0 0 0-.68-.307h-.875L12.868 9Zm-2.955 5H6.222a.43.43 0 0 1-.382-.233L2.343 7h1.633a.43.43 0 0 1 .336.162l2.523 3.163c.34.427.857.675 1.403.675h9.815a4 4 0 0 1 3.715 2.518l.192.482h-3.705l.812-.931-1.508-1.314-5.169 5.93a.906.906 0 0 1-.683.311h-1.296l2.171-5.199-1.845-.77L9.913 14Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBusinessTrip24;
