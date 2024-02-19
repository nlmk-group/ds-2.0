import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCraneOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.756 11.55c0 .302-.25.551-.552.551a.553.553 0 0 1-.552-.552V9.01c0-.303.25-.553.552-.553.302 0 .552.25.552.553v2.54Zm5.577 0c0 .302-.25.551-.552.551a.553.553 0 0 1-.553-.552V9.01c0-.303.25-.553.553-.553.302 0 .552.25.552.553v2.54Zm-3.342.551c.303 0 .552-.25.552-.552V9.01a.555.555 0 0 0-.552-.553.555.555 0 0 0-.552.553v2.54c0 .303.247.552.552.552Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m9.581 2.6 4.594 3.526a.553.553 0 0 1 .33.507v7.346a.595.595 0 0 1-.58.525H2.056a.555.555 0 0 1-.553-.552V6.683a.49.49 0 0 1 .197-.475L6.4 2.6H2.054a.555.555 0 0 1-.552-.552c0-.303.25-.552.552-.552h11.9c.303 0 .55.25.55.552 0 .302-.276.552-.578.552H9.58ZM3.623 6.08h8.716L7.99 2.738 3.623 6.08ZM2.58 13.426h10.823V7.158H2.58v6.268Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCraneOutlined16;
