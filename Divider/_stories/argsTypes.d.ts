import { orientationMapping, typeMapping } from '../enums';

declare const argsTypes: {
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
    dashed: {
        description: string;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    orientation: {
        description: string;
        table: {
            defaultValue: {
                summary: orientationMapping;
            };
            type: {
                summary: string;
            };
        };
        options: orientationMapping[];
        control: {
            type: string;
        };
    };
    orientationSpace: {
        description: string;
        control: {
            type: string;
        };
    };
    type: {
        description: string;
        table: {
            defaultValue: {
                summary: typeMapping;
            };
            type: {
                summary: string;
            };
        };
        options: typeMapping[];
        control: {
            type: string;
        };
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map