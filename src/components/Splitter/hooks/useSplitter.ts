import { useCallback, useEffect, useState } from 'react';
import type { RefObject } from 'react';

import { ESplitterOrientation } from '../enums';

export const useSplitter = (
  containerRef: RefObject<HTMLDivElement | null>,
  setTopHeight: (height: number) => void,
  orientation: `${ESplitterOrientation}` = ESplitterOrientation.horizontal,
  splitterRef: RefObject<HTMLDivElement | null>
) => {
  const [isDragging, setIsDragging] = useState(false); // Новое состояние
  const isVertical = orientation === ESplitterOrientation.vertical;

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();

      const pos = isVertical ? e.clientX : e.clientY;
      const start = isVertical ? rect.left : rect.top;
      const size = isVertical ? rect.width : rect.height;

      if (size <= 0) return;

      setTopHeight(Math.max(0, Math.min(100, ((pos - start) / size) * 100)));
    },
    [containerRef, setTopHeight, isVertical]
  );

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const splitter = splitterRef.current;
    splitter?.addEventListener('mousedown', handleMouseDown);
    return () => splitter?.removeEventListener('mousedown', handleMouseDown);
  }, [handleMouseMove]);

  return { splitterRef, isDragging };
};
