import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconZapisNaParkovkuLipeck24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M5.475 9.237c2.101.13 4.715.263 6.525.263 1.81 0 4.424-.134 6.525-.263l-1.282-2.67A1 1 0 0 0 16.342 6H7.658a1 1 0 0 0-.901.567l-1.282 2.67Zm14.816-.942-1.245-2.593A3 3 0 0 0 16.342 4H7.658a3 3 0 0 0-2.704 1.702L3.709 8.295A.997.997 0 0 0 3 8H2a1 1 0 0 0 0 2h.486a1.994 1.994 0 0 0-.373 1.268l.292 5.832A2 2 0 0 0 3.5 18.785V19a1.5 1.5 0 0 0 3 0h11a1.5 1.5 0 0 0 3 0v-.215a2 2 0 0 0 1.095-1.685l.292-5.832A1.993 1.993 0 0 0 21.514 10H22a1 1 0 1 0 0-2h-1a.997.997 0 0 0-.71.295ZM19 17h.598l.291-5.832v-.002a.031.031 0 0 0-.013-.01h-.001a.04.04 0 0 0-.008 0c-2.206.145-5.612.344-7.867.344s-5.66-.199-7.867-.345h-.009a.032.032 0 0 0-.013.011v.002L4.403 17H19ZM5.106 12.553a1 1 0 0 0 .447 1.341l1 .5a1 1 0 1 0 .894-1.788l-1-.5a1 1 0 0 0-1.341.447Zm13.788 0a1 1 0 0 1-.447 1.341l-1 .5a1 1 0 1 1-.894-1.788l1-.5a1 1 0 0 1 1.341.447ZM10 14a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconZapisNaParkovkuLipeck24;
