import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDirectoriesOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M7.282 26h17.75C26.911 26 28 24.88 28 22.66V11.312c0-2.22-1.098-3.33-3.282-3.33H14.547c-.71 0-1.129-.182-1.652-.635l-.637-.55C11.568 6.205 11.024 6 10 6H6.885C5.055 6 4 7.078 4 9.254V22.66C4 24.89 5.098 26 7.282 26Zm-1.6-16.66c0-1.066.544-1.605 1.548-1.605h2.331c.7 0 1.118.172 1.652.646l.637.54c.68.581 1.234.797 2.268.797h10.579c1.035 0 1.62.57 1.62 1.691v.647H5.683V9.341Zm1.621 14.925c-1.045 0-1.62-.571-1.62-1.692v-8.89h20.634v8.901c0 1.11-.585 1.681-1.62 1.681H7.303Z"
      />
    </svg>
  );
};

export default IconDirectoriesOutlined32;
