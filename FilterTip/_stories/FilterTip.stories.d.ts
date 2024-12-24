import { default as React } from '../../../../node_modules/react';
import { EFilterTipSize } from '../enums';
import { IFilterTipProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IFilterTipProps>;
    decorators: ((Story: any) => React.JSX.Element)[];
    argTypes: {
        id: {
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
        text: {
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
        isDisabled: {
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
        onDelete: {
            description: string;
            action: string;
        };
        isWithoutCancelIcon: {
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
        isActive: {
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
        onClick: {
            description: string;
            action: string;
        };
        size: {
            description: string;
            table: {
                defaultValue: {
                    summary: EFilterTipSize;
                };
                type: {
                    summary: string;
                };
            };
            options: EFilterTipSize[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const FilterTipDefault: {
    (): React.JSX.Element;
    storyName: string;
    args: {
        text: string;
    };
};
export declare const FilterTipDelete: {
    (args: IFilterTipProps): React.JSX.Element;
    storyName: string;
    args: {
        text: string;
    };
};
export declare const FilterTipVariants: {
    (): React.JSX.Element;
    storyName: string;
};
//# sourceMappingURL=FilterTip.stories.d.ts.map