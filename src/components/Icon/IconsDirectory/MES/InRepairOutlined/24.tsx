import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInRepairOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M18 11.338s1.272-.552 1.79-1.068a4.284 4.284 0 0 0 1.208-3.683l-3.127 3.12-2.933-.676-.677-2.927 3.127-3.12a4.292 4.292 0 0 0-4.899 4.888l.32 1.257s-1.805-1.855-1.805-1.816A5.737 5.737 0 0 1 19.8 2.377L15.84 6.33l.338 1.463 1.467.338 3.959-3.951a5.724 5.724 0 0 1-.8 7.103c-.492.493-1.679 1.093-1.679 1.093L18 11.338Zm-4.69 1.08 1.35-1.35 7.371 7.369a1.588 1.588 0 0 1 0 2.248l-1.35 1.349a1.59 1.59 0 0 1-2.249 0l-7.371-7.369 1.323-1.323-6.209-6.208-2.137.39-2.523-3.2L4.288 1.55 7.49 4.074 7.1 6.21l6.21 6.208Zm5.46 8.154a.955.955 0 0 0 1.35 0l.45-.45a.952.952 0 0 0 0-1.349l-5.885-5.881-1.8 1.798 5.885 5.882ZM4.307 3.416l-.928.926L4.5 5.812l1.137-.14.175-.984-1.505-1.272Zm3.868 8.763.902.9-5.646 5.634a.954.954 0 0 0 0 1.35l.451.45a.959.959 0 0 0 1.354 0l4.302-4.29.902.9-4.865 4.855a1.597 1.597 0 0 1-2.256 0l-1.353-1.35a1.59 1.59 0 0 1 0-2.252l6.209-6.197Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInRepairOutlined24;
