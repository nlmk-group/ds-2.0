import React, { FC } from 'react';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconIdentificationOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = styles[color as keyof typeof styles];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.967 4.454c1.958 0 3.805.38 5.54 1.14 1.737.76 3.187 1.857 4.35 3.293.13.15.17.284.125.401a.693.693 0 0 1-.236.3.57.57 0 0 1-.387.113.534.534 0 0 1-.388-.213c-1.016-1.302-2.323-2.3-3.92-2.992a12.637 12.637 0 0 0-5.084-1.04c-1.791 0-3.472.347-5.042 1.04-1.57.692-2.871 1.69-3.906 2.992-.11.15-.24.234-.387.25a.523.523 0 0 1-.388-.1.5.5 0 0 1-.236-.312c-.027-.126.014-.255.125-.389 1.145-1.419 2.58-2.52 4.308-3.306a13.21 13.21 0 0 1 5.526-1.177Zm0 2.355c2.494 0 4.636.75 6.427 2.254 1.792 1.502 2.687 3.364 2.687 5.585 0 .834-.327 1.532-.983 2.09-.656.56-1.454.84-2.396.84s-1.75-.28-2.424-.84c-.674-.558-1.011-1.256-1.011-2.09 0-.551-.227-1.015-.68-1.39-.451-.376-.992-.564-1.62-.564-.628 0-1.168.188-1.62.564-.453.375-.679.839-.679 1.39 0 1.62.531 2.972 1.593 4.057 1.062 1.085 2.433 1.845 4.114 2.279.166.05.277.133.332.25a.524.524 0 0 1 .028.376.601.601 0 0 1-.222.3.498.498 0 0 1-.415.076c-1.921-.434-3.49-1.299-4.71-2.592C9.17 18.1 8.56 16.518 8.56 14.648c0-.835.332-1.537.997-2.104.665-.568 1.468-.852 2.41-.852.942 0 1.746.284 2.41.852.665.567.998 1.269.998 2.104 0 .55.23 1.014.692 1.39.462.375 1.007.563 1.635.563.628 0 1.163-.188 1.606-.563.444-.376.665-.84.665-1.39 0-1.937-.785-3.565-2.354-4.884-1.57-1.32-3.445-1.979-5.624-1.979-2.18 0-4.054.66-5.624 1.979-1.57 1.319-2.354 2.938-2.354 4.859 0 .4.041.901.124 1.502.084.601.282 1.302.596 2.104.055.15.05.284-.014.4a.545.545 0 0 1-.318.251.586.586 0 0 1-.43-.012.52.52 0 0 1-.29-.288 9.33 9.33 0 0 1-.596-1.941c-.12-.643-.18-1.307-.18-1.991 0-2.221.89-4.083 2.673-5.585 1.782-1.503 3.91-2.254 6.385-2.254Zm0-4.809c1.182 0 2.337.13 3.463.388 1.127.259 2.216.63 3.269 1.115.166.083.263.183.29.3a.519.519 0 0 1-.04.35.597.597 0 0 1-.278.276c-.129.067-.286.059-.47-.025-.98-.45-1.99-.797-3.034-1.04a14.11 14.11 0 0 0-3.2-.362c-1.07 0-2.124.112-3.158.338-1.034.225-2.022.58-2.964 1.064a.561.561 0 0 1-.443.063.53.53 0 0 1-.333-.263c-.073-.134-.092-.255-.055-.363.037-.109.13-.205.277-.288A15.75 15.75 0 0 1 8.532 2.4a14.91 14.91 0 0 1 3.435-.4Zm0 7.238c1.718 0 3.195.522 4.433 1.565 1.237 1.044 1.856 2.325 1.856 3.845 0 .15-.051.27-.153.363a.576.576 0 0 1-.401.138.59.59 0 0 1-.388-.138.448.448 0 0 1-.166-.363c0-1.253-.513-2.3-1.538-3.143-1.025-.844-2.24-1.265-3.643-1.265-1.403 0-2.608.421-3.615 1.264-1.006.844-1.51 1.891-1.51 3.144 0 1.352.259 2.5.776 3.443.517.944 1.274 1.891 2.272 2.843.11.1.166.217.166.35a.46.46 0 0 1-.166.351.56.56 0 0 1-.388.15.56.56 0 0 1-.388-.15c-1.09-1.035-1.925-2.091-2.507-3.168-.582-1.077-.873-2.35-.873-3.82 0-1.519.61-2.8 1.829-3.844 1.219-1.043 2.687-1.565 4.404-1.565Zm-.027 4.909c.166 0 .3.05.401.15.102.1.153.217.153.35 0 1.253.498 2.28 1.496 3.081.997.801 2.16 1.202 3.49 1.202.11 0 .268-.008.471-.025.203-.017.416-.042.637-.075a.57.57 0 0 1 .43.063.53.53 0 0 1 .235.338.35.35 0 0 1-.083.35.68.68 0 0 1-.36.2 4.24 4.24 0 0 1-.873.139c-.25.008-.402.012-.457.012-1.644 0-3.07-.5-4.28-1.503-1.21-1.002-1.814-2.262-1.814-3.781 0-.134.05-.25.152-.351.101-.1.235-.15.402-.15Z"
      />
    </svg>
  );
};

export default IconIdentificationOutlined24;
