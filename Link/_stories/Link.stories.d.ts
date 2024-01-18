import { ReactNode } from 'react';
import { sizeMapping } from '../enums';
import { ILink } from '../types';
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0fc72a6d").R, ILink>;
export default _default;
export declare const DefaultLink: {
    (argTypes: ILink): ReactNode;
    storyName: string;
    args: {
        children: string;
        href: string;
    };
};
export declare const DisabledLink: {
    (argTypes: ILink): ReactNode;
    storyName: string;
    args: {
        children: string;
        href: string;
        disabled: boolean;
    };
};
export declare const LinkTargets: {
    (argTypes: ILink): ReactNode;
    storyName: string;
    args: {
        href: string;
    };
};
export declare const IconLink: {
    (argTypes: ILink): ReactNode;
    storyName: string;
    args: {
        children: string;
        href: string;
        size: sizeMapping;
        disabled: boolean;
        leftIcon: JSX.Element;
        rightIcon: JSX.Element;
    };
};
export declare const LinkSizes: {
    (argTypes: ILink): ReactNode;
    storyName: string;
    args: {
        href: string;
        disabled: boolean;
    };
};
//# sourceMappingURL=Link.stories.d.ts.map