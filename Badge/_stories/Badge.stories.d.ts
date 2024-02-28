import React from 'react';
import { IBadgeProps } from '../types';
declare const _default: {
    title: string;
    component: React.FC<IBadgeProps>;
    decorators: ((Story: () => any) => JSX.Element)[];
    argTypes: {
        children: {
            description: string;
            control: {
                type: string;
            };
        };
        size: {
            description: string;
            table: {
                defaultValue: {
                    summary: import("../../declaration").sizesMapping;
                };
                type: {
                    summary: string;
                };
            };
            options: import("../../declaration").sizesMapping[];
            control: {
                type: string;
            };
        };
        color: {
            description: string;
            table: {
                defaultValue: {
                    summary: import("../../declaration").colorsMapping;
                };
                type: {
                    summary: string;
                };
            };
            options: import("../../declaration").colorsMapping[];
            control: {
                type: string;
            };
        };
        variant: {
            description: string;
            table: {
                defaultValue: {
                    summary: import("../../declaration").variantsMapping;
                };
                type: {
                    summary: string;
                };
            };
            options: import("../../declaration").variantsMapping[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const BadgeDefault: {
    (argsTypes: IBadgeProps): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=Badge.stories.d.ts.map