import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelpNewPeopleQuestion24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m14.14 15.517 4.437 1.848c1.128.47 2.423 1.244 2.423 3.073a.563.563 0 1 1-1.125 0c0-.957-.469-1.509-1.73-2.034l-4.326-1.802-1.421 1.42a.562.562 0 0 1-.796 0l-1.687-1.687a.562.562 0 0 1-.136-.576l.403-1.21c-1.018-.524-3.245-1.993-3.245-4.799V8.062a5.062 5.062 0 1 1 10.125 0V9.75c0 2.806-2.226 4.275-3.244 4.8l.322.967Zm-3.184.269L12 16.83l1.044-1.044-.453-1.358a.562.562 0 0 1 .334-.704 5.932 5.932 0 0 0 1.547-.968 3.883 3.883 0 0 0 1.466-3.006V8.062a3.938 3.938 0 0 0-7.876 0V9.75a3.882 3.882 0 0 0 1.466 3.006c.463.401.986.728 1.549.969a.564.564 0 0 1 .332.703l-.453 1.358Zm1.576-7.066c-.462.308-1.095.73-1.095 1.593a.562.562 0 1 0 1.126 0c0-.238.171-.376.593-.657.462-.309 1.094-.73 1.094-1.593a2.25 2.25 0 0 0-4.5 0 .563.563 0 0 0 1.125 0 1.127 1.127 0 0 1 1.556-1.042 1.125 1.125 0 0 1 .694 1.042c0 .237-.172.376-.593.657Zm-4.46 7.542-2.65 1.103C4.296 17.835 3 18.61 3 20.438a.562.562 0 1 0 1.125 0c0-.957.47-1.509 1.73-2.034l2.649-1.103a.56.56 0 0 0 .18-.918.566.566 0 0 0-.613-.121Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHelpNewPeopleQuestion24;
