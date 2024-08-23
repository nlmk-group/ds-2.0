import { default as React } from '../../../../node_modules/react';
import { customInputColors } from '../../declaration';
import { IPseudoInputProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IPseudoInputProps>;
    argTypes: {
        label: {
            description: string;
            control: {
                type: string;
            };
        };
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
                    summary: string;
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
        labelColor: {
            description: string;
            table: {
                defaultValue: {
                    summary: customInputColors;
                };
            };
            options: customInputColors[];
            control: {
                type: string;
            };
        };
    };
    decorators: ((Story: any) => React.JSX.Element)[];
};
export default _default;
export declare const PseudoInputDefault: {
    (argTypes: IPseudoInputProps): JSX.Element;
    storyName: string;
};
export declare const PseudoInputSizeL: {
    (): JSX.Element;
    storyName: string;
};
export declare const PseudoInputError: {
    (): JSX.Element;
    storyName: string;
};
export declare const PseudoInputWarning: {
    (): JSX.Element;
    storyName: string;
};
export declare const PseudoInputSuccess: {
    (): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=PseudoInput.stories.d.ts.map