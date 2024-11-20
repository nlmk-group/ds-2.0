import { default as React } from '../../../../node_modules/react';
import { IBox } from '../../Box/types';

declare const _default: {
    title: string;
    component: {
        ({ children, ...props }: IBox): React.JSX.Element;
        Column: ({ children, ...props }: IBox) => React.JSX.Element;
        Row: ({ children, ...props }: IBox) => React.JSX.Element;
    };
    decorators: ((Story: () => any) => React.JSX.Element)[];
    argTypes: {
        children: {
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
        background: {
            description: string;
            control: {
                type: string;
            };
        };
        color: {
            description: string;
            control: {
                type: string;
            };
        };
        paddingSpace: {
            description: string;
            table: {
                defaultValue: {
                    summary: import('../../declaration').sizesMappingInput;
                };
                type: {
                    summary: string;
                };
            };
            options: import('../../declaration').sizesMappingInput[];
            control: {
                type: string;
            };
        };
        height: {
            description: string;
            control: {
                type: string;
            };
        };
        width: {
            description: string;
            control: {
                type: string;
            };
        };
        maxWidth: {
            description: string;
            control: {
                type: string;
            };
        };
        gap: {
            description: string;
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
        };
        border: {
            description: string;
            control: {
                type: string;
            };
        };
        borderRadius: {
            description: string;
            control: {
                type: string;
            };
        };
        display: {
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
        flexDirection: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
        };
        justifyContent: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
        };
        alignItems: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
        };
        flexWrap: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const GridDefault: {
    (argTypes: IBox): JSX.Element;
    storyName: string;
    args: {
        background: string;
    };
};
export declare const GridOrientation: {
    (argTypes: IBox): JSX.Element;
    storyName: string;
    args: {
        background: string;
    };
};
export declare const GridEqualWidthColumns: {
    (argTypes: IBox): JSX.Element;
    storyName: string;
    args: {
        background: string;
    };
};
export declare const SettingOneColumnWidth: {
    (argTypes: IBox): JSX.Element;
    storyName: string;
    args: {
        background: string;
    };
};
export declare const VariableWidthContent: {
    (argTypes: IBox): JSX.Element;
    storyName: string;
    args: {
        background: string;
        justifyContent: string;
    };
};
export declare const EqualWidthMultiRow: {
    (argTypes: IBox): JSX.Element;
    storyName: string;
    args: {
        background: string;
    };
};
export declare const VerticalAlignment: {
    (argTypes: IBox): JSX.Element;
    storyName: string;
    args: {
        background: string;
    };
};
export declare const HorizontalAlignment: {
    (argTypes: IBox): JSX.Element;
    storyName: string;
    args: {
        background: string;
    };
};
export declare const ColumnWrapping: {
    (argTypes: IBox): JSX.Element;
    storyName: string;
    args: {
        background: string;
    };
};
export declare const ColumnBreaks: {
    (argTypes: IBox): JSX.Element;
    storyName: string;
    args: {
        background: string;
    };
};
//# sourceMappingURL=Grid.stories.d.ts.map