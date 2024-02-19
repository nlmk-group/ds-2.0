import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPeopleCheckDoneFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.632 7.364c0 2.41-1.885 4.363-4.21 4.363-2.327 0-4.211-1.952-4.211-4.363C6.21 4.953 8.095 3 10.42 3s4.21 1.953 4.21 4.364Zm-2.106 0c0-1.2-.947-2.182-2.105-2.182s-2.105.982-2.105 2.182.947 2.181 2.105 2.181 2.105-.981 2.105-2.181Zm-8.42 10.909c.21-.688 2.705-1.833 5.22-2.117l2.148-2.181a9.499 9.499 0 0 0-1.053-.066C7.611 13.91 2 15.371 2 18.273v2.181h9.474l-2.106-2.181H4.105Zm11.02-.36 5.4-5.64L22 13.81 15.126 21l-3.652-3.818 1.473-1.538 2.18 2.269Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPeopleCheckDoneFilled24;
