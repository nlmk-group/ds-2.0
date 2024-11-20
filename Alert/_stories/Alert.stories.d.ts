import { default as React, ReactNode } from '../../../../node_modules/react';
import { IAlertProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IAlertProps>;
    decorators: ((Story: any) => React.JSX.Element)[];
    parameters: {
        actions: {
            argTypesRegex: string;
        };
    };
    argTypes: {
        title: {
            description: string;
            control: {
                type: string;
            };
        };
        severity: {
            description: string;
            table: {
                defaultValue: {
                    summary: import('../enums').EAlertSeverity;
                };
                type: {
                    summary: string;
                };
            };
            options: import('../enums').EAlertSeverity[];
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
        action: {
            description: string;
            control: {
                type: null;
            };
        };
        close: {
            description: string;
            action: string;
            control: {
                type: null;
            };
        };
    };
};
export default _default;
interface IAlertStoryProps extends IAlertProps {
    showChildren?: boolean;
    showCloseButton?: boolean;
    showActionButton?: boolean;
    actionLabel?: string;
    onActionClick?: () => void;
}
export declare const AlertDefault: {
    ({ showChildren, showCloseButton, showActionButton, actionLabel, onActionClick, close, action, ...argTypes }: IAlertStoryProps): ReactNode;
    storyName: string;
    args: {
        title: string;
        showChildren: boolean;
        showCloseButton: boolean;
        showActionButton: boolean;
        actionLabel: string;
    };
    argTypes: {
        showChildren: {
            description: string;
            control: {
                type: string;
            };
        };
        showCloseButton: {
            description: string;
            control: {
                type: string;
            };
        };
        showActionButton: {
            description: string;
            control: {
                type: string;
            };
        };
        actionLabel: {
            description: string;
            control: {
                type: string;
            };
        };
        onActionClick: {
            description: string;
            action: string;
            control: {
                type: null;
            };
        };
    };
};
export declare const AlertVariants: {
    ({ close, showCloseButton, ...argTypes }: IAlertProps & {
        showCloseButton?: boolean | undefined;
    }): ReactNode;
    storyName: string;
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    args: {
        showCloseButton: boolean;
    };
    argTypes: {
        showCloseButton: {
            description: string;
            control: {
                type: string;
            };
        };
        close: {
            action: string;
            control: {
                type: null;
            };
        };
    };
};
export declare const AlertWithActions: {
    ({ close, onActionClick, actionLabel, showCloseButton, showActionButton, ...argTypes }: IAlertProps & {
        onActionClick?: (() => void) | undefined;
        actionLabel?: string | undefined;
        showCloseButton?: boolean | undefined;
        showActionButton?: boolean | undefined;
    }): ReactNode;
    storyName: string;
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    args: {
        showCloseButton: boolean;
        showActionButton: boolean;
        actionLabel: string;
    };
    argTypes: {
        close: {
            action: string;
            control: {
                type: null;
            };
        };
        onActionClick: {
            action: string;
            control: {
                type: null;
            };
        };
        actionLabel: {
            description: string;
            control: {
                type: string;
            };
        };
        showCloseButton: {
            description: string;
            control: {
                type: string;
            };
        };
        showActionButton: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export declare const AlertWithCustomContent: {
    ({ close, showCloseButton, ...argTypes }: IAlertProps & {
        showCloseButton?: boolean | undefined;
    }): ReactNode;
    storyName: string;
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    args: {
        showCloseButton: boolean;
    };
    argTypes: {
        close: {
            action: string;
            control: {
                type: null;
            };
        };
        showCloseButton: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
//# sourceMappingURL=Alert.stories.d.ts.map