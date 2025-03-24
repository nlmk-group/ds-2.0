import { CSSProperties, ReactNode } from 'react';


export type DraggableStartPosition = {
  x: number;
  y: number;
};

export type VideoWindowProps = {
  videoUrl: string;
  id?: string;
  title?: string | ReactNode;
  autoPlay?: boolean;
  onClose: () => void;
  style?: CSSProperties;
  className?: string;
  resizable?: boolean;
  draggable?: boolean;
  draggableStartPosition?: DraggableStartPosition;
};