import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLogoBrandJiraFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2.769 1.085c-.415.11-.743.3-1.062.62a2.211 2.211 0 0 0-.622 1.079C1.002 3.111 1 3.28 1 11.999c0 8.72.002 8.888.085 9.215.11.43.297.755.622 1.08.324.324.649.51 1.079.62.327.084.496.086 9.215.086s8.888-.002 9.215-.085c.43-.11.755-.297 1.08-.622a2.21 2.21 0 0 0 .62-1.079c.084-.327.086-.496.086-9.215S23 3.111 22.917 2.784c-.113-.441-.3-.759-.644-1.098-.337-.333-.61-.488-1.058-.603-.326-.083-.502-.085-9.232-.082-8.637.002-8.908.004-9.214.084Zm15.14 4.862c.242.19.237.126.237 3.328v2.951l-.315-.023c-.841-.064-1.705-.673-2.092-1.475-.203-.421-.256-.732-.257-1.507v-.693l-.806-.018c-.735-.017-.834-.028-1.121-.13-1.027-.368-1.71-1.219-1.828-2.279l-.028-.247h6.092l.118.093Zm-2.95 2.922c.257.182.242-.005.255 3.297l.013 3.025-.28-.029a2.712 2.712 0 0 1-2.253-1.762c-.1-.275-.113-.385-.133-1.122l-.023-.816-.838-.025c-.478-.015-.912-.049-1.01-.08-.755-.237-1.467-.907-1.727-1.626-.11-.301-.207-.842-.163-.912.02-.032.961-.042 3.043-.033 2.727.01 3.025.018 3.116.083ZM12 11.806c.273.14.259-.042.259 3.288v3.033l-.269-.029a2.352 2.352 0 0 1-.956-.29c-.409-.213-.898-.703-1.108-1.107-.241-.468-.293-.72-.32-1.55l-.023-.736-.8-.021c-.819-.021-.944-.043-1.386-.242a3.398 3.398 0 0 1-.838-.611c-.348-.373-.624-.992-.684-1.531l-.03-.269H8.86c2.591 0 3.033.01 3.14.065Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconLogoBrandJiraFilled24;
