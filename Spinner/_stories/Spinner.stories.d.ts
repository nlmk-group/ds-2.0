import { default as React } from '../../../../node_modules/react';
import { ESizesSpinner } from '../enums';
import { ISpinnerProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<ISpinnerProps>;
    decorators: ((Story: any) => React.JSX.Element)[];
    argTypes: {
        size: {
            description: string;
            control: {
                type: string;
                options: ESizesSpinner[];
            };
            table: {
                defaultValue: {
                    summary: ESizesSpinner;
                };
            };
        };
        color: {
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
        bgColor: {
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
        children: {
            description: string;
            control: {
                type: string;
            };
        };
        percent: {
            description: string;
            control: {
                type: string;
            };
        };
        progressPercentage: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const SpinnerDefault: {
    (args: ISpinnerProps): JSX.Element;
    storyName: string;
};
export declare const SpinnerMSize: {
    (args: ISpinnerProps): JSX.Element;
    storyName: string;
};
export declare const SpinnerChangeColor: {
    (args: ISpinnerProps): JSX.Element;
    storyName: string;
};
export declare const SpinnerWithIcon: {
    (args: ISpinnerProps): JSX.Element;
    storyName: string;
};
export declare const SpinnerWithPercent: {
    (args: ISpinnerProps): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=Spinner.stories.d.ts.map