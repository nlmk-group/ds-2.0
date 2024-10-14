import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSportsSection24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M19.55 9.45a8.275 8.275 0 0 0-2.525-3.638A7.73 7.73 0 0 0 13 4.05v1.6l6.55 3.8ZM8 13.15l3-1.75V4.05a5.82 5.82 0 0 0-1.55.362c-.5.192-.983.421-1.45.688v8.05ZM4.65 15.1 6 14.3V6.75a7.88 7.88 0 0 0-1.838 6.837c.109.525.271 1.03.488 1.513ZM8 18.9l7-4-3-1.75-6.35 3.7c.333.417.692.8 1.075 1.15.383.35.808.65 1.275.9Zm4 1.1c1.25 0 2.433-.283 3.55-.85a7.953 7.953 0 0 0 2.8-2.35L17 16.05l-6.6 3.8A8.686 8.686 0 0 0 12 20Zm7.35-4.9a7.26 7.26 0 0 0 .487-1.513A7.803 7.803 0 0 0 20 12l-7-4.05v3.45l6.35 3.7ZM12 22a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 0 1 2 12a9.74 9.74 0 0 1 .788-3.9 10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2a9.74 9.74 0 0 1 3.9.787 10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 12 22Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSportsSection24;
