import { CSSProperties, ReactNode } from '../../../node_modules/react';
import { EButtonSize } from '../Button/enums';

export interface IDropdownProps {
    children: ReactNode;
    disabled?: boolean;
    className?: string;
    size?: `${EButtonSize}`;
    buttonChildren?: ReactNode;
    menuStyle?: CSSProperties;
    withPortal?: boolean;
    portalContainerId?: string;
}
//# sourceMappingURL=types.d.ts.map