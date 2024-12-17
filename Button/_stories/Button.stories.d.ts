import { default as React } from '../../../../node_modules/react';
import { EButtonColor, EButtonSize, EButtonVariant } from '../enums';
import { IButtonProps } from '../types';

declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<IButtonProps & React.RefAttributes<HTMLButtonElement>>;
    argTypes: {
        children: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        color: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            options: EButtonColor[];
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
            options: EButtonSize[];
            control: {
                type: string;
            };
        };
        variant: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            options: EButtonVariant[];
            control: {
                type: string;
            };
        };
        disabled: {
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        startIcon: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
            mapping: {
                IconArticleOutlined32: React.JSX.Element;
                IconArticleOutlined24: React.JSX.Element;
                IconArticleOutlined16: React.JSX.Element;
            };
        };
        endIcon: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
            mapping: {
                IconArticleOutlined32: React.JSX.Element;
                IconArticleOutlined24: React.JSX.Element;
                IconArticleOutlined16: React.JSX.Element;
            };
        };
        startBadge: {
            description: string;
            control: {
                type: string;
            };
        };
        endBadge: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const ButtonDefault: {
    (args: IButtonProps): JSX.Element;
    storyName: string;
    args: {
        children: string;
    };
};
export declare const IconButtons: {
    (): React.JSX.Element;
    storyName: string;
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
};
export declare const ButtonsWithElements: {
    (): React.JSX.Element;
    storyName: string;
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
};
//# sourceMappingURL=Button.stories.d.ts.map