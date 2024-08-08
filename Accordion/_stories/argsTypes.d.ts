import { iconsMapping, sizesMapping, variantsMapping } from '../enums';

export declare const argsTypes: {
    size: {
        description: string;
        table: {
            defaultValue: {
                summary: sizesMapping;
            };
            type: {
                summary: string;
            };
        };
        options: sizesMapping[];
        control: {
            type: string;
        };
    };
    variant: {
        description: string;
        table: {
            defaultValue: {
                summary: variantsMapping;
            };
            type: {
                summary: string;
            };
        };
        options: variantsMapping[];
        control: {
            type: string;
        };
    };
    multipleExpanded: {
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
    startIcon: {
        description: string;
        table: {
            defaultValue: {
                summary: iconsMapping;
            };
            type: {
                summary: string;
            };
        };
        options: iconsMapping[];
        control: {
            type: string;
        };
    };
    endIcon: {
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
        options: iconsMapping[];
        control: {
            type: string;
        };
    };
    disabled: {
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
};
//# sourceMappingURL=argsTypes.d.ts.map