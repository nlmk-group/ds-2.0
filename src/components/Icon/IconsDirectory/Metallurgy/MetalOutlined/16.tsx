import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMetalOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="M12.203 2.7 9.859 1.092A.53.53 0 0 0 9.567 1H9.56a.52.52 0 0 0-.228.057l-4.7 2.419a.53.53 0 0 0-.242.263L2.04 9.383a.533.533 0 0 0 .075.535l3.917 4.89.01.012a.51.51 0 0 0 .392.18h4.7a.513.513 0 0 0 .464-.292l2.35-4.891.002-.005a.538.538 0 0 0 .034-.356L12.42 3.012a.533.533 0 0 0-.216-.312ZM7.265 7.026 5.593 4.158 9.05 2.379v2.198L7.265 7.026Zm3.728-3.889-.909.624V2.513l.91.624ZM8.091 7.658l1.84-2.524 1.66-1.14 1.183 4.87-4.683-1.206ZM3.44 8.716l1.503-3.609 1.503 2.578L3.44 8.716Zm3.577 5.238.641-5.324 5.08 1.307-1.93 4.017h-3.79Zm-.95-.766-2.68-3.346 3.215-1.103-.536 4.45Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMetalOutlined16;
