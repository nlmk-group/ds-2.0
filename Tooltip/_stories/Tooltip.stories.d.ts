import { default as React } from '../../../../node_modules/react';
import { Args } from '@storybook/react';
import { ETooltipPlacementType } from '../enums';

declare const _default: {
    title: string;
    component: React.FC<import('../types').ITooltipProps>;
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
                    summary: import('../enums').ETooltipBehaviorType;
                };
            };
            options: import('../enums').ETooltipBehaviorType[];
            control: {
                type: string;
            };
        };
        placement: {
            description: string;
            table: {
                defaultValue: {
                    summary: ETooltipPlacementType;
                };
            };
            options: ETooltipPlacementType[];
            control: {
                type: string;
            };
        };
        clickable: {
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
export declare const TooltipWithOpacity: {
    (argsTypes: Args): JSX.Element;
    storyName: string;
};
export declare const TooltipWrappedDisabled: {
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