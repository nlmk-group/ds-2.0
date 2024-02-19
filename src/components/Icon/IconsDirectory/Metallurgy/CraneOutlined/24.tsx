import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCraneOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M9.004 16.739a.741.741 0 0 1-.737.737.739.739 0 0 1-.737-.737v-3.392c0-.404.333-.738.737-.738.404 0 .737.334.737.738v3.392Zm7.446 0a.741.741 0 0 1-.738.737.739.739 0 0 1-.737-.737v-3.392c0-.404.333-.738.737-.738.404 0 .737.334.737.738v3.392Zm-4.462.737a.741.741 0 0 0 .737-.737v-3.392a.741.741 0 0 0-.737-.738.741.741 0 0 0-.737.738v3.392c0 .404.33.737.737.737Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m14.11 4.79 6.134 4.708a.738.738 0 0 1 .44.677v9.807a.795.795 0 0 1-.773.702H4.061a.741.741 0 0 1-.736-.737v-9.705a.653.653 0 0 1 .262-.634L9.862 4.79h-5.8a.741.741 0 0 1-.737-.737c0-.404.333-.738.737-.738H19.95a.74.74 0 0 1 .734.738c0 .404-.369.737-.773.737h-5.8ZM6.157 9.438h11.636l-5.804-4.462-5.832 4.462Zm-1.393 9.808h14.45v-8.369H4.763v8.369Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCraneOutlined24;
