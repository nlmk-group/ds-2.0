import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPlaylistMenuSettingOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1 11.882h4.705v1.412H1v-1.412Zm0-4.94h6.049v1.41H1v-1.41ZM1 2h13.442v1.412H1V2Zm12.55 6.37.778-.275L15 9.317l-.616.568c.078.386.078.785 0 1.17l.616.569-.672 1.223-.777-.276a2.651 2.651 0 0 1-.965.585l-.16.844h-1.344l-.162-.844a2.66 2.66 0 0 1-.963-.586l-.777.277-.673-1.223.616-.568a2.975 2.975 0 0 1 0-1.17l-.616-.569.673-1.222.777.276c.275-.262.603-.463.964-.586l.16-.844h1.345l.161.844c.36.123.688.325.964.586Zm-1.796 3.512c.356 0 .698-.148.95-.413s.394-.624.394-.998a1.45 1.45 0 0 0-.394-.999 1.312 1.312 0 0 0-.95-.413c-.357 0-.699.149-.95.413a1.449 1.449 0 0 0-.395.999c0 .374.142.733.394.998s.594.413.95.413Z"
      />
    </svg>
  );
};

export default IconPlaylistMenuSettingOutlined16;
