import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconApplications24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M2.879 4.43a2 2 0 0 1 2-2H15.51a2 2 0 0 1 2 2v7.063a1 1 0 1 1-2 0V4.43H4.879v11.432c.3-.102.622-.158.956-.158l6.43-.009a1 1 0 1 1 .002 2l-6.43.009a.973.973 0 0 0-.958.817v.314a.975.975 0 0 0 .963.818l7.233-.01a1 1 0 0 1 .002 2l-7.232.01a2.975 2.975 0 0 1-2.963-2.67h-.003v-.03a3.01 3.01 0 0 1 0-.55V4.43Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="M14 9H7V7h7v2Z" fill={htmlColor || 'currentColor'} />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M14.864 12.113a1 1 0 0 0-1.487 1.024l1.103 6.926a1 1 0 0 0 1.874.306l.797-1.526 1.487 2.263a1 1 0 1 0 1.671-1.099l-1.497-2.277 1.81-.229a1 1 0 0 0 .373-1.859l-6.131-3.529Zm1.116 4.652-.298-1.873 1.736.999-.532.067a1 1 0 0 0-.76.53l-.146.277Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconApplications24;
