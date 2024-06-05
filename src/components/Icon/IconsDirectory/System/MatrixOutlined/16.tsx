import React, { FC } from 'react';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMatrixOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = styles[color as keyof typeof styles];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M1 2.273C1 1.57 1.57 1 2.273 1h11.454C14.43 1 15 1.57 15 2.273v11.454C15 14.43 14.43 15 13.727 15H2.273C1.57 15 1 14.43 1 13.727V2.273Zm8.527 0h-2.99v2.959h2.99v-2.96Zm1.273 0v2.959h2.927v-2.96H10.8ZM9.527 6.504h-2.99v2.992h2.99V6.504ZM10.8 9.496V6.504h2.927v2.992H10.8Zm-1.273 1.272h-2.99v2.96h2.99v-2.96Zm1.273 2.96v-2.96h2.927v2.96H10.8ZM2.273 2.272h2.99v2.959h-2.99v-2.96Zm0 4.231h2.99v2.992h-2.99V6.504Zm0 4.264h2.99v2.96h-2.99v-2.96Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconMatrixOutlined16;
