import { ESkeletonAnimation } from '../types';

declare const argsTypes: {
    id: {
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
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    count: {
        description: string;
        control: {
            type: string;
            default: number;
        };
        table: {
            defaultValue: {
                summary: number;
            };
        };
    };
    width: {
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
    height: {
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
    animation: {
        description: string;
        table: {
            defaultValue: {
                summary: ESkeletonAnimation;
            };
            type: {
                summary: string;
            };
        };
        options: ESkeletonAnimation[];
        control: {
            type: string;
        };
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map