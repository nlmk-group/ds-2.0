import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowUpRightFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M10.18 2.076a1 1 0 0 1 1.09.217l3.437 3.437a1 1 0 0 1 0 1.415l-3.437 3.437a1 1 0 0 1-1.707-.707V7.438c-1.152 0-1.96 0-2.59.052-.627.052-.99.147-1.267.288-.588.3-1.066.778-1.365 1.366-.141.277-.237.64-.288 1.266C4 11.047 4 11.866 4 13.037V14a1 1 0 1 1-2 0v-1.005c0-1.12 0-2.02.06-2.748.06-.75.19-1.406.499-2.011a5.125 5.125 0 0 1 2.24-2.24c.605-.308 1.26-.438 2.01-.499.729-.06 1.63-.06 2.748-.06h.005V3a1 1 0 0 1 .618-.924Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCornerArrowUpRightFilled16;
