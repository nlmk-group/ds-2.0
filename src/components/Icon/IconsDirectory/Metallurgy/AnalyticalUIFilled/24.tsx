import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAnalyticalUIFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.783 19.5c.297 0 .536-.22.637-.425l-3.888-6.796A.626.626 0 0 1 8.431 12a.63.63 0 0 1 .101-.279l3.888-6.796c-.101-.205-.34-.425-.637-.425-.225 0-.478.132-.637.403l-3.67 6.298c-.19.308-.312.528-.312.799 0 .264.123.491.311.8l3.678 6.297c.166.278.405.403.63.403Zm3.62-.007c.398 0 .658-.235.999-.821l3.301-5.74c.203-.353.297-.639.297-.932 0-.3-.094-.58-.297-.931l-3.301-5.74c-.34-.587-.601-.822-1-.822-.397 0-.658.235-1.006.821l-3.294 5.74c-.21.353-.297.631-.297.932 0 .293.095.58.297.931l3.294 5.74c.348.587.608.822 1.007.822ZM8.243 5.607c.26 0 .47-.213.47-.477a.474.474 0 1 0-.948 0c0 .264.21.477.478.477ZM7.49 6.963a.474.474 0 0 0 .477-.476.474.474 0 1 0-.948 0c0 .264.21.476.47.476Zm-.753 1.371a.48.48 0 0 0 .477-.484.48.48 0 0 0-.477-.483c-.261 0-.47.22-.47.483 0 .264.209.484.47.484Zm-.76 1.35a.476.476 0 0 0 .477-.485.474.474 0 1 0-.948 0c0 .272.21.484.47.484Zm-.746 1.363c.26 0 .47-.213.47-.477a.474.474 0 0 0-.47-.484.48.48 0 0 0 0 .96Zm-.753 1.356c.26 0 .47-.212.47-.476a.474.474 0 1 0-.948 0c0 .264.21.476.478.476Zm.753 1.356c.26 0 .47-.212.47-.476a.474.474 0 0 0-.47-.484.48.48 0 0 0 0 .96Zm.745 1.371a.48.48 0 0 0 .478-.483.48.48 0 0 0-.478-.484c-.26 0-.47.22-.47.484s.21.483.47.483Zm.76 1.35a.48.48 0 0 0 .478-.484.48.48 0 0 0-.477-.484.48.48 0 0 0-.47.484c0 .263.209.484.47.484Zm.754 1.356a.476.476 0 0 0 .477-.484.474.474 0 1 0-.948 0c0 .271.21.484.47.484Zm.753 1.363c.26 0 .47-.212.47-.484a.474.474 0 1 0-.948 0c0 .272.21.484.478.484Z"
      />
    </svg>
  );
};

export default IconAnalyticalUIFilled24;
