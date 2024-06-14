import React, { FC } from 'react';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRMRecommendationOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = styles[color as keyof typeof styles];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.77 8.848h1.691v1.692H8.77V8.848Zm1.691 5.384H8.77v1.693h1.692v-1.693Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.772 2H12C6.477 2.002 2 6.479 2 12.002c0 5.522 4.477 10 10 10s10-4.478 10-10a9.998 9.998 0 0 0-5.596-8.98A6.93 6.93 0 0 0 12.772 2ZM12 3.694a8.307 8.307 0 0 0-8.308 8.308 8.307 8.307 0 1 0 16.616 0 8.3 8.3 0 0 0-.573-3.04 6.962 6.962 0 0 1-6.963 6.963H12v-1.693h.772a5.27 5.27 0 0 0 3.816-8.905 4.27 4.27 0 0 1-4.164 5.214H12V8.847h.423a2.576 2.576 0 0 0 .515-5.102 8.36 8.36 0 0 0-.812-.051H12Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconRMRecommendationOutlined24;
