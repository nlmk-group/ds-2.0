import { CSSProperties } from 'react';


export type VideoWindowStyles = {
  videoTitleClassName?: string;
  videoTitleStyle?: CSSProperties;
};
export type DraggableStartPosition = {
  x: number;
  y: number;
};

export type VideoWindowProps = {
  videoUrl: string;
  id?: string;
  title?: string;
  autoPlay?: boolean;
  onClose: () => void;
  styles?: VideoWindowStyles;
  resizable?: boolean;
  draggable?: boolean;
  draggableStartPosition?: DraggableStartPosition;
};