import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSettingsAltFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M25.255 16c0 .408-.037.792-.086 1.176l2.603 1.98c.234.18.296.504.148.768l-2.467 4.152a.614.614 0 0 1-.53.3.716.716 0 0 1-.223-.036l-3.072-1.2a9.544 9.544 0 0 1-2.085 1.176l-.468 3.18a.596.596 0 0 1-.605.504h-4.935a.597.597 0 0 1-.604-.504l-.469-3.18a9.078 9.078 0 0 1-2.085-1.176l-3.072 1.2a.59.59 0 0 1-.21.036.62.62 0 0 1-.542-.3l-2.467-4.152a.594.594 0 0 1 .148-.768l2.603-1.98A9.263 9.263 0 0 1 6.75 16c0-.396.037-.792.087-1.176l-2.603-1.98a.581.581 0 0 1-.148-.768l2.467-4.152c.15-.26.469-.356.752-.264l3.072 1.2a9.546 9.546 0 0 1 2.085-1.176l.469-3.18A.597.597 0 0 1 13.535 4h4.935c.309 0 .568.216.605.504l.468 3.18c.753.3 1.444.696 2.085 1.176l3.072-1.2a.636.636 0 0 1 .753.264l2.467 4.152a.594.594 0 0 1-.148.768l-2.603 1.98c.05.384.086.768.086 1.176Zm-9.252-4.8c-2.727 0-4.935 2.148-4.935 4.8 0 2.652 2.208 4.8 4.935 4.8 2.726 0 4.934-2.148 4.934-4.8 0-2.652-2.208-4.8-4.934-4.8ZM13.535 16c0 1.32 1.11 2.4 2.468 2.4 1.357 0 2.467-1.08 2.467-2.4 0-1.32-1.11-2.4-2.467-2.4s-2.468 1.08-2.468 2.4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSettingsAltFilled32;
