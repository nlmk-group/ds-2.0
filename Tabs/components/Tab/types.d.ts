import { PropsWithChildren } from '../../../../../node_modules/react';

export interface ITab extends PropsWithChildren<any> {
    label: string;
    active?: boolean;
    badgeNumber?: string;
    children?: JSX.Element;
    className?: string;
}
//# sourceMappingURL=types.d.ts.map