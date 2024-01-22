import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconContains24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00001 3H16V21H8.00001V3ZM15.1957 12.5101C15.1957 13.57 14.9695 14.3976 14.5169 14.9928C14.0644 15.5839 13.4325 15.8794 12.6213 15.8794C11.9038 15.8794 11.331 15.6043 10.9029 15.0539L10.8234 15.7571H9.23354V6.36443H11.0008V9.73382C11.4085 9.25685 11.9445 9.01836 12.609 9.01836C13.4162 9.01836 14.0481 9.31596 14.5047 9.91116C14.9654 10.5023 15.1957 11.336 15.1957 12.4122V12.5101ZM13.4285 12.3816C13.4285 11.7131 13.3225 11.2259 13.1105 10.9201C12.8985 10.6103 12.5825 10.4554 12.1626 10.4554C11.6001 10.4554 11.2128 10.6857 11.0008 11.1464V13.7575C11.2169 14.2223 11.6082 14.4546 12.1749 14.4546C12.7456 14.4546 13.1207 14.1734 13.3 13.6108C13.3857 13.3417 13.4285 12.932 13.4285 12.3816ZM5.98811 15.164C6.0248 15.4005 6.08391 15.5982 6.16544 15.7572H7.95104V15.6532C7.77982 15.3312 7.69217 14.8562 7.68809 14.2284V11.3605C7.68809 10.6185 7.44757 10.0437 6.96652 9.63602C6.48954 9.22427 5.84338 9.0184 5.02804 9.0184C4.48992 9.0184 4.00479 9.11216 3.57266 9.29969C3.14053 9.48314 2.80624 9.73794 2.56979 10.0641C2.33334 10.3902 2.21512 10.7449 2.21512 11.1281H3.98237C3.98237 10.8794 4.06594 10.6837 4.23309 10.541C4.40431 10.3984 4.63872 10.327 4.93632 10.327C5.27468 10.327 5.52132 10.4187 5.67624 10.6022C5.83523 10.7857 5.91473 11.0303 5.91473 11.336V11.7151H5.10142C4.11894 11.7192 3.36679 11.9088 2.84497 12.2838C2.32723 12.6589 2.06836 13.197 2.06836 13.8982C2.06836 14.4689 2.28035 14.9418 2.70432 15.3169C3.13238 15.692 3.6705 15.8795 4.3187 15.8795C5.00358 15.8795 5.56005 15.641 5.98811 15.164ZM5.42552 14.3568C5.20538 14.471 4.96485 14.5281 4.70395 14.5281C4.43488 14.5281 4.2229 14.4567 4.06798 14.314C3.91307 14.1714 3.83561 13.9899 3.83561 13.7698L3.84172 13.6658C3.8988 13.0543 4.36966 12.7486 5.2543 12.7486H5.91473V13.886C5.80873 14.0817 5.64566 14.2386 5.42552 14.3568ZM20.0248 14.1856C19.821 14.365 19.556 14.4547 19.2299 14.4547C18.8059 14.4547 18.49 14.3059 18.282 14.0083C18.0741 13.7107 17.9702 13.2215 17.9702 12.5407V12.3572C17.9702 11.6846 18.0741 11.1994 18.282 10.9018C18.494 10.6002 18.8059 10.4493 19.2177 10.4493C19.5519 10.4493 19.821 10.5574 20.0248 10.7734C20.2287 10.9854 20.3347 11.2626 20.3428 11.6051H22C21.9918 10.8223 21.7371 10.1966 21.2356 9.72775C20.7383 9.25485 20.0758 9.0184 19.2482 9.0184C18.3024 9.0184 17.5584 9.32211 17.0162 9.92954C16.474 10.537 16.2029 11.3503 16.2029 12.3694V12.4856C16.2029 13.5456 16.4761 14.3772 17.0223 14.9806C17.5686 15.5799 18.3147 15.8795 19.2605 15.8795C19.766 15.8795 20.2266 15.7776 20.6425 15.5737C21.0624 15.3658 21.3926 15.0764 21.6331 14.7054C21.8736 14.3303 21.9959 13.9186 22 13.4702H20.3428C20.3347 13.7678 20.2287 14.0062 20.0248 14.1856Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconContains24;