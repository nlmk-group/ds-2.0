import { EPictureNames, EPictureSizes } from '../enums';

export declare const argsTypes: {
    name: {
        description: string;
        table: {
            defaultValue: {
                summary: EPictureNames;
            };
            type: {
                summary: string;
            };
        };
        options: string[];
        control: {
            type: string;
        };
    };
    size: {
        description: string;
        table: {
            defaultValue: {
                summary: EPictureSizes;
            };
            type: {
                summary: string;
            };
        };
        options: EPictureSizes[];
        control: {
            type: string;
        };
    };
};
//# sourceMappingURL=argsTypes.d.ts.map