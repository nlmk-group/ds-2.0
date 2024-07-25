import React, { FC } from 'react';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconListDelete32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      className={styles[color as keyof typeof styles]}
    >
      <path
        fill={htmlColor || 'currentColor'}
        d="m11.093 6.485 1.489 1.488-2.56 2.56 2.56 2.56-1.49 1.489-2.559-2.56-2.56 2.56-1.488-1.489 2.56-2.56-2.56-2.56 1.488-1.488 2.56 2.56 2.56-2.56Zm6.24 16.182V20h12v2.667h-12Zm0-10.667V9.333h12V12h-12Zm-4.751 6.64-1.489-1.489-2.56 2.56-2.56-2.56-1.489 1.489 2.56 2.56-2.56 2.56 1.49 1.488 2.56-2.56 2.559 2.56 1.488-1.488-2.56-2.56 2.56-2.56Z"
      />
    </svg>
  );
};

export default IconListDelete32;
