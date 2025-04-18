/// <reference types="react" />
export interface IColumnSettingProps {
    id: string;
    title: string;
    visible: boolean;
    pinned: 'left' | 'right' | false;
    hasChildren?: boolean;
    expanded?: boolean;
    draggable?: boolean;
    disabled?: boolean;
    highlighted?: boolean;
    onVisibilityChange: (visible: boolean) => void;
    onPinChange?: (pinned: 'left' | 'right' | false) => void;
    onExpandChange?: () => void;
    dragHandleProps?: React.DOMAttributes<HTMLDivElement>;
    preventEventBubbling?: boolean;
    className?: string;
}
//# sourceMappingURL=types.d.ts.map