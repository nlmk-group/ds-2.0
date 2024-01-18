import { colorsMapping, sizesMapping, variantsMapping } from '../../declaration/enums';
export declare const argsTypes: {
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
    color: {
        description: string;
        table: {
            defaultValue: {
                summary: colorsMapping;
            };
            type: {
                summary: string;
            };
        };
        options: colorsMapping[];
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
};
//# sourceMappingURL=argsTypes.d.ts.map