import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPiece32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg" width="33" height="32" fill="none" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.398 11.27c.261.53.077 1.176-.411 1.444L26.16 15.36l5.108.105c.553.011 1.004.502 1.006 1.095.002.594-.445 1.066-.999 1.054l-9.141-.187c-.46-.01-.863-.354-.976-.836-.112-.481.094-.976.5-1.198l8.383-4.6c.488-.267 1.095-.054 1.356.476ZM8.92 3.372C7.996 2.327 8.82.714 10.264.737l1.48.024c.551.009.984.442.966.967-.019.525-.48.944-1.031.935l-.891-.014c.64 1.464-.936 3.188-2.67 2.513l-.197-.076c.119.7-.1 1.438-.542 1.979a8.166 8.166 0 0 0-1.316 2.251c-.563 1.487-.68 2.114-.94 3.494-.11.593-.248 1.325-.458 2.326-.108.516-.635.858-1.176.763-.54-.095-.891-.591-.782-1.108.188-.896.318-1.59.428-2.176.275-1.469.426-2.271 1.05-3.92A10.083 10.083 0 0 1 5.813 5.91a.642.642 0 0 0 .144-.397.369.369 0 0 0-.103-.277C4.69 4.126 6 2.273 7.529 2.868L8.9 3.4a.15.15 0 0 0 .012.004.072.072 0 0 0 .016-.022.14.14 0 0 0-.008-.01Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.202 29.898c6.545-1.037 11.041-6.994 10.042-13.306-1-6.312-7.117-10.588-13.663-9.552C8.035 8.077 3.54 14.034 4.54 20.346c1 6.313 7.117 10.589 13.663 9.552Zm.301 1.905c7.637-1.21 12.882-8.16 11.716-15.524-1.166-7.364-8.303-12.353-15.94-11.144-7.636 1.21-12.882 8.16-11.715 15.524 1.166 7.364 8.303 12.354 15.94 11.144Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.58 25.976c4.364-.691 7.37-4.613 6.713-8.758-.657-4.146-4.727-6.946-9.09-6.255-4.364.691-7.37 4.612-6.713 8.758.656 4.145 4.726 6.946 9.09 6.255Zm.298 1.876c5.454-.864 9.211-5.765 8.39-10.947-.82-5.182-5.908-8.683-11.363-7.819-5.455.864-9.211 5.765-8.39 10.948.82 5.182 5.908 8.682 11.363 7.818Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.503 20.423a1 1 0 0 1 .893-1.096l8.968-.914a1 1 0 0 1 .722 1.779l-7.198 5.696a1 1 0 0 1-1.24-1.568l4.51-3.57-5.559.567a1 1 0 0 1-1.096-.894Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPiece32;