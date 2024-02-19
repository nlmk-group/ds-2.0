import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBugReportFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M14.444 4.889H12.26a4.654 4.654 0 0 0-1.416-1.525l1.268-1.267L11.014 1 9.327 2.688a4.717 4.717 0 0 0-1.105-.132c-.38 0-.746.046-1.096.132L5.43 1 4.333 2.097l1.26 1.267A4.715 4.715 0 0 0 4.186 4.89H2v1.555h1.626c-.04.257-.07.514-.07.778V8H2v1.556h1.556v.777c0 .265.03.521.07.778H2v1.556h2.186A4.664 4.664 0 0 0 8.222 15a4.664 4.664 0 0 0 4.037-2.333h2.185V11.11H12.82c.039-.257.07-.513.07-.778v-.777h1.555V8H12.89v-.778c0-.264-.031-.52-.07-.778h1.625V4.89ZM9.778 11.11H6.667V9.556h3.11v1.555Zm0-3.111H6.667V6.444h3.11V8Z"
      />
    </svg>
  );
};

export default IconBugReportFilled16;
