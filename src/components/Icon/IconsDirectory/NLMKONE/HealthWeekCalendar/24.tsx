import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHealthWeekCalendar24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          clipPath="evenodd"
          d="M10.149 3.198V1.8H8.143v1.398H5.792a3.4 3.4 0 0 0-3.396 3.396v11.514a3.398 3.398 0 0 0 3.396 3.402h8.383a24.352 24.352 0 0 1-2.01-1.998H5.798a1.4 1.4 0 0 1-1.404-1.398v-6.912h17.31V6.6a3.403 3.403 0 0 0-3.402-3.402h-2.4V1.8h-1.997v1.398h-3.756Zm9.552 6V6.594a1.4 1.4 0 0 0-1.399-1.404h-2.4v1.398h-1.997V5.19h-3.756v1.398H8.15V5.19H5.798c-.774 0-1.404.63-1.404 1.404v2.604h15.307ZM17.27 21.564c.264.234.594.348.924.348.33 0 .66-.114.924-.348.312-.27.828-.726 1.242-1.11l.162-.144c2.67-2.382 3.348-4.47 2.022-6.204-.654-.858-1.662-1.344-2.688-1.302a3.004 3.004 0 0 0-1.662.588 3.05 3.05 0 0 0-1.662-.588c-1.026-.048-2.034.444-2.688 1.302-1.332 1.734-.648 3.822 2.022 6.204l.162.144c.42.384.936.84 1.242 1.11Zm-1.842-6.24c.258-.336.612-.522.978-.522v-.006h.042c.546.024.906.546.906.546l.372.462c.216.27.756.366 1.02-.036.264-.402.288-.42.288-.42l.011-.013c.065-.083.401-.511.895-.533.384-.018.756.174 1.02.522.594.774.03 1.884-1.77 3.492l-.186.168c-.258.24-.552.504-.81.732a211.37 211.37 0 0 0-.405-.366l-.405-.366-.186-.168c-1.806-1.608-2.364-2.718-1.77-3.492Z"
          fill={htmlColor || 'currentColor'}
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconHealthWeekCalendar24;
