import { CSSProperties, ReactNode } from '../../../node_modules/react';
import { EButtonSizes } from '../Button/enums';

export interface IDropdownProps {
    children: ReactNode;
    disabled?: boolean;
    className?: string;
    size?: `${EButtonSizes}`;
    buttonChildren?: ReactNode;
    menuStyle?: CSSProperties;
}
//# sourceMappingURL=types.d.ts.map