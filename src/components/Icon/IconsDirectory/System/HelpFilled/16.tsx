import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelpFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.932 8c0 3.792-3.14 6.932-6.932 6.932-3.786 0-6.932-3.14-6.932-6.932 0-3.786 3.14-6.932 6.925-6.932 3.793 0 6.94 3.146 6.94 6.932Zm-7.5.206c.143-.329.412-.564.738-.79.433-.3.706-.5.82-.767a.814.814 0 0 0 .063-.328c0-.523-.407-.87-1.026-.87-.455 0-.781.225-1.006.599-.044.05-.082.1-.118.147-.138.181-.24.315-.548.315a.46.46 0 0 1-.462-.47 1.183 1.183 0 0 1 .098-.459c.247-.574.99-1.056 2.084-1.056 1.148 0 2.154.605 2.154 1.74 0 .245-.043.452-.121.635-.18.42-.547.706-1.007 1.01-.322.215-.53.394-.627.61a.726.726 0 0 0-.066.32v.082a.485.485 0 0 1-.039.193c-.074.173-.253.29-.512.29-.346 0-.537-.177-.537-.537v-.088c0-.223.04-.411.112-.576Zm-.283 2.298a.737.737 0 0 1 .695-.479c.4 0 .734.306.734.707a.672.672 0 0 1-.06.277.742.742 0 0 1-.674.43c-.395 0-.734-.32-.734-.707 0-.08.013-.157.039-.228Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconHelpFilled16;
