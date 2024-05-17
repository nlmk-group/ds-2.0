import React, { FC, useEffect, useRef } from 'react';

import { IClickAwayListenerProps } from '@components/ClickAwayListener/types';

const ClickAwayListener: FC<IClickAwayListenerProps> = ({ children, className, style, onClickAway, excludeRef }) => {
  const node = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: MouseEvent) => {
    if (node.current?.contains(e.target as Node) || excludeRef?.current?.contains(e.target as Node)) {
      // Внутри элемента или исключенного элемента, игнорируем
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
  }, [handleClick, excludeRef]);

  return (
    <div ref={node} className={className} style={style}>
      {children}
    </div>
  );
};

export default ClickAwayListener;
