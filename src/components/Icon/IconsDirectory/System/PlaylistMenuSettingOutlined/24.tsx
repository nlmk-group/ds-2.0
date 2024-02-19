import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPlaylistMenuSettingOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2 18h7.057v2H2v-2Zm0-7h9.073v2H2v-2Zm0-7h20.163v2H2V4Zm18.826 9.025 1.166-.391L23 14.366l-.924.805a3.983 3.983 0 0 1 0 1.658l.924.805-1.008 1.732-1.166-.391c-.413.37-.905.655-1.446.83L19.139 21h-2.017l-.241-1.196a4.035 4.035 0 0 1-1.446-.83l-1.166.392-1.008-1.732.924-.805a3.986 3.986 0 0 1 0-1.658l-.924-.805 1.008-1.732 1.166.391c.413-.37.905-.655 1.446-.83L17.122 11h2.017l.242 1.196c.54.174 1.032.46 1.445.79v-.001ZM18.131 18a2.02 2.02 0 0 0 1.425-.586 1.992 1.992 0 0 0 0-2.828 2.025 2.025 0 0 0-2.851 0 1.992 1.992 0 0 0 0 2.828c.378.375.89.586 1.426.586Z"
      />
    </svg>
  );
};

export default IconPlaylistMenuSettingOutlined24;
