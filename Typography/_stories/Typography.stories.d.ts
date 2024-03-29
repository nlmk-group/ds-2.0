import React from 'react';
declare const _default: {
    title: string;
    component: React.FC<import('../types').ITypography>;
    decorators: ((Story: () => any) => JSX.Element)[];
    argTypes: {
        '*': {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
        };
        variant: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        color: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const TypographyDefault: {
    (argsTypes: any): JSX.Element;
    storyName: string;
};
export declare const TypographyVariants: {
    (): JSX.Element;
    storyName: string;
};
export declare const TypographyColor: {
    (): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=Typography.stories.d.ts.map