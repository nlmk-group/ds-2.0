import { default as React } from '../../../../node_modules/react';
import { EButtonColor, EButtonSize, EButtonVariant } from '../enums';

declare const argsTypes: {
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
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map