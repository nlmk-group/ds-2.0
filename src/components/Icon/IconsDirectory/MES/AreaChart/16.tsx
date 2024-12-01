import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAreaChart16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.202 5.54c.5 0 .91-.384.91-.853 0-.47-.41-.854-.91-.854s-.909.384-.909.854c0 .077.01.149.032.217l-1.614 1.52a.852.852 0 0 0-.236-.03.852.852 0 0 0-.236.03l-1.16-1.089a.71.71 0 0 0 .032-.222c0-.469-.409-.853-.909-.853s-.909.384-.909.853c0 .077.01.154.032.222L4.252 7.277a.82.82 0 0 0-.232-.03c-.5 0-.909.384-.909.853 0 .47.41.853.91.853s.909-.384.909-.853c0-.077-.01-.15-.032-.218l2.068-1.945c.073.021.154.03.236.03a.852.852 0 0 0 .237-.03l1.159 1.088a.71.71 0 0 0-.032.222c0 .469.409.853.909.853s.91-.384.91-.853a.708.708 0 0 0-.033-.222L11.97 5.51a.82.82 0 0 0 .232.03ZM3.85 11.833l2.953-2.702a.715.715 0 0 1 .93-.018l1.481 1.246c.284.239.721.213.97-.057l1.673-1.812c.414-.448 1.198-.173 1.198.419v2.924H3.85Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAreaChart16;
