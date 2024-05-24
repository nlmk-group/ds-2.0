import React, { FC, useEffect, useRef } from 'react';

import { EClickAwayEvent, IClickAwayListenerProps } from '@components/ClickAwayListener/types';

const ClickAwayListener: FC<IClickAwayListenerProps> = ({
  children,
  className,
  style,
  onClickAway,
  excludeRef,
  eventType = EClickAwayEvent.mouseup
}) => {
  const node = useRef<HTMLDivElement | null>(null);

  const handleEvent = (e: MouseEvent | TouchEvent) => {
    const excludeRefs = Array.isArray(excludeRef) ? excludeRef : [excludeRef];
    if (
      node.current?.contains(e.target as Node) ||
      excludeRefs.some((ref) => ref?.current?.contains(e.target as Node))
    ) {
      // Внутри элемента или исключенного элемента, игнорируем
      return;
    }
    // Клик снаружи элемента
    onClickAway();
  };

  useEffect(() => {
    document.addEventListener(eventType, handleEvent);

    return () => {
      document.removeEventListener(eventType, handleEvent);
    };
  }, [handleEvent, excludeRef, eventType]);

  return (
    <div ref={node} className={className} style={style}>
      {children}
    </div>
  );
};

export default ClickAwayListener;
