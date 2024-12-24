import { default as React } from '../../../../node_modules/react';
import { ELegendType } from '../enums';
import { ILegendColor, ILegendProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<ILegendProps>;
    argTypes: {
        type: {
            description: string;
            table: {
                defaultValue: {
                    summary: ELegendType;
                };
                type: {
                    summary: string;
                };
            };
            options: ELegendType[];
            control: {
                type: string;
            };
        };
        color: {
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
        colorList: {
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
        label: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        withPortal: {
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
        portalContainerId: {
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
        menuStyle: {
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
        menuLabel: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        onColorChange: {
            description: string;
            action: string;
        };
        tooltipText: {
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
    };
    decorators: ((Story: any) => React.JSX.Element)[];
};
export default _default;
export declare const LegendDefault: {
    (props: ILegendProps): JSX.Element;
    args: {
        type: ELegendType;
        colorList: ILegendColor[];
        label: string;
        color: {
            default: string;
            hover: string;
            active: string;
        };
    };
    storyName: string;
};
export declare const LegendEdit: {
    (props: ILegendProps): JSX.Element;
    args: {
        type: ELegendType;
        colorList: ILegendColor[];
        label: string;
        color: {
            default: string;
            hover: string;
            active: string;
        };
    };
    storyName: string;
};
export declare const LegendDisabled: {
    (props: ILegendProps): JSX.Element;
    args: {
        type: ELegendType;
        colorList: ILegendColor[];
        label: string;
        isDisabled: boolean;
        color: {
            default: string;
            hover: string;
            active: string;
        };
    };
    storyName: string;
};
export declare const LegendSeveralView: {
    (): JSX.Element;
    storyName: string;
};
export declare const LegendSeveralViewIcon: {
    (): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=Legend.stories.d.ts.map