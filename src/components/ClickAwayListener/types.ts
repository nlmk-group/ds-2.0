import { CSSProperties, ReactNode, RefObject } from 'react';

export enum EClickAwayEvent {
  mouseup = 'mouseup',
  mousedown = 'mousedown',
  click = 'click'
}

export type TClickAwayEvent = `${EClickAwayEvent}`;

export interface IClickAwayListenerProps {
  children: ReactNode;
  onClickAway: () => void;
  className?: string;
  style?: CSSProperties;
  excludeRef?: RefObject<HTMLElement> | RefObject<HTMLElement>[];
  eventType?: TClickAwayEvent;
}
