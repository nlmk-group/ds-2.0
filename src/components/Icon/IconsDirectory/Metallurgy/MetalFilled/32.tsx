import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMetalFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M18.081 3.353v6.063l-3.435 4.85-4.085-7.007 7.52-3.906Zm1.8-.033v4.718l3.501-2.292-3.5-2.425Zm4.472 3.942-4.736 3.1-3.562 5.028 10.956 2.92-2.658-11.048Zm2.377 12.835L15.333 17.06l-1.541 12.09h8.074a.877.877 0 0 0 .793-.505l4.07-8.548Zm-14.66 8.33 1.425-11.174-8.065 2.804 6.64 8.37ZM5.071 18.276l8.173-2.841-4.1-7.032-4.073 9.873Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMetalFilled32;
