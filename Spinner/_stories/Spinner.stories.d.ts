import { default as React } from '../../../../node_modules/react';

declare const _default: {
    title: string;
    component: React.FC<import('../types').ISpinner>;
    decorators: ((Story: () => any) => React.JSX.Element)[];
    argTypes: {
        size: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        color: {
            description: string;
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        bgColor: {
            description: string;
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        children: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const SpinnerDefault: {
    (): JSX.Element;
    storyName: string;
};
export declare const SpinnerMSize: {
    (): JSX.Element;
    storyName: string;
};
export declare const SpinnerChangeColor: {
    (): JSX.Element;
    storyName: string;
};
export declare const SpinnerWithIcon: {
    (): JSX.Element;
    storyName: string;
};
export declare const SpinnerWithPercent: {
    (): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=Spinner.stories.d.ts.map