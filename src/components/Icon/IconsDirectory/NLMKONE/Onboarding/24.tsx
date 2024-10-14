import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOnboarding24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M11.997 9.6c-.724 0-1.388.264-1.867.777-.473.507-.7 1.186-.7 1.909h1.8c0-.35.106-.563.216-.68.105-.113.275-.206.55-.206.577 0 .767.382.767.529 0 .292-.064.434-.12.52-.073.116-.177.213-.399.403l-.024.021c-.196.168-.493.422-.722.782-.257.404-.401.887-.401 1.488v.357h1.8v-.357c0-.292.064-.434.12-.521.073-.116.177-.213.399-.403l.024-.02c.196-.168.493-.422.722-.783.257-.403.401-.887.401-1.487 0-1.282-1.143-2.329-2.566-2.329Zm0 7.15a1.042 1.042 0 1 1 0 2.083 1.042 1.042 0 0 1 0-2.083ZM15 7a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h6Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M17.333 23A2.667 2.667 0 0 0 20 20.333V3.667A2.667 2.667 0 0 0 17.333 1H6.667A2.667 2.667 0 0 0 4 3.667v16.666A2.667 2.667 0 0 0 6.667 23h10.666ZM18 20.333a.667.667 0 0 1-.667.667H6.667A.667.667 0 0 1 6 20.333V3.667C6 3.298 6.298 3 6.667 3h10.666c.369 0 .667.298.667.667v16.666Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconOnboarding24;
