import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLightModeFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12 7.91A4.092 4.092 0 0 0 7.91 12 4.092 4.092 0 0 0 12 16.09 4.092 4.092 0 0 0 16.09 12 4.092 4.092 0 0 0 12 7.91Zm-8.182 4.908h1.637A.82.82 0 0 0 6.273 12a.82.82 0 0 0-.818-.818H3.818A.82.82 0 0 0 3 12c0 .45.368.818.818.818Zm14.728 0h1.636A.82.82 0 0 0 21 12a.82.82 0 0 0-.818-.818h-1.636a.82.82 0 0 0-.819.818c0 .45.369.818.819.818Zm-7.364-9v1.637c0 .45.368.818.818.818a.82.82 0 0 0 .818-.818V3.818A.82.82 0 0 0 12 3a.82.82 0 0 0-.818.818Zm0 14.728v1.636c0 .45.368.818.818.818a.82.82 0 0 0 .818-.818v-1.636a.82.82 0 0 0-.818-.819.82.82 0 0 0-.818.819Zm-4.1-12.617a.815.815 0 1 0-1.154 1.154l.868.867c.32.32.843.32 1.154 0 .31-.32.32-.843 0-1.154l-.867-.867ZM17.205 16.05a.815.815 0 1 0-1.154 1.154l.867.867a.815.815 0 1 0 1.154-1.154l-.867-.867Zm.867-8.967a.815.815 0 1 0-1.154-1.154l-.867.867a.815.815 0 0 0 0 1.154c.32.31.843.32 1.154 0l.867-.867ZM7.95 17.203a.815.815 0 1 0-1.154-1.154l-.867.868a.815.815 0 0 0 0 1.154c.32.31.843.319 1.154 0l.867-.867Z"
      />
    </svg>
  );
};

export default IconLightModeFilled24;
