import React, { ReactNode } from 'react';
import { IAlert } from '../types';
declare const _default: {
    title: string;
    component: React.FC<IAlert>;
    argTypes: {
        title: {
            description: string;
            control: {
                type: string;
            };
        };
        severity: {
            description: string;
            table: {
                defaultValue: {
                    summary: import("../enums").severityMapping;
                };
                type: {
                    summary: string;
                };
            };
            options: import("../enums").severityMapping[];
            control: {
                type: string;
            };
        };
        close: {
            description: string;
            control: {
                type: string;
            };
        };
        action: {
            description: string;
            control: {
                type: string;
            };
        };
        className: {
            description: string;
            control: {
                type: string;
            };
        };
        props: {
            description: string;
        };
    };
};
export default _default;
export declare const AlertDefault: {
    (argTypes: IAlert): ReactNode;
    storyName: string;
    args: {
        title: string;
    };
};
//# sourceMappingURL=Alert.stories.d.ts.map