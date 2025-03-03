import { CSSProperties } from 'react';


export type VideoWindowStyles = {
  videoTitleClassName?: string;
  videoTitleStyle?: CSSProperties;
};

export type VideoWindowProps = {
  videoUrl: string;
  title?: string;
  autoPlay?: boolean;
  onClose: () => void;
  styles?: VideoWindowStyles;
  resizable?: boolean;
};