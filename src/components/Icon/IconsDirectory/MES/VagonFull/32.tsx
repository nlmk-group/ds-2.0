import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVagonFull32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M29.2 8.687h-1.738l-.59-1.347-.013-.023c-.489-.869-1.428-1.413-2.474-1.51l-1.684-.156a1.167 1.167 0 0 1-.455-.137l-2.444-1.355a3.524 3.524 0 0 0-3.092-.13l-.922.41h-.001c-.244.109-.545.13-.814.055l-1.567-.442a3.538 3.538 0 0 0-2.48.214L8.14 5.619h-.002a1.096 1.096 0 0 1-.206.077l-1.137.297c-.92.24-1.693.854-2.053 1.717l-.01.023-.296.954H2.8c-.81 0-1.466.657-1.466 1.467v11.733c0 .81.656 1.467 1.466 1.467h26.4c.81 0 1.467-.657 1.467-1.467V10.154c0-.81-.657-1.467-1.467-1.467ZM6.766 8.372l-.097.315h18.48l-.221-.506c-.115-.18-.384-.364-.757-.399l-1.686-.155a3.447 3.447 0 0 1-1.346-.411L18.695 5.86a1.213 1.213 0 0 0-1.052-.043l-.923.41a3.558 3.558 0 0 1-2.376.164l-1.566-.441a1.223 1.223 0 0 0-.85.07L9.143 7.376a3.36 3.36 0 0 1-.622.23l-1.138.298c-.309.08-.525.27-.617.47Zm-3.3 2.449v10.4H8.34v-.066h-.006V10.821H3.467Zm7.008 0v10.4h4.155v-10.4h-4.155Zm6.29 10.334v.066h4.767v-10.4h-4.766v10.334h-.002Zm6.9 0v.066h4.87v-10.4h-4.868v10.334h-.001Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M5 27.887a2.2 2.2 0 0 0 2.2-2.2 2.2 2.2 0 1 0 4.4 0 2.2 2.2 0 0 0-4.4 0 2.2 2.2 0 1 0-2.2 2.2Zm22 0a2.2 2.2 0 0 1-2.2-2.172 2.2 2.2 0 1 1 0-.056 2.2 2.2 0 1 1 2.2 2.228Z"
      />
    </svg>
  );
};

export default IconVagonFull32;
