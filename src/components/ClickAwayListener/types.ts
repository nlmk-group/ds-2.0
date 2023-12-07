import { ReactNode } from 'react';

export interface IClickAwayListenerProps {
  children: ReactNode;
  onClickAway: () => void;
}
