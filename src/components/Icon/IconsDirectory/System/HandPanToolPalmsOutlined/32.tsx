import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHandPanToolPalmsOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M23.371 30h-7.58a4.657 4.657 0 0 1-3.344-1.436L4 19.682l2.395-2.135a2.301 2.301 0 0 1 2.616-.316l2.788 1.494V7.58c0-1.61 1.296-2.918 2.893-2.918.197 0 .394.023.59.058C15.388 3.202 16.637 2 18.165 2c.995 0 1.863.502 2.384 1.272.335-.14.706-.21 1.088-.21 1.596 0 2.892 1.307 2.892 2.918v.327c.186-.035.382-.059.579-.059C26.704 6.248 28 7.556 28 9.166v16.165C28 27.911 25.929 30 23.371 30ZM7.333 19.822l6.78 7.12c.44.455 1.042.724 1.667.724h7.591c1.273 0 2.315-1.05 2.315-2.335V9.166a.575.575 0 0 0-.579-.583.575.575 0 0 0-.579.583v6.828h-2.314V5.98a.575.575 0 0 0-.578-.584.575.575 0 0 0-.58.584v10.014h-2.314V4.918a.575.575 0 0 0-.578-.584.575.575 0 0 0-.579.584v11.076h-2.314V7.58a.575.575 0 0 0-.579-.584.583.583 0 0 0-.578.584V22.6l-6.191-3.303-.59.525Z"
      />
    </svg>
  );
};

export default IconHandPanToolPalmsOutlined32;
