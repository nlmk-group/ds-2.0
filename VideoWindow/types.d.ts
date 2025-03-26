import { CSSProperties, ReactNode } from '../../../node_modules/react';

export type TDraggableStartPosition = {
    x: number;
    y: number;
};
export type TVideoWindowProps = {
    videoUrl: string;
    id?: string;
    title?: string | ReactNode;
    autoPlay?: boolean;
    onClose: () => void;
    style?: CSSProperties;
    className?: string;
    resizable?: boolean;
    draggable?: boolean;
    draggableStartPosition?: TDraggableStartPosition;
};
//# sourceMappingURL=types.d.ts.map