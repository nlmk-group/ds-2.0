import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVizovayaPodderzhka24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M12.578 14.227c.044.11.089.218.133.321A6.008 6.008 0 0 1 9.083 10h2.494c.13 1.693.567 3.149 1 4.227ZM11.577 8H9.083a6.009 6.009 0 0 1 3.628-4.548A14.347 14.347 0 0 0 11.577 8Zm2.856 5.48a12.38 12.38 0 0 1-.85-3.48h2.833a12.386 12.386 0 0 1-.85 3.481c-.204.508-.407.92-.566 1.214a12.029 12.029 0 0 1-.567-1.214ZM13.583 8h2.833a12.38 12.38 0 0 0-.85-3.48c-.204-.509-.407-.92-.566-1.215-.16.294-.363.706-.567 1.214A12.386 12.386 0 0 0 13.583 8Zm3.84 6.227a14.347 14.347 0 0 0 1-4.227h2.494a6.009 6.009 0 0 1-3.628 4.548c.044-.103.089-.21.133-.32Zm1-6.227h2.494a6.008 6.008 0 0 0-3.628-4.548A14.342 14.342 0 0 1 18.423 8ZM15 17a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM4.044 3.833l1.973.767a9.93 9.93 0 0 0-.696 1.876L4 5.962v11.596a1 1 0 0 0 .684.95L11 20.612v-2.445c.635.277 1.304.49 2 .632v1.813l6.316-2.106a1 1 0 0 0 .678-.841A10.037 10.037 0 0 0 22 16.14v1.418a3 3 0 0 1-2.051 2.845l-7.475 2.492a1.5 1.5 0 0 1-.948 0L4.05 20.404A3 3 0 0 1 2 17.558V5.23a1.5 1.5 0 0 1 2.044-1.397Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconVizovayaPodderzhka24;
