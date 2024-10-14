import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDopolnitelnyeDniOtdyha24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M17 2v3h-3v2h3v3h2V7h3V5h-3V2h-2Z" fill={htmlColor || 'currentColor'} />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="m10.811 16.48 4.922-4.923a6.003 6.003 0 0 1-1.74-1.091l-4.526 4.526A17.902 17.902 0 0 1 8.3 13.385c-.69-1.073-1.186-2.117-1.482-3.065-.299-.955-.37-1.732-.303-2.307.066-.558.251-.875.436-1.06.185-.185.502-.37 1.06-.436.576-.067 1.352.004 2.307.302.602.189 1.243.457 1.905.805a6.005 6.005 0 0 1-.184-2.3 12.341 12.341 0 0 0-1.466-.514 8.873 8.873 0 0 1 1.619-.316c.193-.748.527-1.44.972-2.045-1.4-.008-2.775.246-4.057.751a10.47 10.47 0 0 0-3.572 2.338A10.47 10.47 0 0 0 3.196 9.11a10.9 10.9 0 0 0-.747 4.263c.035 1.47.36 2.932.956 4.304.331.762.742 1.488 1.225 2.165.64.9 1.923.892 2.704.111l3.41-3.41c.023-.02.045-.042.067-.064Zm-6.004-5.907a8.964 8.964 0 0 0-.359 2.75 9.521 9.521 0 0 0 .792 3.557 9.79 9.79 0 0 0 .823 1.516l1.983-1.983a19.992 19.992 0 0 1-1.429-1.946c-.77-1.197-1.35-2.403-1.71-3.55-.035-.116-.069-.23-.1-.344Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="m20.654 22.075-6.563-6.563 1.414-1.415 6.563 6.564-1.414 1.414Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconDopolnitelnyeDniOtdyha24;
