import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStaffUnitFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7 7c0-2.763 2.238-5 5-5s5 2.237 5 5c0 2.762-2.238 5-5 5S7 9.762 7 7ZM2 18.25c0-3.325 6.662-5 10-5 .575 0 1.248.05 1.969.149A5.701 5.701 0 0 0 12 17.714 5.7 5.7 0 0 0 13.934 22H2v-3.75Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16.791 13.52a4.738 4.738 0 0 1 1.846-.001c.082.515.406.966.881 1.226.475.261 1.05.302 1.56.112.414.44.727.958.921 1.519a1.68 1.68 0 0 0-.676 1.338c0 .542.264 1.025.677 1.34a4.258 4.258 0 0 1-.923 1.517 1.885 1.885 0 0 0-1.559.112c-.474.26-.799.71-.88 1.226a4.74 4.74 0 0 1-1.846.001 1.712 1.712 0 0 0-.882-1.227 1.885 1.885 0 0 0-1.56-.112 4.235 4.235 0 0 1-.92-1.52 1.68 1.68 0 0 0 .676-1.337 1.68 1.68 0 0 0-.677-1.338 4.251 4.251 0 0 1 .922-1.519c.51.19 1.085.15 1.56-.111.474-.26.798-.712.88-1.226Zm.923 5.48c.748 0 1.353-.576 1.353-1.285 0-.71-.605-1.286-1.353-1.286-.747 0-1.353.576-1.353 1.286 0 .71.606 1.285 1.353 1.285Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconStaffUnitFilled24;
