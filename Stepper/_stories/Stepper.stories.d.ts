import { default as React } from '../../../../node_modules/react';
import { EStepColor, EStepState } from '../subcomponents/Step/enums';
import { IStepperProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IStepperProps>;
    decorators: ((Story: () => any) => React.JSX.Element)[];
    argTypes: {
        className: {
            description: string;
            control: {
                type: string;
            };
        };
        state: {
            description: string;
            table: {
                defaultValue: {
                    summary: EStepState;
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
        color: {
            description: string;
            table: {
                defaultValue: {
                    summary: EStepColor;
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
        stepName: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        index: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        showStep: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        onClick: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const StepperDefault: {
    (argTypes: IStepperProps): JSX.Element;
    storyName: string;
    args: {
        stepName: string;
        index: number;
        showStep: boolean;
    };
};
export declare const StepperWithSteps: {
    (): React.JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
    };
};
export declare const StepperWithInteractive: {
    (): React.JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
    };
};
export declare const StepperWithError: {
    (): React.JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
    };
};
//# sourceMappingURL=Stepper.stories.d.ts.map