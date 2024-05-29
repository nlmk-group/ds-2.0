import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelpNewPeopleQuestion32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m18.616 20.298 5.423 2.26c1.378.574 2.961 1.52 2.961 3.755a.69.69 0 0 1-.688.689.688.688 0 0 1-.687-.69c0-1.17-.573-1.843-2.115-2.485l-5.287-2.203-1.737 1.737a.687.687 0 0 1-.972 0L13.45 21.3a.687.687 0 0 1-.166-.704l.493-1.48c-1.244-.64-3.966-2.435-3.966-5.865v-2.063a6.187 6.187 0 1 1 12.376 0v2.063c0 3.43-2.722 5.225-3.966 5.866l.394 1.182Zm-3.892.329L16 21.903l1.276-1.276-.553-1.66a.687.687 0 0 1 .407-.86 7.25 7.25 0 0 0 1.891-1.183 4.745 4.745 0 0 0 1.791-3.674v-2.063a4.812 4.812 0 0 0-9.625 0v2.063a4.744 4.744 0 0 0 1.792 3.674c.566.49 1.204.89 1.892 1.184a.689.689 0 0 1 .406.86l-.553 1.659Zm1.926-8.636c-.565.376-1.337.891-1.337 1.947a.689.689 0 0 0 1.174.487.687.687 0 0 0 .2-.487c0-.291.21-.46.726-.803.565-.377 1.337-.892 1.337-1.947a2.75 2.75 0 0 0-5.5 0 .688.688 0 0 0 1.375 0 1.377 1.377 0 0 1 1.902-1.273 1.376 1.376 0 0 1 .848 1.273c0 .29-.21.46-.725.803Zm-5.452 9.218-3.237 1.349C6.582 23.132 5 24.078 5 26.313a.687.687 0 1 0 1.375 0c0-1.17.573-1.844 2.115-2.486l3.237-1.348a.686.686 0 0 0 .22-1.122.69.69 0 0 0-.749-.148Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHelpNewPeopleQuestion32;