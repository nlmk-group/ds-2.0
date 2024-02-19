import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRoundedArrowForwardOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.38 4.877H7.475c-2.268 0-4.106 1.75-4.106 3.91s1.838 3.91 4.106 3.91h6.158V14H7.474C4.45 14 2 11.666 2 8.787c0-2.88 2.45-5.213 5.474-5.213h4.907L10.646 1.92l.967-.92L15 4.226 11.613 7.45l-.967-.921 1.735-1.653Z"
      />
    </svg>
  );
};

export default IconRoundedArrowForwardOutlined16;
