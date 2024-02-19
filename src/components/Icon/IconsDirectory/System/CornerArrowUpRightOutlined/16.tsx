import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowUpRightOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.855 2.293a1 1 0 0 1 1.415 0l3.437 3.437a1 1 0 0 1 0 1.415l-3.437 3.437a1 1 0 0 1-1.415-1.414l1.73-1.73H9.6c-1.172 0-1.99 0-2.628.052-.626.052-.989.147-1.266.288-.588.3-1.066.778-1.365 1.366-.141.277-.237.64-.288 1.266C4 11.047 4 11.866 4 13.037V14a1 1 0 1 1-2 0v-1.005c0-1.12 0-2.02.06-2.748.06-.75.19-1.406.499-2.011a5.125 5.125 0 0 1 2.24-2.24c.605-.309 1.26-.438 2.01-.499.729-.06 1.63-.06 2.748-.06h2.029l-1.73-1.73a1 1 0 0 1 0-1.414Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowUpRightOutlined16;
