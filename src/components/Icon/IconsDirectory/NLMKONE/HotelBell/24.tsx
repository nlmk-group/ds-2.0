import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHotelBell24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="m22 4.861-1.214 1.517h-.006c-2.742-2.363-6.236-3.423-9.81-3.406V1C14.892.982 18.848 2.143 22 4.861Zm-9.126 3.347c2.428.36 4.32 1.32 5.79 2.925h.012c1.237 1.35 1.978 3.015 2.2 4.945.04.355.069.735.08 1.167.018.633-.381 1.078-.997 1.107H2.157c-.148 0-.319-.006-.49-.059-.41-.136-.678-.539-.667-1.013.097-3.82 1.802-6.573 5.062-8.184 1.277-.628 2.628-.859 3.916-.99V6.752L8.12 6.715V4.731h.28c1.492-.023 4.086-.012 5.135 0h.285v1.984h-.28c-.786.024-1.27.024-1.578.024V8.1l.102.012.189.02c.208.021.415.043.62.075Zm-9.85 8.09h15.909c-.325-2.387-1.522-4.14-3.557-5.194-2.092-1.084-4.406-1.303-7.062-.67-1.602.38-2.907 1.197-3.882 2.417-.775.97-1.237 2.102-1.408 3.446Zm-.028 3.73h15.96V22H2.996v-1.972ZM18.488 9.042l1.203-1.528c-1.106-.941-2.508-1.824-4.206-2.268l-.462 1.913c1.362.355 2.508 1.066 3.465 1.877v.006Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHotelBell24;
