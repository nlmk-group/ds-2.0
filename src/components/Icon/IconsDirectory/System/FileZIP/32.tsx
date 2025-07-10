import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileZIP32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M29 9.91v18.454C29 29.814 27.83 31 26.4 31H5.587C4.157 31 3 29.814 3 28.364l.013-23.728C3.013 3.186 4.17 2 5.6 2h15.6L29 9.91ZM5.6 28.363h20.8V11.227h-4.55c-1.077 0-1.95-.885-1.95-1.977V4.636h-4.798a.98.98 0 0 1-.87.943l-.1.005h-.854v1.73h.853l.1.005a.984.984 0 0 1 .875.984.984.984 0 0 1-.874.983l-.1.005h-.854v1.73h.853l.1.005a.984.984 0 0 1 .875.984.984.984 0 0 1-.874.983l-.1.006h-.854v1.73h.853l.1.005a.984.984 0 0 1 .875.983.984.984 0 0 1-.874.984l-.1.005h-.854v1.73h.853c.539 0 .975.443.975.989v3.09c0 1.569-1.255 2.841-2.803 2.841S9.5 24.085 9.5 22.515v-3.09c0-.545.437-.988.975-.988h.853v-3.584h-.853a.982.982 0 0 1-.975-.988c0-.546.437-.989.975-.989h.853v-1.73h-.853a.982.982 0 0 1-.975-.989c0-.546.437-.988.975-.988h.853v-1.73h-.853a.982.982 0 0 1-.975-.99c0-.545.437-.988.975-.988h.853v-.824H5.6v23.728Zm5.85-5.85a.86.86 0 0 0 .853.865.86.86 0 0 0 .853-.865v-2.1H11.45v2.1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFileZIP32;
