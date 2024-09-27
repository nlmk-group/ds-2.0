import { default as React, MouseEvent, ReactNode } from '../../../../node_modules/react';
import { sizeMapping } from '../enums';
import { ILink } from '../types';

declare const _default: import('@storybook/csf').ComponentAnnotations<import('@storybook/react/dist/types-a5624094').R, ILink>;
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
        leftIcon: React.JSX.Element;
        rightIcon: React.JSX.Element;
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
export declare const LinkCallback: {
    (argTypes: ILink): ReactNode;
    storyName: string;
    args: {
        children: string;
        href: string;
        onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
    };
};
//# sourceMappingURL=Link.stories.d.ts.map