import { MouseEventHandler } from 'react';
export declare enum ECustomInputColors {
    error = "error",
    success = "success",
    warning = "warning",
    primary = "primary",
    default = "default"
}
export interface IArrowButtonProps {
    isOpen: boolean;
    disabled: boolean;
    color: `${ECustomInputColors}`;
    toggleDropdown: MouseEventHandler;
}
//# sourceMappingURL=types.d.ts.map