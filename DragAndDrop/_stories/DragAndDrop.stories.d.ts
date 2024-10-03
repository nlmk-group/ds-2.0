import { default as React, ReactNode } from '../../../../node_modules/react';
import { sizesMapping } from '../../declaration';
import { EDnDFileType, EDnDStatusColor } from '../enums';
import { IDragAndDropProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IDragAndDropProps>;
    decorators: ((Story: any) => React.JSX.Element)[];
    argTypes: {
        className: {
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
        title: {
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
        description: {
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
        btnLabel: {
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
        fileType: {
            description: string;
            table: {
                defaultValue: {
                    summary: EDnDFileType;
                };
                type: {
                    summary: string;
                };
            };
            options: EDnDFileType[];
            control: {
                type: string;
            };
        };
        statusColor: {
            description: string;
            table: {
                defaultValue: {
                    summary: EDnDStatusColor;
                };
                type: {
                    summary: string;
                };
            };
            options: EDnDStatusColor[];
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
        withIcon: {
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        customIcon: {
            description: string;
            control: {
                type: string;
            };
        };
        multiple: {
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        loading: {
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        percentUpload: {
            description: string;
            table: {
                defaultValue: {
                    summary: number;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        smallText: {
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        smallIcon: {
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
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
                    summary: boolean;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        accept: {
            description: string;
            control: {
                type: string;
            };
        };
        onUpload: {
            description: string;
        };
        cancelUpload: {
            description: string;
        };
    };
};
export default _default;
export declare const dndDefault: {
    (argTypes: IDragAndDropProps): ReactNode;
    storyName: string;
};
export declare const dndSizes: {
    (argTypes: IDragAndDropProps): ReactNode;
    storyName: string;
    args: {
        onUpload: import('@storybook/addon-actions').HandlerFunction;
    };
};
export declare const dndFileTypes: {
    (argTypes: IDragAndDropProps): ReactNode;
    storyName: string;
    args: {
        onUpload: import('@storybook/addon-actions').HandlerFunction;
    };
};
export declare const dndCustomAccept: {
    (argTypes: IDragAndDropProps): ReactNode;
    storyName: string;
    args: {
        onUpload: import('@storybook/addon-actions').HandlerFunction;
        accept: string;
        description: string;
        fileType: EDnDFileType;
        title: string;
    };
};
export declare const dndStatuses: {
    (argTypes: IDragAndDropProps): ReactNode;
    storyName: string;
    args: {
        onUpload: import('@storybook/addon-actions').HandlerFunction;
        cancelUpload: import('@storybook/addon-actions').HandlerFunction;
    };
};
export declare const dndStatuses2: {
    (argTypes: IDragAndDropProps): ReactNode;
    storyName: string;
    args: {
        onUpload: import('@storybook/addon-actions').HandlerFunction;
        cancelUpload: import('@storybook/addon-actions').HandlerFunction;
    };
};
export declare const dndSmallIcon: {
    (argTypes: IDragAndDropProps): ReactNode;
    storyName: string;
    args: {
        onUpload: import('@storybook/addon-actions').HandlerFunction;
        smallIcon: boolean;
    };
};
export declare const dndCustomIcon: {
    (argTypes: IDragAndDropProps): ReactNode;
    storyName: string;
};
export declare const dndCustom: {
    (argTypes: IDragAndDropProps): ReactNode;
    storyName: string;
};
//# sourceMappingURL=DragAndDrop.stories.d.ts.map