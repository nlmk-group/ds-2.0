import { PropsWithChildren } from '../../../../../node_modules/react';
import { EBadgeColors } from '../../../Badge/enums';

export interface ITabProps extends PropsWithChildren<any> {
    label: string;
    active?: boolean;
    children?: JSX.Element;
    hasBadge?: boolean;
    badgeChildren?: string | number;
    className?: string;
    badgeColor?: EBadgeColors;
    hasIcon?: boolean;
}
//# sourceMappingURL=types.d.ts.map