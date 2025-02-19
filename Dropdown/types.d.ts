import { CSSProperties, ReactNode } from '../../../node_modules/react';
import { EButtonSize } from '../Button/enums';
import { IButtonProps } from '../Button/types';

export interface IDropdownProps extends IButtonProps {
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