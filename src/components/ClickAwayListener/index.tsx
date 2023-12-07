import React, { FC, useEffect, useRef } from 'react';

import { IClickAwayListenerProps } from '@components/ClickAwayListener/types';

const ClickAwayListener: FC<IClickAwayListenerProps> = ({ children, onClickAway }) => {
  const node = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: MouseEvent) => {
    if (node.current?.contains(e.target as Node)) {
      // Внутри элемента, игнорируем
      return;
    }
    // Клик снаружи элемента
    onClickAway();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClick]);

  return <div ref={node}>{children}</div>;
};

export default ClickAwayListener;
