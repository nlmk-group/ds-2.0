import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconQualityOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8 .99c-3.006 0-5.452 2.48-5.452 5.527 0 1.9.95 3.578 2.393 4.573v3.515c0 .138.07.266.183.34a.394.394 0 0 0 .38.03L8 13.834l2.496 1.14a.393.393 0 0 0 .38-.03.406.406 0 0 0 .183-.34V11.09a5.546 5.546 0 0 0 2.393-4.573C13.452 3.47 11.006.99 8 .99Zm2.26 12.99-2.096-.957a.393.393 0 0 0-.328 0l-2.097.957v-2.433c.2.093.407.173.616.24l.036.011a5.683 5.683 0 0 0 .425.114l.046.01c.032.008.064.014.097.02l.04.008.104.019.035.006.108.016.034.005c.036.005.073.01.11.013l.033.004c.036.004.073.008.11.01l.034.004.109.007.035.002.111.005.034.001a5.33 5.33 0 0 0 .288 0l.034-.001a5.11 5.11 0 0 0 .111-.005l.035-.002.11-.007.033-.003.11-.01.033-.005.11-.013.034-.005.108-.016.036-.006L9 11.95l.04-.007.098-.02.046-.01.088-.021.054-.014.077-.02.065-.018.06-.017.08-.024.036-.012c.21-.067.415-.147.616-.24v2.433Zm-.741-3.003-.048.017a4.491 4.491 0 0 1-.333.098l-.043.011c-.037.01-.075.018-.112.026l-.028.006-.146.029-.015.002a4.541 4.541 0 0 1-.459.057l-.032.002a4.509 4.509 0 0 1-.117.006l-.04.002a4.772 4.772 0 0 1-.449-.008l-.032-.002-.15-.013H7.51a4.479 4.479 0 0 1-.141-.018l-.03-.005a4.528 4.528 0 0 1-.133-.02l-.015-.003a4.767 4.767 0 0 1-.145-.029l-.029-.006a4.3 4.3 0 0 1-.112-.026l-.043-.01a4.088 4.088 0 0 1-.333-.1l-.048-.016a4.722 4.722 0 0 1-3.135-4.46C3.346 3.915 5.434 1.8 8 1.8s4.654 2.116 4.654 4.718a4.722 4.722 0 0 1-3.135 4.46Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="m10.367 6.517.75-1.428a.41.41 0 0 0-.008-.392.398.398 0 0 0-.331-.202L9.183 4.44l-.845-1.371a.398.398 0 0 0-.676 0L6.817 4.44l-1.595.056a.398.398 0 0 0-.331.202.41.41 0 0 0-.007.392l.75 1.428-.75 1.428a.41.41 0 0 0 .007.392c.068.12.194.197.331.202l1.595.056.845 1.372a.398.398 0 0 0 .676 0l.845-1.372 1.595-.056a.398.398 0 0 0 .332-.202.41.41 0 0 0 .006-.392l-.75-1.428ZM8.944 7.794a.398.398 0 0 0-.325.19L8 8.989l-.619-1.005a.398.398 0 0 0-.325-.19l-1.168-.041.55-1.046a.41.41 0 0 0 0-.38l-.55-1.046 1.168-.04a.398.398 0 0 0 .325-.19l.62-1.006.618 1.005c.07.114.192.185.325.19l1.168.041-.55 1.046a.41.41 0 0 0 0 .38l.55 1.046-1.168.041Z"
      />
    </svg>
  );
};

export default IconQualityOutlined16;
