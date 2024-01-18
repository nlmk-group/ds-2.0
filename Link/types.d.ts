import { PropsWithChildren, ReactNode } from 'react';
type TLinkOutput = string | ReactNode;
export interface ILink extends PropsWithChildren<{
    children: TLinkOutput;
}> {
    href: string;
    preventRedirect?: boolean;
    className?: string;
    size?: string;
    target?: string;
    disabled?: boolean;
    leftIcon?: JSX.Element | ReactNode;
    rightIcon?: JSX.Element | ReactNode;
}
export {};
//# sourceMappingURL=types.d.ts.map