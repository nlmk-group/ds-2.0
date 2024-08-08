import { sizesMapping } from '../../declaration';
import { indicatorStatusMapping, orientationMapping } from '../enums';

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
                summary: indicatorStatusMapping;
            };
            type: {
                summary: string;
            };
        };
        options: indicatorStatusMapping[];
        control: {
            type: string;
        };
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map