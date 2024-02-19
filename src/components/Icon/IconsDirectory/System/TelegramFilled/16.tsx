import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTelegramFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M15.02 2.179c-.244-.207-.627-.237-1.023-.078-.417.167-11.785 5.044-12.248 5.243-.084.03-.82.303-.744.915.068.55.659.779.731.805l2.89.99c.192.638.899 2.993 1.055 3.496.098.313.257.726.535.81.245.095.488.008.645-.115l1.767-1.639 2.853 2.225.068.04c.193.086.379.129.556.129.137 0 .268-.026.393-.077.428-.175.599-.583.617-.629l2.13-11.075c.13-.591-.05-.892-.225-1.04Zm-7.845 8.27-.975 2.6-.975-3.25L12.7 4.274 7.175 10.45Z"
      />
    </svg>
  );
};

export default IconTelegramFilled16;
