import { CSSProperties, ReactNode, RefObject } from '../../../node_modules/react';
import { EButtonSize } from '../Button/enums';

interface DropdownContextProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    disabled: boolean;
    buttonChildren?: ReactNode;
    buttonRef: RefObject<HTMLButtonElement> | null;
    size?: `${EButtonSize}`;
    menuStyle?: CSSProperties;
}
export declare const DropdownContext: import('../../../node_modules/react').Context<DropdownContextProps>;
export {};
//# sourceMappingURL=context.d.ts.map