import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPlaylistMenuSettingFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1 11.882h4.705v1.412H1v-1.412Zm0-4.94h6.049v1.41H1v-1.41ZM1 2h13.442v1.412H1V2Zm12.55 6.37.778-.275L15 9.317l-.616.568c.078.386.078.785 0 1.17l.616.569-.672 1.223-.777-.276a2.651 2.651 0 0 1-.965.585l-.16.844h-1.344l-.162-.844a2.66 2.66 0 0 1-.963-.586l-.777.277-.673-1.223.616-.568a2.975 2.975 0 0 1 0-1.17l-.616-.569.673-1.222.777.276c.275-.262.603-.463.964-.586l.16-.844h1.345l.161.844c.36.123.688.325.964.586Zm-1.796 2.807a.658.658 0 0 0 .475-.207.724.724 0 0 0 .197-.5.724.724 0 0 0-.197-.499.656.656 0 0 0-.475-.206.656.656 0 0 0-.476.206.724.724 0 0 0-.196.5c0 .187.07.366.196.499a.656.656 0 0 0 .476.207Z"
      />
    </svg>
  );
};

export default IconPlaylistMenuSettingFilled16;
