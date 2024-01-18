import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconCornerArrowDownRightOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2C3.55229 2 4 2.44772 4 3V3.9625C4 5.13411 4.00078 5.95267 4.05288 6.59036C4.10403 7.21637 4.19961 7.5795 4.34061 7.85622C4.64021 8.44423 5.11827 8.92229 5.70628 9.2219C5.98301 9.36289 6.34613 9.45847 6.97214 9.50962C7.60983 9.56172 8.42839 9.5625 9.6 9.5625H11.5858L9.85539 7.83211C9.46487 7.44158 9.46487 6.80842 9.85539 6.41789C10.2459 6.02737 10.8791 6.02737 11.2696 6.41789L14.7071 9.85539C15.0976 10.2459 15.0976 10.8791 14.7071 11.2696L11.2696 14.7071C10.8791 15.0976 10.2459 15.0976 9.85539 14.7071C9.46487 14.3166 9.46487 13.6834 9.85539 13.2929L11.5858 11.5625H9.55708C8.43839 11.5625 7.538 11.5625 6.80928 11.503C6.05958 11.4417 5.40396 11.3125 4.7983 11.0039C3.83397 10.5126 3.04994 9.72853 2.55859 8.7642C2.24999 8.15854 2.12077 7.50292 2.05952 6.75322C1.99998 6.02451 1.99999 5.12412 2 4.00545L2 3C2 2.44772 2.44772 2 3 2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowDownRightOutlined16;
