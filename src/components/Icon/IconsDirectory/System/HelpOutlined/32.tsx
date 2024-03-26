import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelpOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M16 28c6.565 0 12-5.435 12-12 0-6.553-5.447-12-12.012-12C9.435 4 4 9.447 4 16c0 6.565 5.447 12 12 12Zm0-2a9.952 9.952 0 0 1-9.988-10c0-5.541 4.423-10 9.976-10 5.553 0 10 4.459 10.012 10a9.954 9.954 0 0 1-10 10Zm-.247-7.565c.6 0 .953-.364.953-.835v-.141c0-.659.388-1.07 1.2-1.612 1.141-.753 1.953-1.447 1.953-2.847 0-1.965-1.741-3.012-3.73-3.012-2.023 0-3.353.953-3.682 2.036a2.04 2.04 0 0 0-.094.588c0 .517.412.812.8.812.67 0 .776-.365 1.153-.8.388-.648.953-1.036 1.741-1.036 1.07 0 1.776.6 1.776 1.506 0 .8-.505 1.188-1.529 1.894-.847.588-1.47 1.212-1.47 2.365v.153c0 .623.329.93.929.93Zm-.024 3.518c.683 0 1.271-.541 1.271-1.224 0-.694-.576-1.223-1.27-1.223-.695 0-1.271.541-1.271 1.223 0 .671.588 1.224 1.27 1.224Z"
      />
    </svg>
  );
};

export default IconHelpOutlined32;
