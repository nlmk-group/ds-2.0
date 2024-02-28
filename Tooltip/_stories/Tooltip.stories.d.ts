import React from 'react';
import { Args } from '@storybook/react';
declare const _default: {
    title: string;
    component: React.FC<import("../types").ITooltipProps>;
    argTypes: {
        title: {
            description: string;
            control: {
                type: string;
            };
        };
        description: {
            description: string;
            control: {
                type: string;
            };
        };
        behavior: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
        };
        placement: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
        };
        list: {
            description: string;
        };
        render: {
            description: string;
        };
        className: {
            description: string;
        };
    };
};
export default _default;
export declare const TooltipDefault: {
    (argsTypes: Args): JSX.Element;
    storyName: string;
};
export declare const TooltipWithDescription: {
    (argsTypes: Args): JSX.Element;
    storyName: string;
};
export declare const TooltipWrappedDisabled: {
    (argsTypes: Args): JSX.Element;
    storyName: string;
};
export declare const TooltipWithFull: {
    (argsTypes: Args): JSX.Element;
    storyName: string;
};
export declare const TooltipPlacements: {
    (argsTypes: Args): JSX.Element;
    storyName: string;
};
export declare const TooltipBehaviors: {
    (argsTypes: Args): JSX.Element;
    storyName: string;
};
export declare const TooltipWithCustom: {
    (argsTypes: Args): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=Tooltip.stories.d.ts.map