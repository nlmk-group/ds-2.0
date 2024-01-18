import { MouseEvent, MouseEventHandler, ReactNode } from 'react';
export interface IMeasureUnitProps {
    selected?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
    onHover?: (event: MouseEvent<HTMLDivElement>) => void;
    children?: ReactNode;
    disableTimeChange?: boolean;
}
//# sourceMappingURL=types.d.ts.map