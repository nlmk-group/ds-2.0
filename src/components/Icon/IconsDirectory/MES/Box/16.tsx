import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBox16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.464 1.12a.957.957 0 0 0-.928 0L2.574 3.838C2.222 4.031 2 4.425 2 4.855v6.308c0 .432.223.826.576 1.018l4.962 2.7c.291.159.633.159.924 0l4.962-2.7c.353-.192.576-.586.576-1.018V4.855c0-.43-.222-.824-.574-1.017L8.464 1.12ZM3.173 6.084v4.987l4.24 2.308V8.407l-4.24-2.323Zm5.413 2.323v4.972l4.241-2.308V6.084l-1.511.828v.71c0 .354-.263.642-.587.642-.323 0-.586-.288-.586-.643v-.067l-1.557.853Zm3.967-3.61-1.685.923a1.02 1.02 0 0 0-.087-.06L6.552 3.097 8 2.303l4.553 2.494Zm-9.106 0L5.28 3.793 9.6 6.414l-1.6.877-4.554-2.494Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBox16;
