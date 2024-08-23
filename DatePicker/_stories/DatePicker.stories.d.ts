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
export declare const Default: {
    (argTypes: TDatePickerProps): JSX.Element;
    args: {};
};
export declare const WithColored: () => JSX.Element;
export declare const LevelMonth: () => JSX.Element;
export declare const LevelQuarter: () => JSX.Element;
export declare const LevelYear: () => JSX.Element;
export declare const EnglishDatepicker: () => JSX.Element;
export declare const EnabledHoursFromTo: () => JSX.Element;
export declare const EnabledMinutesFromTo: () => JSX.Element;
export declare const EnabledFromTo: () => JSX.Element;
export declare const WithTime: () => JSX.Element;
export declare const WithSeconds: () => JSX.Element;
export declare const Period: () => JSX.Element;
export declare const PeriodMonth: () => JSX.Element;
export declare const PeriodQuarter: () => JSX.Element;
export declare const PeriodYear: () => JSX.Element;
export declare const PeriodWithShift: () => JSX.Element;
export declare const PeriodWithCustomShift: () => JSX.Element;
export declare const LabelWithDisabled: () => JSX.Element;
export declare const DisableChangesOnBlur: () => JSX.Element;
export declare const OpenPickerOnInputFocus: () => JSX.Element;
export declare const DatepickerWithPseudo: () => JSX.Element;
export declare const WithoutYear: () => JSX.Element;
export declare const ExtraCompact: () => JSX.Element;
export declare const infiniteTimeScroll: () => JSX.Element;
//# sourceMappingURL=DatePicker.stories.d.ts.map