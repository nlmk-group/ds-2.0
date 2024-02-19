import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSourceDataFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M10.49 5.59a6.751 6.751 0 0 0-2.552 2H3v-2h7.49Zm-3.9 5.182a6.61 6.61 0 0 1 .608-2H3v2h3.59ZM3 11.937h3.53c.01.753.065 1.429.16 2.034H3v-2.034Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7.773 11.682c0-3.02 2.465-5.455 5.49-5.455 3.025 0 5.49 2.435 5.49 5.455 0 1.31-.464 2.509-1.236 3.448l3.186 3.16a1 1 0 0 1-1.408 1.42l-3.315-3.288a5.495 5.495 0 0 1-2.717.714c-3.025 0-5.49-2.434-5.49-5.454Zm2.853-2.278h2.602v1.994H9.784c.111-.704.274-1.133.842-1.994Zm-.73 3.2h3.332v1.993h-1.816c-.92-.626-1.238-1.269-1.517-1.993Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSourceDataFilled24;
