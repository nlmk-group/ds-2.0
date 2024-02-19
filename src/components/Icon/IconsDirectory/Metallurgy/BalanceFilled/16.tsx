import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBalanceFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.38 5.841V1.867a.357.357 0 0 0-.354-.359.357.357 0 0 0-.355.36v3.85l-3.146-.543a.507.507 0 0 0-.584.42.517.517 0 0 0 .075.366.37.37 0 0 0-.007.015l-1.962 4.262a.515.515 0 0 0-.197.406 2.507 2.507 0 0 0 .006.165c.093 1.388 1.354 2.4 2.778 2.4 1.48 0 2.784-1.093 2.784-2.565a.514.514 0 0 0-.24-.437L5.364 6.361l5.363.927-1.948 4.23a.515.515 0 0 0-.198.408l.001.073a.364.364 0 0 0 .005.094c.094 1.387 1.355 2.399 2.778 2.399 1.424 0 2.685-1.013 2.779-2.4a.36.36 0 0 0 .004-.092l.001-.074a.515.515 0 0 0-.21-.417l-2.053-4.257a.348.348 0 0 0-.022-.039.512.512 0 0 0-.313-.823L8.38 5.841Zm-3.783.557 1.76 3.733H2.878l1.718-3.733Zm6.72 1.308 1.787 3.707H9.611l1.706-3.707Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconBalanceFilled16;
