import { useRef, useState } from 'react';
import type { PointerEvent, RefObject } from 'react';

import { ESplitterOrientation } from '../enums';

export const useSplitter = (
  containerRef: RefObject<HTMLDivElement | null>,
  setTopHeight: (height: number) => void,
  orientation: `${ESplitterOrientation}` = ESplitterOrientation.horizontal
) => {
  const [isDragging, setIsDragging] = useState(false);
  const grabOffset = useRef(0);
  const isVertical = orientation === ESplitterOrientation.vertical;

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || !event.isPrimary) return;
    const divider = event.currentTarget;
    const rect = divider.getBoundingClientRect();
    grabOffset.current = isVertical ? event.clientX - rect.left : event.clientY - rect.top;
    divider.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId) || !containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const divider = event.currentTarget;
    const available = isVertical ? container.width - divider.offsetWidth : container.height - divider.offsetHeight;
    if (available <= 0) return;
    const position = isVertical ? event.clientX - container.left : event.clientY - container.top;
    setTopHeight(Math.max(0, Math.min(100, ((position - grabOffset.current) / available) * 100)));
  };

  const onLostPointerCapture = () => setIsDragging(false);
  return { isDragging, dividerEvents: { onPointerDown, onPointerMove, onLostPointerCapture } };
};
