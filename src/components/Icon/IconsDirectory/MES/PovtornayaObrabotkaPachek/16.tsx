import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPovtornayaObrabotkaPachek16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M8.603 1H7.396v.73h1.207V1Z" />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M1 3.435c0-.404.324-.73.724-.73h3.862c.4 0 .724.326.724.73v9.13c0 .404-.324.73-.724.73H1.724a.727.727 0 0 1-.724-.73v-9.13Zm1.207 8.643V3.922h2.896v8.156H2.207Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.396 3.07h1.207v1.46H7.396V3.07Zm1.207 2.8H7.396v1.46h1.207V5.87Zm-1.207 2.8h1.207v1.46H7.396V8.67Zm1.207 2.8H7.396v1.46h1.207v-1.46Zm-1.207 2.8h1.207V15H7.396v-.73Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M9.69 3.435c0-.404.324-.73.724-.73h3.862c.4 0 .724.326.724.73v9.13c0 .404-.324.73-.724.73h-3.862a.727.727 0 0 1-.724-.73v-9.13Zm1.207 8.643V3.922h2.896v8.156h-2.896Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPovtornayaObrabotkaPachek16;
