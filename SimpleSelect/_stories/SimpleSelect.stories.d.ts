import { default as React } from '../../../../node_modules/react';
import { customInputColors, sizesMappingInput } from '../../declaration';
import { ISelectProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<ISelectProps>;
    argTypes: {
        value: {
            description: string;
            control: {
                type: string;
            };
        };
        onChange: {
            description: string;
            action: string;
        };
        id: {
            description: string;
            control: {
                type: string;
            };
        };
        portalContainerId: {
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
        menuWidth: {
            description: string;
            control: {
                type: string;
            };
        };
        placeholder: {
            description: string;
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
        withPortal: {
            description: string;
            control: {
                type: string;
            };
        };
        disabled: {
            description: string;
            control: {
                type: string;
            };
        };
        onBlur: {
            description: string;
            action: string;
        };
        onFocus: {
            description: string;
            action: string;
        };
        color: {
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
        scrollingItems: {
            description: string;
            control: {
                type: string;
            };
        };
        noOptionsText: {
            description: string;
            control: {
                type: string;
            };
        };
        searchable: {
            description: string;
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
        onEnterPress: {
            description: string;
            action: string;
        };
        style: {
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
        helperText: {
            description: string;
            control: {
                type: string;
            };
        };
    };
    decorators: ((Story: any) => React.JSX.Element)[];
    parameters: {
        actions: {
            argTypesRegex: string;
        };
    };
};
export default _default;
export declare const SelectDefault: {
    (args: ISelectProps): JSX.Element;
    args: {
        label: string;
    };
    storyName: string;
};
export declare const SelectWithSearch: {
    (args: ISelectProps): JSX.Element;
    args: {
        label: string;
        searchable: boolean;
    };
    storyName: string;
};
export declare const SelectDisabled: {
    (args: ISelectProps): JSX.Element;
    args: {
        label: string;
        disabled: boolean;
    };
    storyName: string;
};
export declare const SelectWithSelectionCallback: {
    (args: ISelectProps): JSX.Element;
    args: {
        label: string;
    };
    storyName: string;
};
export declare const SelectCompact: {
    (args: ISelectProps): JSX.Element;
    args: {
        label: string;
        size: sizesMappingInput;
    };
    storyName: string;
};
export declare const SelectScrollingItems: {
    (args: ISelectProps): JSX.Element;
    args: {
        label: string;
        scrollingItems: number;
    };
    storyName: string;
};
export declare const SelectSuccess: {
    (args: ISelectProps): JSX.Element;
    args: {
        label: string;
        color: customInputColors;
    };
    storyName: string;
};
export declare const SelectWarning: {
    (args: ISelectProps): JSX.Element;
    args: {
        label: string;
        color: customInputColors;
    };
    storyName: string;
};
export declare const SelectError: {
    (args: ISelectProps): JSX.Element;
    args: {
        label: string;
        color: customInputColors;
    };
    storyName: string;
};
export declare const SelectEmpty: {
    (args: ISelectProps): JSX.Element;
    args: {
        label: string;
    };
    storyName: string;
};
export declare const SelectWithCustomOptions: {
    (args: ISelectProps): JSX.Element;
    args: {
        label: string;
    };
    storyName: string;
};
//# sourceMappingURL=SimpleSelect.stories.d.ts.map