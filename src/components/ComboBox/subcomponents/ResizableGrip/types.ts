import { RefObject } from 'react';

export interface IResizableGripProps {
  minWidth: number;
  minHeight: number;
  containerRef: RefObject<HTMLDivElement | null>;
}
