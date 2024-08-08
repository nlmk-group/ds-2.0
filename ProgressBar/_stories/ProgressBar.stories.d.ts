import { default as React } from '../../../../node_modules/react';
import { IProgressBarProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IProgressBarProps>;
    argTypes: {
        percentage: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: number;
                };
            };
            control: {
                type: string;
                min: number;
                max: number;
            };
        };
        label: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: null;
                };
            };
            control: {
                type: string;
            };
        };
    };
    decorators: ((Story: any) => React.JSX.Element)[];
};
export default _default;
export declare const ProgressBarDefault: {
    (argsTypes: IProgressBarProps): JSX.Element;
    storyName: string;
};
export declare const ProgressBarWithLabel: {
    (argsTypes: IProgressBarProps): JSX.Element;
    storyName: string;
    args: {
        percentage: number;
    };
};
//# sourceMappingURL=ProgressBar.stories.d.ts.map