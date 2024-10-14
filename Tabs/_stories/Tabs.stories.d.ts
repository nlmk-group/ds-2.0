import { default as React } from '../../../../node_modules/react';
import { EBadgeColors } from '../../Badge/enums';
import { ITabProps } from '../subcomponents/Tab/types';

declare const _default: {
    title: string;
    component: React.FC<import('../types').ITabsProps> & Record<"Tab", React.FC<ITabProps>> & Record<"Tooltip", React.FC<import('../../Tooltip/types').ITooltipProps>> & Record<"Icon", React.FC<import('../../Icon/types').TIconProps>>;
    decorators: ((Story: () => any) => React.JSX.Element)[];
    argTypes: {
        children: {
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
        scrollable: {
            description: string;
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        label: {
            description: string;
            control: {
                type: string;
            };
        };
        active: {
            description: string;
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        hasBadge: {
            description: string;
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        badgeChildren: {
            description: string;
            control: {
                type: string;
            };
        };
        badgeColor: {
            description: string;
            options: EBadgeColors[];
            control: {
                type: string;
            };
        };
        hasIcon: {
            description: string;
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
    };
};
export default _default;
export declare const TabDefault: {
    (args: ITabProps): JSX.Element;
    storyName: string;
    args: {
        hasBadge: boolean;
        hasIcon: boolean;
        badgeChildren: string;
        badgeColor: EBadgeColors;
    };
};
export declare const TabsDefault: {
    (args: ITabProps): JSX.Element;
    storyName: string;
};
export declare const TabsScrollable: {
    (args: ITabProps): React.JSX.Element;
    storyName: string;
};
//# sourceMappingURL=Tabs.stories.d.ts.map