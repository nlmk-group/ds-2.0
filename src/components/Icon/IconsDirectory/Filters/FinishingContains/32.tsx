import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFinishingContains32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2 5H28v21.6H11.2V5ZM8.93 20.322a2.361 2.361 0 0 1-.213-.714c-.515.574-1.184.86-2.009.86-.78 0-1.427-.225-1.943-.676A2.182 2.182 0 0 1 4 18.084c0-.843.312-1.491.935-1.942.628-.452 1.533-.68 2.715-.685h.98v-.456c0-.368-.097-.662-.288-.883-.186-.221-.483-.331-.89-.331-.359 0-.64.085-.847.257-.2.172-.302.407-.302.707H4.178c0-.462.142-.888.426-1.28.285-.393.687-.7 1.207-.92a4.353 4.353 0 0 1 1.752-.34c.981 0 1.759.248 2.333.744.579.49.868 1.182.868 2.075v3.452c.005.755.11 1.327.317 1.715v.125H8.93Zm-1.758-1.48c.314 0 .603-.068.868-.206a1.4 1.4 0 0 0 .59-.566V16.7h-.796c-1.064 0-1.631.369-1.7 1.105l-.007.125a.85.85 0 0 0 .28.655c.186.172.441.258.765.258Zm11.81.56c.544-.717.817-1.713.817-2.988v-.118c0-1.295-.277-2.299-.832-3.01-.55-.716-1.31-1.075-2.281-1.075-.8 0-1.445.287-1.936.861V9.018h-2.127v11.305h1.914l.095-.847c.516.662 1.205.994 2.068.994.977 0 1.737-.356 2.282-1.067ZM17.289 14.5c.255.368.383.954.383 1.76 0 .662-.052 1.154-.155 1.478-.215.677-.667 1.016-1.354 1.016-.682 0-1.153-.28-1.413-.839v-3.142c.255-.555.721-.832 1.398-.832.506 0 .886.186 1.141.56Zm8.322 3.93c-.246.216-.565.324-.957.324-.51 0-.89-.18-1.14-.537-.251-.358-.376-.947-.376-1.767v-.22c0-.81.125-1.394.375-1.752.255-.363.63-.544 1.126-.544.402 0 .726.13.972.39.245.255.372.588.382 1h1.995c-.01-.941-.317-1.695-.92-2.259-.599-.569-1.396-.854-2.392-.854-1.138 0-2.034.366-2.686 1.097-.653.731-.979 1.71-.979 2.936v.14c0 1.276.329 2.277.986 3.003.658.721 1.555 1.082 2.694 1.082a3.73 3.73 0 0 0 1.663-.368c.505-.25.903-.599 1.192-1.045.29-.452.437-.947.442-1.487h-1.995c-.01.358-.137.645-.382.861Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFinishingContains32;
