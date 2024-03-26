import React, { CSSProperties, forwardRef } from 'react';

import clsx from 'clsx';

import { IScrollbarProps } from './types';

import styles from './Scrollbar.module.scss';

const Scrollbar = forwardRef<HTMLDivElement, IScrollbarProps>(
  ({ className, style, children, overflowX, overflowY, overflow }, ref) => {
    const isSafari = () => {
      const userAgent = navigator.userAgent;
      return /^((?!chrome|android).)*safari/i.test(userAgent);
    };

    const safari = isSafari();

    const combinedStyle: CSSProperties = {
      ...style,
      overflowX,
      overflowY,
      overflow
    };

    return (
      <div
        ref={ref}
        className={clsx(styles.root, { [styles.webkit]: !safari }, { [styles.safari]: safari }, className)}
        style={combinedStyle}
      >
        {children}
      </div>
    );
  }
);

export default Scrollbar;
