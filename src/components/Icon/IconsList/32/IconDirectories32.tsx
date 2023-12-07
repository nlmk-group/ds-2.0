import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDirectories32: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M7.28223 26H25.0314C26.9129 26 28 24.8793 28 22.6595V11.3125C28 9.09267 26.9024 7.98276 24.7178 7.98276H14.547C13.8362 7.98276 13.4181 7.79957 12.8955 7.34698L12.2578 6.79741C11.5679 6.20474 11.0244 6 10 6H6.88502C5.05575 6 4 7.07759 4 9.25431V22.6595C4 24.8901 5.09756 26 7.28223 26ZM5.68293 9.34052C5.68293 8.27371 6.22648 7.73491 7.22997 7.73491H9.56098C10.2613 7.73491 10.6794 7.90733 11.2125 8.38147L11.8502 8.92026C12.5296 9.50216 13.0836 9.71767 14.1185 9.71767H24.6969C25.7317 9.71767 26.3171 10.2888 26.3171 11.4095V12.056H5.68293V9.34052ZM7.30314 24.2651C6.25784 24.2651 5.68293 23.694 5.68293 22.5733V13.6832H26.3171V22.5841C26.3171 23.694 25.7317 24.2651 24.6969 24.2651H7.30314Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDirectories32;
