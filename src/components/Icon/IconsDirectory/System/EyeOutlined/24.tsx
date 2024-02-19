import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEyeOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12 3c4.984 0 9.13 3.88 10 9-.869 5.12-5.016 9-10 9s-9.13-3.88-10-9c.869-5.12 5.016-9 10-9Zm0 16c1.885 0 3.714-.693 5.188-1.965 1.474-1.271 2.505-3.047 2.925-5.035-.422-1.987-1.453-3.76-2.927-5.03C15.712 5.7 13.884 5.009 12 5.009S8.288 5.7 6.814 6.97C5.34 8.24 4.31 10.013 3.887 12c.42 1.988 1.451 3.764 2.925 5.035C8.286 18.307 10.115 19 12 19Zm0-2.5c-1.103 0-2.161-.474-2.941-1.318-.78-.844-1.218-1.989-1.218-3.182 0-1.194.438-2.338 1.218-3.182C9.839 7.974 10.897 7.5 12 7.5c1.103 0 2.161.474 2.941 1.318.78.844 1.218 1.989 1.218 3.182 0 1.194-.438 2.338-1.218 3.182-.78.844-1.838 1.318-2.941 1.318Zm0-2c.613 0 1.2-.263 1.634-.732A2.608 2.608 0 0 0 14.31 12a2.61 2.61 0 0 0-.677-1.768A2.226 2.226 0 0 0 12 9.5c-.613 0-1.2.263-1.634.732A2.608 2.608 0 0 0 9.69 12c0 .663.244 1.299.677 1.768A2.226 2.226 0 0 0 12 14.5Z"
      />
    </svg>
  );
};

export default IconEyeOutlined24;
