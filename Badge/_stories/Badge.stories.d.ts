import { default as React } from '../../../../node_modules/react';
import { variantsMapping } from '../../declaration';
import { EBadgeColors, EBadgeSizes } from '../enums';
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
                    summary: EBadgeSizes;
                };
                type: {
                    summary: string;
                };
            };
            options: EBadgeSizes[];
            control: {
                type: string;
            };
        };
        color: {
            description: string;
            table: {
                defaultValue: {
                    summary: EBadgeColors;
                };
                type: {
                    summary: string;
                };
            };
            options: EBadgeColors[];
            control: {
                type: string;
            };
        };
        variant: {
            description: string;
            table: {
                defaultValue: {
                    summary: variantsMapping;
                };
                type: {
                    summary: string;
                };
            };
            options: variantsMapping[];
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
export declare const BadgeShowcase: {
    (): JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
    };
};
//# sourceMappingURL=Badge.stories.d.ts.map