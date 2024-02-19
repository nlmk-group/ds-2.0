import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBalanceFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.556 8.841V3.026a.522.522 0 0 0-.519-.526.522.522 0 0 0-.518.526v5.636l-4.604-.797a.742.742 0 0 0-.855.614.757.757 0 0 0 .11.538.532.532 0 0 0-.01.02l-2.871 6.237A.753.753 0 0 0 3 15.87c0 .036 0 .072.002.107a.532.532 0 0 0 .006.135c.137 2.031 1.982 3.513 4.066 3.513 2.166 0 4.074-1.6 4.074-3.755 0-.27-.14-.507-.352-.64L8.144 9.603l7.848 1.357-2.85 6.19a.753.753 0 0 0-.29.596c0 .036 0 .072.002.108a.53.53 0 0 0 .006.136c.138 2.03 1.983 3.511 4.066 3.511 2.083 0 3.929-1.481 4.066-3.512a.532.532 0 0 0 .006-.134c.002-.036.002-.072.002-.109a.753.753 0 0 0-.308-.61l-3.004-6.23a.551.551 0 0 0-.032-.056.752.752 0 0 0 .148-.339.75.75 0 0 0-.605-.866l-4.643-.803Zm-5.536.815 2.574 5.462H4.505L7.02 9.656Zm9.834 1.914 2.616 5.424h-5.112l2.496-5.424Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconBalanceFilled24;
