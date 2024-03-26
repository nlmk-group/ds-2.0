import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelpNewPeopleQuestion16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m9.665 10.735 3.45 1.438c.878.366 1.885.968 1.885 2.39a.44.44 0 0 1-.438.438.439.439 0 0 1-.437-.438c0-.745-.365-1.174-1.346-1.582l-3.364-1.402-1.106 1.105a.438.438 0 0 1-.618 0l-1.313-1.312a.437.437 0 0 1-.106-.448l.314-.941c-.792-.408-2.524-1.55-2.524-3.733V4.937a3.937 3.937 0 1 1 7.875 0V6.25c0 2.183-1.731 3.325-2.523 3.733l.25.752Zm-2.477.21.812.811.812-.812-.352-1.056a.437.437 0 0 1 .26-.547 4.613 4.613 0 0 0 1.203-.753 3.02 3.02 0 0 0 1.14-2.338V4.937a3.062 3.062 0 0 0-6.126 0V6.25a3.019 3.019 0 0 0 1.14 2.338c.36.312.767.566 1.205.754a.438.438 0 0 1 .258.546l-.352 1.056Zm1.226-5.496c-.36.24-.851.567-.851 1.239a.438.438 0 1 0 .875 0c0-.185.133-.293.46-.511H8.9c.36-.24.851-.568.851-1.24a1.75 1.75 0 0 0-3.5 0 .438.438 0 0 0 .875 0 .876.876 0 1 1 1.75 0c0 .186-.134.293-.461.512Zm-3.47 5.866-2.06.858C2.007 12.54 1 13.141 1 14.563a.437.437 0 1 0 .875 0c0-.745.365-1.174 1.346-1.582l2.06-.858a.436.436 0 0 0 .235-.572.438.438 0 0 0-.572-.236Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHelpNewPeopleQuestion16;
