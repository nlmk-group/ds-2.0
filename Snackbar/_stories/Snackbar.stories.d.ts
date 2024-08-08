import { default as React, ReactNode } from '../../../../node_modules/react';
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
                    summary: import('../enums').ESnackbarColors;
                };
                type: {
                    summary: string;
                };
            };
            options: import('../enums').ESnackbarColors[];
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
        close: {
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
    args: {
        children: string;
    };
};
//# sourceMappingURL=Snackbar.stories.d.ts.map