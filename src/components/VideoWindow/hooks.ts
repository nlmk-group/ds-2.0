import { CSSProperties, useEffect, useState } from 'react';

import { DraggableStartPosition } from '@components/VideoWindow/types';

export const useDraggable = (isFullscreen: boolean, draggableStartPosition?: DraggableStartPosition) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(draggableStartPosition || { x: 0, y: 0 });

  // начало перетаскивания
  const handleMouseDown = (event: React.MouseEvent) => {
    setDragging(true);
    setStartPosition({
      x: event.clientX - position.x,
      y: event.clientY - position.y
    });
  };

  // перетаскивание
  const handleMouseMove = (event: MouseEvent) => {
    if (!dragging || isFullscreen) return; // запрещаем перетаскивание в полноэкранном режиме

    setPosition({
      x: event.clientX - startPosition.x,
      y: event.clientY - startPosition.y
    });
  };
  // завершение перетаскивания
  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  const draggableStyle: CSSProperties = {
    top: isFullscreen ? '0' : `${position.y}px`,
    left: isFullscreen ? '0' : `${position.x}px`,
    position: isFullscreen ? 'fixed' : 'absolute'
  };

  return {
    handleMouseDown,
    draggableStyle
  };
};
