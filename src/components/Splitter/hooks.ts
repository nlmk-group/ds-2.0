import { useCallback, useEffect, useRef } from 'react';
import type { RefObject } from 'react';

import { ESplitterOrientation } from './enums';

const useSplitter = (
  containerRef: RefObject<HTMLDivElement>,
  setTopHeight: (height: number) => void,
  orientation: `${ESplitterOrientation}` = ESplitterOrientation.horizontal
) => {
  const splitterRef = useRef<HTMLDivElement>(null);
  const isVertical = orientation === ESplitterOrientation.vertical;

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        if (isVertical) {
          const newWidth = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
          setTopHeight(newWidth);
        } else {
          const newHeight = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
          setTopHeight(newHeight);
        }
      }
    },
    [containerRef, setTopHeight, isVertical]
  );

  useEffect(() => {
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseDown = () => {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const splitter = splitterRef.current;
    splitter?.addEventListener('mousedown', handleMouseDown);

    return () => splitter?.removeEventListener('mousedown', handleMouseDown);
  }, [handleMouseMove]);

  return { splitterRef };
};

export default useSplitter;
