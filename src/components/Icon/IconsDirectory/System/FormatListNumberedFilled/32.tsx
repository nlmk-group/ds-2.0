import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormatListNumberedFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M1 2a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H1Zm2.474 7.833h1.473V4H2v1.458h1.474v4.375Zm1.473 13.125v.73H3.474v1.458h1.473v.729H2v1.458h4.421V21.5H2v1.458h2.947Zm-.294-8.75H2V12.75h4.421v1.313l-2.653 3.062h2.653v1.458H2v-1.312l2.653-3.063Zm4.715-8.75v2.917H30V5.458H9.368ZM30 25.875H9.368v-2.917H30v2.917Zm-20.632-8.75H30v-2.917H9.368v2.917Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFormatListNumberedFilled32;
