import React, { CSSProperties, forwardRef } from 'react';

import clsx from 'clsx';

import { EOverflow, IScrollbarProps } from './types';

import styles from './Scrollbar.module.scss';

const Scrollbar = forwardRef<HTMLDivElement, IScrollbarProps>(
  ({ className, style, children, overflowX = EOverflow.auto, overflowY = EOverflow.auto, overflow }, ref) => {
    const isSafari = () => {
      const userAgent = typeof navigator === 'undefined' ? '' : navigator.userAgent;
      return /^((?!chrome|android).)*safari/i.test(userAgent);
    };

    const safari = isSafari();

    const combinedStyle: CSSProperties = {
      ...style,
      overflowX: overflow ?? overflowX,
      overflowY: overflow ?? overflowY
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

Scrollbar.displayName = 'Scrollbar';

export default Scrollbar;
