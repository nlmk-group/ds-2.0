import React from 'react';
import { ErrorPageProps } from '../types';
declare const _default: {
    title: string;
    component: React.FC<ErrorPageProps>;
    decorators: ((Story: () => any) => JSX.Element)[];
    argTypes: {
        errorCode: {
            description: string;
            options: number[];
            control: {
                type: string;
            };
            defaultValue: number;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        description: {
            description: string;
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
        };
        hint: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
        };
    };
    parameters: {
        layout: string;
    };
};
export default _default;
export declare const ErrorPageDefault: {
    (argTypes: ErrorPageProps): JSX.Element;
    storyName: string;
    args: {
        description: string;
        hint: string;
    };
};
export declare const ErrorPage403: {
    (argTypes: ErrorPageProps): JSX.Element;
    storyName: string;
    args: {
        errorCode: number;
        description: string;
        hint: string;
    };
};
export declare const ErrorPage404: {
    (argTypes: ErrorPageProps): JSX.Element;
    storyName: string;
    args: {
        errorCode: number;
        description: string;
        hint: string;
    };
};
export declare const ErrorPageOthers: {
    (argTypes: ErrorPageProps): JSX.Element;
    storyName: string;
    args: {
        errorCode: number;
        description: string;
        hint: string;
    };
};
//# sourceMappingURL=ErrorPage.stories.d.ts.map