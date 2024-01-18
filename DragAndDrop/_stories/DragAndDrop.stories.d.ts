import React, { ReactNode } from 'react';
import { sizesMapping } from '../../declaration';
import { fileTypeMapping, statusColorMapping } from '../enums';
import { IDragAndDrop } from '../types';
declare const _default: {
    title: string;
    component: React.FC<IDragAndDrop>;
    decorators: ((Story: any) => JSX.Element)[];
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
                    summary: fileTypeMapping;
                };
                type: {
                    summary: string;
                };
            };
            options: fileTypeMapping[];
            control: {
                type: string;
            };
        };
        statusColor: {
            description: string;
            table: {
                defaultValue: {
                    summary: statusColorMapping;
                };
                type: {
                    summary: string;
                };
            };
            options: statusColorMapping[];
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
    (argTypes: IDragAndDrop): ReactNode;
    storyName: string;
};
export declare const dndSizes: {
    (argTypes: IDragAndDrop): ReactNode;
    storyName: string;
    args: {
        onUpload: import("@storybook/addon-actions").HandlerFunction;
    };
};
export declare const dndFileTypes: {
    (argTypes: IDragAndDrop): ReactNode;
    storyName: string;
    args: {
        onUpload: import("@storybook/addon-actions").HandlerFunction;
    };
};
export declare const dndCustomAccept: {
    (argTypes: IDragAndDrop): ReactNode;
    storyName: string;
    args: {
        onUpload: import("@storybook/addon-actions").HandlerFunction;
        accept: string;
        description: string;
        fileType: fileTypeMapping;
        title: string;
    };
};
export declare const dndStatuses: {
    (argTypes: IDragAndDrop): ReactNode;
    storyName: string;
    args: {
        onUpload: import("@storybook/addon-actions").HandlerFunction;
        cancelUpload: import("@storybook/addon-actions").HandlerFunction;
    };
};
export declare const dndSmallText: {
    (argTypes: IDragAndDrop): ReactNode;
    storyName: string;
    args: {
        onUpload: import("@storybook/addon-actions").HandlerFunction;
        smallText: boolean;
    };
};
export declare const dndSmallIcon: {
    (argTypes: IDragAndDrop): ReactNode;
    storyName: string;
    args: {
        onUpload: import("@storybook/addon-actions").HandlerFunction;
        smallIcon: boolean;
    };
};
export declare const dndCustomIcon: {
    (argTypes: IDragAndDrop): ReactNode;
    storyName: string;
};
export declare const dndCustom: {
    (argTypes: IDragAndDrop): ReactNode;
    storyName: string;
};
//# sourceMappingURL=DragAndDrop.stories.d.ts.map