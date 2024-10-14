import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCareerCaseUp24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          clipPath="evenodd"
          d="M8.56 2c-1.12 0-2.03.91-2.03 2.03h.02v1.5H3.46c-.39 0-1 0-1.51.28-.62.35-.95 1-.95 1.97v12.13a2.5 2.5 0 0 0 2.5 2.5h3V20.4h-3a.49.49 0 0 1-.49-.49v-5.32c.44.53 1.01.92 1.66.92h4.09c.2.77.79 1.38 1.04 1.56l1.57-1.2c-.2-.19-.59-.85-.67-1.22-.05-.22-.08-.44-.09-.65l4.82-.03V13c0-.56-.45-1.01-1.01-1.01H9.59c-.56 0-1.01.45-1.01 1.01v.5H4.67l-.004-.002c-.032-.014-.168-.077-.376-.398-.23-.35-.45-.85-.65-1.42-.4-1.16-.63-2.43-.63-2.96 0-.4.02-.73.11-.95a.31.31 0 0 1 .11-.16c.03-.02.1-.06.26-.06h17.07c.16 0 .23.04.26.06.03.02.07.06.11.16.09.22.11.55.11.95 0 .5-.04 2.78-.04 2.78h2.06V7.78c0-.84-.36-1.44-.9-1.8-.5-.34-1.11-.45-1.6-.45h-2.62v-1.5c0-1.12-.91-2.03-2.03-2.03H8.56Zm-.01 3.53v-1.5h7.37v1.5H8.55Zm13.72 7.76c.18.19.29.44.29.71v4.38h-2v-2.02l-3.96 3.83a.99.99 0 0 1-1.39 0l-1.22-1.18-4.67 4.13-1.33-1.5 5.36-4.75c.39-.35.98-.33 1.36.03l1.19 1.15L19.07 15h-2.04v-2h4.53c.27 0 .52.1.71.29Z"
          fill={htmlColor || 'currentColor'}
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconCareerCaseUp24;
