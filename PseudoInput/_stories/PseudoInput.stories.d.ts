import { default as React } from '../../../../node_modules/react';
import { customInputColors } from '../../declaration';
import { EPseudoInputSizes } from '../enums';
import { IPseudoInputProps } from '../types';

declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<IPseudoInputProps & React.RefAttributes<HTMLDivElement>>;
    argTypes: {
        label: {
            description: string;
            control: {
                type: string;
            };
        };
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
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            options: EPseudoInputSizes[];
            control: {
                type: string;
            };
        };
        labelColor: {
            description: string;
            table: {
                defaultValue: {
                    summary: customInputColors;
                };
            };
            options: customInputColors[];
            control: {
                type: string;
            };
        };
        variant: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        color: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        className: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        suffix: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        style: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        badgeChildren: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    decorators: ((Story: any) => React.JSX.Element)[];
};
export default _default;
export declare const PseudoInputDefault: {
    (argTypes: IPseudoInputProps): JSX.Element;
    args: {
        label: string;
    };
    storyName: string;
};
export declare const PseudoInputSizes: {
    (): JSX.Element;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
    storyName: string;
};
export declare const PseudoInputColors: {
    (): JSX.Element;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
    storyName: string;
};
export declare const PseudoInputWithSuffixAndBadge: {
    (): JSX.Element;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
    storyName: string;
};
//# sourceMappingURL=PseudoInput.stories.d.ts.map