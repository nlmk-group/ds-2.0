import { EDividerOrientation, EDividerType } from '../enums';

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
                summary: EDividerOrientation;
            };
            type: {
                summary: string;
            };
        };
        options: EDividerOrientation[];
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
                summary: EDividerType;
            };
            type: {
                summary: string;
            };
        };
        options: EDividerType[];
        control: {
            type: string;
        };
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map