import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPivotTable16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M4.3477 2H2V4.30124H4.3477V2ZM5.85325 2.06491H6.84405H13.0092H14V4.00728H13.0092H6.84405H5.85325V2.06491ZM5.28071 11.9818L8.22666 14V12.7037H9.42221C11.2192 12.7037 12.6775 11.2743 12.6775 9.51281V8.34092H14L11.941 5.45327L9.882 8.34092H11.2045V9.51281C11.2045 10.4802 10.4017 11.2598 9.42221 11.2598H8.22666V9.9635L5.28071 11.9818ZM4.04767 6.92086V5.94968H2.06608V6.92086V12.964V13.9352H4.04767V12.964V6.92086Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPivotTable16;
