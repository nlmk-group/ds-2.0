import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCraneFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m27.393 12.542-8.476-6.504h8.015c.559 0 1.068-.46 1.068-1.02A1.02 1.02 0 0 0 26.986 4H5.03c-.558 0-1.018.46-1.018 1.019 0 .558.46 1.019 1.018 1.019h8.016s-8.657 6.646-8.672 6.656a.903.903 0 0 0-.362.877v13.41c0 .559.46 1.019 1.018 1.019h21.902c.559 0 1.019-.46 1.068-.97V13.478a1.02 1.02 0 0 0-.607-.936Zm-3.389-.083H7.924l8.06-6.167 8.02 6.167ZM11.056 23.252a.982.982 0 0 0 .976-.977v-4.492a.981.981 0 0 0-.976-.976.981.981 0 0 0-.976.976v4.492a.98.98 0 0 0 .976.977Zm5.905-.977a.982.982 0 0 1-.976.977.978.978 0 0 1-.976-.977v-4.492a.98.98 0 0 1 .976-.976c.535 0 .976.441.976.976v4.492Zm3.956.977a.982.982 0 0 0 .975-.977v-4.492a.981.981 0 0 0-.976-.976.981.981 0 0 0-.976.976v4.492a.98.98 0 0 0 .976.977Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCraneFilled32;
