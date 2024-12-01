import { default as React } from '../../../../node_modules/react';
import { sizesMapping, variantsMapping } from '../../declaration';
import { EChipColors } from '../enums';
import { IChipProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<import('../../Badge/types').IBadgeProps>;
    decorators: ((Story: () => any) => React.JSX.Element)[];
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
                    summary: EChipColors;
                };
                type: {
                    summary: string;
                };
            };
            options: EChipColors[];
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
};
export default _default;
export declare const ChipDefault: {
    (argsTypes: IChipProps): JSX.Element;
    storyName: string;
    args: {
        children: string;
    };
};
export declare const ChipShowcase: {
    (): JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
    };
};
//# sourceMappingURL=Chip.stories.d.ts.map