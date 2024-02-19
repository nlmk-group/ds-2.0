import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTrolleyFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.075 3.567c0-.905-.727-1.642-1.623-1.642s-1.624.737-1.624 1.642v7.135a.061.061 0 0 1-.044.057 1.666 1.666 0 0 0-.427.207.082.082 0 0 1-.08.005c-.025-.013-.04-.033-.04-.056V5.23a.203.203 0 0 0-.202-.204H2.717a.204.204 0 0 0-.203.204v6.631c0 .03-.024.054-.053.054h-.333a.204.204 0 0 0-.203.205v.517c0 .112.09.204.203.204H9.63c.022 0 .046.016.055.045.214.688.85 1.189 1.6 1.189.927 0 1.678-.762 1.678-1.697 0-.758-.494-1.402-1.175-1.619a.061.061 0 0 1-.044-.057V3.567c0-.396.318-.716.707-.716.389 0 .707.32.707.716v.622c0 .112.09.204.202.204h.511a.203.203 0 0 0 .203-.204v-.622Zm-2.788 8.04c.418 0 .76.345.76.771a.767.767 0 0 1-.76.771.767.767 0 0 1-.761-.77c0-.427.342-.772.76-.772ZM6.602 7.338a.202.202 0 0 0-.288 0l-1.34 1.357a.205.205 0 0 0 0 .288l.361.366c.08.08.209.08.288 0l.287-.291a.053.053 0 0 1 .09.038v1.495c0 .112.09.204.203.204h.51a.204.204 0 0 0 .203-.204V9.096c0-.05.058-.07.09-.038l.287.29c.08.08.209.08.288 0l.361-.365a.205.205 0 0 0 0-.288l-1.34-1.357Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTrolleyFilled16;
