import { PropsWithChildren } from 'react';
export interface ITab extends PropsWithChildren<any> {
    label: string;
    active?: boolean;
    badgeNumber?: string;
    children?: JSX.Element;
}
//# sourceMappingURL=types.d.ts.map