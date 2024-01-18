import React from 'react';
import { TIconProps } from '../types';
declare const _default: {
    title: string;
    component: React.FC<TIconProps>;
    argTypes: {
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
        size: {
            description: string;
            table: {
                defaultValue: {
                    summary: number;
                };
                type: {
                    summary: string;
                };
            };
            options: number[];
            control: {
                type: string;
            };
        };
        containerSize: {
            description: string;
            table: {
                defaultValue: {
                    summary: number;
                };
                type: {
                    summary: string;
                };
            };
            options: number[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const IconComponent: {
    (argsTypes: any): JSX.Element;
    storyName: string;
};
export declare const AllIcons: {
    (): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=Icon.stories.d.ts.map