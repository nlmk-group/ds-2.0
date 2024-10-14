import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReportInWorkOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13 15H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2.044a1.248 1.248 0 0 1 1.081-.625h.625c0-.414.56-.75 1.25-.75s1.25.336 1.25.75h.625A1.249 1.249 0 0 1 10.956 2H13a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1Zm-.125-11.875H11.02a1.25 1.25 0 0 1-1.145.75h-3.75a1.25 1.25 0 0 1-1.145-.75H3.125v10.75h9.75V3.125ZM9.517 6.123c.037.021.071.043.107.066l.313-.543c.193-.336.506-.425.621-.077.144.436.38 1.202.52 1.6a.497.497 0 0 1-.375.65c-.418.086-1.192.255-1.645.349-.338.07-.431-.253-.249-.568l.316-.548c-.035-.023-.071-.041-.108-.063a2.25 2.25 0 0 0-3.074.824c-.216.375-.31.534-.298.937l-1 .25a3.245 3.245 0 0 1 4.872-2.877Zm-4.22 4.059c.418-.087 1.193-.255 1.645-.35.337-.07.431.254.249.568l-.316.549c.035.023.071.04.108.062a2.248 2.248 0 0 0 3.074-.823c.216-.376.31-.535.298-.938l1-.25a3.245 3.245 0 0 1-4.872 2.877c-.037-.021-.071-.043-.107-.066l-.313.543c-.193.336-.506.425-.621.077-.144-.436-.38-1.202-.52-1.6a.497.497 0 0 1 .375-.65Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReportInWorkOutlined16;
