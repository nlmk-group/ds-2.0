import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileHTML16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M9.296 6.015c.09.027.165.091.21.178a.4.4 0 0 1 .031.286l-1.4 5.25a.37.37 0 0 1-.167.224.33.33 0 0 1-.266.032.36.36 0 0 1-.21-.178.4.4 0 0 1-.031-.286l1.4-5.25a.37.37 0 0 1 .167-.224.33.33 0 0 1 .266-.032M6.749 7.13c.092 0 .18.04.244.11a.392.392 0 0 1 .004.526L5.845 9l1.152 1.234a.39.39 0 0 1-.004.527.34.34 0 0 1-.244.11.34.34 0 0 1-.246-.106l-1.4-1.5A.38.38 0 0 1 5 9q0-.075.026-.144a.4.4 0 0 1 .077-.12l1.4-1.5a.34.34 0 0 1 .246-.106M10.251 7.13c.092-.001.18.037.246.105l1.4 1.5A.38.38 0 0 1 12 9q0 .075-.026.144a.4.4 0 0 1-.076.12l-1.4 1.5a.34.34 0 0 1-.247.106.34.34 0 0 1-.244-.11.392.392 0 0 1-.004-.526L11.155 9l-1.152-1.234a.39.39 0 0 1 .004-.527.34.34 0 0 1 .244-.11"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.999 4.818v8.91c0 .7-.585 1.272-1.3 1.272H3.293A1.284 1.284 0 0 1 2 13.727l.006-11.455C2.006 1.572 2.585 1 3.3 1h7.8zm-11.7 8.91h10.4V5.454h-2.274a.965.965 0 0 1-.976-.954V2.272H3.3z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFileHTML16;
