import { sizesMapping } from '../../declaration';
import { EIndicatorStatusMapping, EOrientationMapping } from '../enums';

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
    orientation: {
        description: string;
        table: {
            defaultValue: {
                summary: EOrientationMapping;
            };
            type: {
                summary: string;
            };
        };
        options: EOrientationMapping[];
        control: {
            type: string;
        };
    };
    indicatorSize: {
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
    indicatorStatus: {
        description: string;
        table: {
            defaultValue: {
                summary: EIndicatorStatusMapping;
            };
            type: {
                summary: string;
            };
        };
        options: EIndicatorStatusMapping[];
        control: {
            type: string;
        };
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map