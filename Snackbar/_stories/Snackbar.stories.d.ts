import { default as React, ReactNode } from '../../../../node_modules/react';
import { ESnackbarColors, ESnackbarTypes } from '../enums';
import { ISnackbarProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<ISnackbarProps>;
    decorators: ((Story: any) => React.JSX.Element)[];
    argTypes: {
        children: {
            description: string;
            control: {
                type: string;
            };
        };
        color: {
            description: string;
            table: {
                defaultValue: {
                    summary: ESnackbarColors;
                };
                type: {
                    summary: string;
                };
            };
            options: ESnackbarColors[];
            control: {
                type: string;
            };
        };
        type: {
            description: string;
            table: {
                defaultValue: {
                    summary: ESnackbarTypes;
                };
                type: {
                    summary: string;
                };
            };
            options: ESnackbarTypes[];
            control: {
                type: string;
            };
        };
        onClose: {
            description: string;
            control: {
                type: string;
            };
        };
        showCountdown: {
            description: string;
            control: {
                type: string;
            };
        };
        startIcon: {
            description: string;
            control: {
                type: string;
            };
        };
        actionButton: {
            description: string;
            control: {
                type: string;
            };
        };
        actionText: {
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
        autoHideDuration: {
            description: string;
            table: {
                defaultValue: {
                    summary: number;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const DefaultSnackbar: {
    (argTypes: ISnackbarProps): ReactNode;
    storyName: string;
};
export declare const SnackbarColors: {
    (argTypes: ISnackbarProps): ReactNode;
    storyName: string;
    args: {
        startIcon: boolean;
        actionButton: boolean;
    };
    parameters: {
        controls: {
            disable: boolean;
        };
    };
};
export declare const SnackbarIndicationColors: {
    (argTypes: ISnackbarProps): ReactNode;
    storyName: string;
    args: {
        startIcon: boolean;
        actionButton: boolean;
    };
    parameters: {
        controls: {
            disable: boolean;
        };
    };
};
export declare const SnackbarTimer: {
    (argTypes: ISnackbarProps): ReactNode;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
    };
};
//# sourceMappingURL=Snackbar.stories.d.ts.map