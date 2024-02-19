import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEditPenOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m12.954 1.226 1.82 1.82a.774.774 0 0 1 0 1.096l-1.423 1.424-2.917-2.917 1.424-1.423A.765.765 0 0 1 12.402 1c.202 0 .397.07.552.226ZM1 12.083V15h2.917l8.602-8.602L9.602 3.48 1 12.083Zm2.271 1.361h-.715v-.715l7.046-7.047.716.716-7.047 7.046Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconEditPenOutlined16;
