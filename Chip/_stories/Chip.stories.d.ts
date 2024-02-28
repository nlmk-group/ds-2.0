import React from 'react';
import { IChipProps } from '../types';
declare const _default: {
    title: string;
    component: React.FC<import("../../Badge/types").IBadgeProps>;
    decorators: ((Story: () => any) => JSX.Element)[];
    argTypes: {
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
                    summary: import("../../declaration").sizesMapping;
                };
                type: {
                    summary: string;
                };
            };
            options: import("../../declaration").sizesMapping[];
            control: {
                type: string;
            };
        };
        color: {
            description: string;
            table: {
                defaultValue: {
                    summary: import("../../declaration").colorsMapping;
                };
                type: {
                    summary: string;
                };
            };
            options: import("../../declaration").colorsMapping[];
            control: {
                type: string;
            };
        };
        label: {
            description: string;
            control: {
                type: string;
            };
        };
        suffix: {
            description: string;
            control: {
                type: string;
            };
        };
        variant: {
            description: string;
            table: {
                defaultValue: {
                    summary: import("../../declaration").variantsMapping;
                };
                type: {
                    summary: string;
                };
            };
            options: import("../../declaration").variantsMapping[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const ChipDefault: {
    (argsTypes: IChipProps): JSX.Element;
    storyName: string;
    args: {
        children: string;
    };
};
//# sourceMappingURL=Chip.stories.d.ts.map