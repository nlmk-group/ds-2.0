import { default as React } from '../../../../node_modules/react';
import { TDatePickerProps } from '../types';
import { sizesMappingInput } from '../../declaration';

declare const _default: {
    title: string;
    component: TDatePickerProps;
    decorators: ((Story: any) => React.JSX.Element)[];
    argTypes: {
        onPeriodChange: {
            description: string;
            action: string;
        };
        onChange: {
            description: string;
            action: string;
        };
        value: {
            description: string;
        };
        valueFrom: {
            description: string;
        };
        valueTo: {
            description: string;
        };
        shiftFrom: {
            description: string;
        };
        shiftTo: {
            description: string;
        };
        shiftLength: {
            description: string;
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
        enabledFrom: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        enabledTo: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        enabledHourFrom: {
            description: string;
        };
        enabledHourTo: {
            description: string;
        };
        enabledMinuteFrom: {
            description: string;
        };
        enabledMinuteTo: {
            description: string;
        };
        level: {
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
        disableChange: {
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
        withoutWeekdays: {
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
        };
        label: {
            description: string;
        };
        size: {
            description: string;
            table: {
                defaultValue: {
                    summary: sizesMappingInput;
                };
            };
            options: sizesMappingInput[];
            control: {
                type: string;
            };
        };
        error: {
            description: string;
        };
        disabled: {
            description: string;
        };
        withPortal: {
            description: string;
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
        disableChangesOnBlur: {
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
        pseudoChildren: {
            description: string;
        };
        isHideYear: {
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
        portalContainerId: {
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
        onPanelChange: {
            description: string;
            action: string;
        };
        onSelect: {
            description: string;
            action: string;
        };
        infiniteTimeScroll: {
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
export declare const DatePickerDefault: {
    (argTypes: TDatePickerProps): JSX.Element;
    storyName: string;
    args: {};
};
export declare const DatePickerDefaultWithError: {
    (argTypes: TDatePickerProps): JSX.Element;
    storyName: string;
};
export declare const DatePickerWithColored: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerLevelMonth: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerLevelQuarter: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerLevelYear: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerEnglishDatePicker: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerEnabledHoursFromTo: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerEnabledMinutesFromTo: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerEnabledFromTo: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerWithTime: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerWithSeconds: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerPeriod: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerPeriodMonth: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerPeriodQuarter: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerPeriodYear: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerPeriodWithShift: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerPeriodWithCustomShift: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerLabelWithDisabled: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerDisableChangesOnBlur: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerOpenPickerOnInputFocus: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerWithPseudo: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerWithoutYear: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerExtraCompact: {
    (): JSX.Element;
    storyName: string;
};
export declare const DatePickerWithInfiniteTimeScroll: {
    (): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=DatePicker.stories.d.ts.map