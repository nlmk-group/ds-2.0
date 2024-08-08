import { default as React } from '../../../../node_modules/react';
import { IBadgeProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IBadgeProps>;
    decorators: ((Story: () => any) => React.JSX.Element)[];
    argTypes: {
        children: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        size: {
            description: string;
            table: {
                defaultValue: {
                    summary: import('../enums').EBadgeSizes;
                };
                type: {
                    summary: string;
                };
            };
            options: import('../enums').EBadgeSizes[];
            control: {
                type: string;
            };
        };
        color: {
            description: string;
            table: {
                defaultValue: {
                    summary: import('../enums').EBadgeColors;
                };
                type: {
                    summary: string;
                };
            };
            options: import('../enums').EBadgeColors[];
            control: {
                type: string;
            };
        };
        variant: {
            description: string;
            table: {
                defaultValue: {
                    summary: import('../../declaration').variantsMapping;
                };
                type: {
                    summary: string;
                };
            };
            options: import('../../declaration').variantsMapping[];
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
    args: {
        children: string;
    };
};
//# sourceMappingURL=Badge.stories.d.ts.map