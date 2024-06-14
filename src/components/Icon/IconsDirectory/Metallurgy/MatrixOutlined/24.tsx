import React, { FC } from 'react';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMatrixOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = styles[color as keyof typeof styles];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 3.818C2 2.814 2.814 2 3.818 2h16.364C21.186 2 22 2.814 22 3.818v16.364A1.818 1.818 0 0 1 20.182 22H3.818A1.818 1.818 0 0 1 2 20.182V3.818Zm12.182 0H9.909v4.227h4.273V3.818Zm1.818 0v4.227h4.182V3.818H16Zm-1.818 6.046H9.909v4.272h4.273V9.864ZM16 14.136V9.864h4.182v4.272H16Zm-1.818 1.819H9.909v4.227h4.273v-4.227ZM16 20.182v-4.227h4.182v4.227H16ZM3.818 3.818h4.273v4.227H3.818V3.818Zm0 6.046h4.273v4.272H3.818V9.864Zm0 6.09h4.273v4.228H3.818v-4.227Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconMatrixOutlined24;
