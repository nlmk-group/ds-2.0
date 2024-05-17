import { CSSProperties, ReactNode, RefObject } from 'react';

export interface IClickAwayListenerProps {
  children: ReactNode;
  onClickAway: () => void;
  className?: string;
  style?: CSSProperties;
  excludeRef?: RefObject<HTMLElement>;
}
