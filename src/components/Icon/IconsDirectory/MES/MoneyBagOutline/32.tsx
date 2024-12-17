import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMoneyBagOutline32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.937 3h.127c1.085 0 1.99 0 2.71.097.76.102 1.447.327 2 .88.552.552.777 1.24.88 1.999.07.53.09 1.16.094 1.888.78.026 1.476.071 2.094.155 1.418.19 2.568.592 3.474 1.5.905.906 1.308 2.055 1.498 3.472.186 1.38.186 3.142.186 5.367v.128c0 2.22 0 3.98-.185 5.356-.19 1.418-.593 2.568-1.5 3.474-.906.905-2.055 1.308-3.473 1.498C22.462 29 20.7 29 18.475 29h-4.96c-2.22 0-3.98 0-5.357-.185-1.418-.19-2.567-.593-3.474-1.5-.905-.906-1.307-2.055-1.498-3.473C3 22.462 3 20.7 3 18.475v-.127c0-2.22 0-3.98.185-5.357.19-1.418.593-2.567 1.5-3.473.906-.906 2.055-1.308 3.473-1.499.619-.083 1.314-.13 2.094-.154.005-.73.024-1.36.095-1.89.102-.759.327-1.446.88-1.998.552-.553 1.24-.778 2-.88C13.944 3 14.85 3 15.936 3Zm-3.852 4.836c.457-.003.937-.003 1.44-.003h4.96c.5 0 .976 0 1.43.003-.005-.684-.022-1.2-.078-1.616-.075-.556-.204-.792-.36-.948-.155-.155-.391-.284-.947-.359-.583-.078-1.365-.08-2.53-.08-1.165 0-1.947.002-2.53.08-.556.075-.792.204-.947.36-.156.155-.285.391-.36.947-.056.415-.073.932-.078 1.616Zm11.513 2c-1.24-.168-2.877-.17-5.181-.17h-4.834c-2.304 0-3.94.002-5.18.17-1.215.163-1.913.47-2.423.978-.509.51-.815 1.207-.978 2.421-.167 1.241-.17 2.877-.17 5.182 0 2.304.003 3.94.17 5.18.164 1.215.47 1.913.979 2.423.509.509 1.206.815 2.42.978 1.242.167 2.878.17 5.182.17h4.834c2.304 0 3.94-.003 5.18-.17 1.215-.164 1.913-.47 2.423-.979.509-.509.815-1.206.978-2.42.167-1.242.17-2.878.17-5.182 0-2.304-.003-3.94-.17-5.181-.164-1.214-.47-1.913-.979-2.422-.509-.51-1.206-.816-2.42-.979Z"
        fill={htmlColor || '#1952B6'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.893 12.063h4.542a3.484 3.484 0 0 1 0 6.968h-2.709v1.49h2.633v1.833h-2.633v2.18h-1.833v-2.18h-1.575v-1.833h1.575v-1.49h-1.575v-1.833h1.575v-5.135Zm1.833 5.135h2.709a1.651 1.651 0 1 0 0-3.303h-2.709v3.303Z"
        fill={htmlColor || '#1952B6'}
      />
    </svg>
  );
};

export default IconMoneyBagOutline32;