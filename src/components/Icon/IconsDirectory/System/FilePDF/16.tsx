import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilePDF16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M15 4.818v8.91c0 .7-.585 1.272-1.3 1.272H3.294A1.285 1.285 0 0 1 2 13.727l.007-11.455C2.007 1.572 2.585 1 3.3 1h7.8L15 4.818Zm-11.7 8.91h10.4V5.454h-2.275a.965.965 0 0 1-.975-.954V2.272H3.3v11.455ZM8.5 6.09c.774 0 1.258.815.871 1.467l-.427.718.945 1.587h.853c.774 0 1.259.815.872 1.466-.387.652-1.356.652-1.743 0l-.427-.718H7.556l-.426.718c-.387.652-1.356.652-1.743 0s.096-1.466.87-1.466h.855l.944-1.587-.428-.718c-.387-.652.097-1.467.872-1.467Zm-2.242 4.52c-.182 0-.296.191-.205.344a.24.24 0 0 0 .41 0l.204-.344h-.41Zm4.28.344a.24.24 0 0 0 .41 0 .228.228 0 0 0-.14-.335l-.066-.009h-.409l.205.344ZM8.001 9.863h.998l-.499-.84-.499.84ZM8.5 6.84c-.182 0-.296.192-.205.345l.205.344.205-.344A.23.23 0 0 0 8.5 6.84Z"
      />
    </svg>
  );
};

export default IconFilePDF16;
