import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconQuestionMarkFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M6.702 8.4c.05-.128.108-.256.178-.383a4.5 4.5 0 0 1 .644-.875c.228-.247.473-.475.7-.685l.007-.006c.382-.355.71-.662.954-1.013l.001-.002c.05-.07.092-.15.126-.236a1.32 1.32 0 0 0-.04-1.05c-.15-.3-.45-.567-.992-.636A2.219 2.219 0 0 0 8 3.497h-.007a1.74 1.74 0 0 0-.27.021l-.018.003c-.517.09-.87.423-1.11.848a2.862 2.862 0 0 0-.222.508l-.17.516L3.38 4.198l.145-.437c.082-.246.183-.486.302-.718v-.001l.01-.019a4.864 4.864 0 0 1 .866-1.183A4.512 4.512 0 0 1 6.778.65 4.96 4.96 0 0 1 7.992.5h.007c.21 0 .413.011.61.032 1.568.168 2.696.972 3.311 1.984v.001l.02.032c.25.426.447.986.524 1.588a3.92 3.92 0 0 1-.15 1.74c-.085.26-.205.515-.364.758l-.02.03a8.494 8.494 0 0 1-.346.476l-.005.006a9.827 9.827 0 0 1-.749.833l-.223.22a8.78 8.78 0 0 0-.535.549 2.609 2.609 0 0 0-.293.417 1.717 1.717 0 0 0-.083.17.971.971 0 0 0-.057.202l-.004.02a4.315 4.315 0 0 0-.043.469c-.006.149-.009.329-.009.552v.5h-3.11l-.007-.494c0-.058-.002-.125-.005-.198-.007-.246-.017-.567.012-.92.027-.333.09-.7.23-1.066Zm1.314 7.098a1.971 1.971 0 1 0 0-3.943 1.971 1.971 0 0 0 0 3.943Z"
      />
    </svg>
  );
};

export default IconQuestionMarkFilled16;