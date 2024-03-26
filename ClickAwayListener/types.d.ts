import { ReactNode, RefObject } from 'react';
export interface IClickAwayListenerProps {
    children: ReactNode;
    onClickAway: () => void;
    className?: string;
    excludeRef?: RefObject<HTMLElement>;
}
//# sourceMappingURL=types.d.ts.map