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

      if (isVertical) {
        const newWidth = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
        setTopHeight(newWidth);
      } else {
        const newHeight = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
        setTopHeight(newHeight);
      }
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
