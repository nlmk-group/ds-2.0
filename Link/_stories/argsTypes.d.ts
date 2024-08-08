import { sizeMapping, targetMapping } from '../enums';

export declare const argsTypes: {
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
    href: {
        description: string;
        control: {
            type: string;
        };
    };
    preventRedirect: {
        description: string;
        control: {
            type: string;
        };
    };
    disabled: {
        description: string;
        control: {
            type: string;
        };
    };
    size: {
        description: string;
        table: {
            defaultValue: {
                summary: sizeMapping;
            };
            type: {
                summary: string;
            };
        };
        options: sizeMapping[];
        control: {
            type: string;
        };
    };
    target: {
        description: string;
        table: {
            defaultValue: {
                summary: targetMapping;
            };
            type: {
                summary: string;
            };
        };
        options: targetMapping[];
        control: {
            type: string;
        };
    };
    iconLeft: {
        description: string;
        control: {
            type: string;
        };
    };
    iconRight: {
        description: string;
        control: {
            type: string;
        };
    };
};
//# sourceMappingURL=argsTypes.d.ts.map