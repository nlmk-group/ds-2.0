import { default as React } from '../../../../node_modules/react';
import { TTimePickerType } from '../types';

declare const _default: {
    title: string;
    component: React.FC<TTimePickerType>;
    decorators: ((Story: any) => React.JSX.Element)[];
    parameters: {
        actions: {
            argTypesRegex: string;
        };
    };
    argTypes: {
        onChange: {
            description: string;
            action: string;
            control: {
                type: string;
            };
        };
        onPeriodChange: {
            description: string;
            action: string;
            control: {
                type: string;
            };
        };
        value: {
            description: string;
            control: {
                type: string;
            };
        };
        valueFrom: {
            description: string;
            control: {
                type: string;
            };
        };
        valueTo: {
            description: string;
            control: {
                type: string;
            };
        };
        type: {
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
        enabledHourFrom: {
            description: string;
            control: {
                type: string;
            };
        };
        enabledHourTo: {
            description: string;
            control: {
                type: string;
            };
        };
        enabledMinuteFrom: {
            description: string;
            control: {
                type: string;
            };
        };
        enabledMinuteTo: {
            description: string;
            control: {
                type: string;
            };
        };
        disabledPanel: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        name: {
            description: string;
            control: {
                type: string;
            };
        };
        withPortal: {
            description: string;
            control: {
                type: string;
            };
        };
        withIcon: {
            description: string;
            control: {
                type: string;
            };
        };
        withPicker: {
            description: string;
            control: {
                type: string;
            };
        };
        label: {
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
        error: {
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
        disabled: {
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
        colored: {
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
        pseudo: {
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
        onReset: {
            description: string;
            action: string;
        };
        reset: {
            description: string;
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
    };
};
export default _default;
export declare const TimePickerDefault: {
    (argTypes: TTimePickerType): JSX.Element;
    storyName: string;
};
export declare const TimePickerWithLabel: {
    (argTypes: TTimePickerType): JSX.Element;
    storyName: string;
};
export declare const DisabledTimePicker: {
    (argTypes: TTimePickerType): JSX.Element;
    storyName: string;
};
export declare const TimePickerWithSeconds: {
    (argTypes: TTimePickerType): JSX.Element;
    storyName: string;
};
export declare const EnabledMinutesFromTo: {
    (argTypes: TTimePickerType): JSX.Element;
    storyName: string;
};
export declare const EnabledHoursFromTo: {
    (argTypes: TTimePickerType): JSX.Element;
    storyName: string;
};
export declare const OpenTimePickerOnInputFocus: {
    (argTypes: TTimePickerType): JSX.Element;
    storyName: string;
};
export declare const TimePickerWithoutIcon: {
    (argTypes: TTimePickerType): JSX.Element;
    storyName: string;
};
export declare const TimePickerWithPseudo: {
    (argTypes: TTimePickerType): JSX.Element;
    storyName: string;
};
export declare const TimePickerWithoutPicker: {
    (argTypes: TTimePickerType): JSX.Element;
    storyName: string;
};
export declare const TimePickerPeriod: {
    (argTypes: TTimePickerType): JSX.Element;
    storyName: string;
};
export declare const TimePickerPeriodWithSeconds: {
    (argTypes: TTimePickerType): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=TimePicker.stories.d.ts.map