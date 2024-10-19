import { default as React } from '../../../../node_modules/react';
import { IFileProps } from '../subcomponents/File/types';

declare const _default: {
    title: string;
    component: React.FC<import('../types').IAttachFilesProps>;
    decorators: ((Story: () => any) => React.JSX.Element)[];
    parameters: {
        actions: {
            argTypesRegex: string;
        };
    };
    argTypes: {
        children: {
            description: string;
            control: {
                type: string;
            };
        };
        title: {
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
        checked: {
            description: string;
            control: {
                type: string;
            };
        };
        removed: {
            description: string;
            control: {
                type: string;
            };
        };
        commented: {
            description: string;
            control: {
                type: string;
            };
        };
        saved: {
            description: string;
            control: {
                type: string;
            };
        };
        addFile: {
            description: string;
            control: {
                type: string;
            };
        };
        removedOnClick: {
            description: string;
            onClick: {
                action: string;
            };
        };
        commentedOnClick: {
            description: string;
        };
        savedOnClick: {
            description: string;
        };
        addFileOnClick: {
            description: string;
        };
        description: {
            description: string;
            control: {
                type: string;
            };
        };
        empty: {
            description: string;
            control: {
                type: string;
            };
        };
        checkedValue: {
            description: string;
            control: {
                type: string;
            };
        };
        onCheckedChange: {
            description: string;
        };
        indeterminate: {
            description: string;
        };
        tick: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const AttachFilesDefault: {
    (argTypes: IFileProps): JSX.Element;
    storyName: string;
    args: {
        label: string;
    };
};
export declare const AttachFilesDescription: {
    (argTypes: IFileProps): JSX.Element;
    storyName: string;
    args: {
        description: string;
        label: string;
    };
};
export declare const AttachFilesLeftIcon: {
    (): JSX.Element;
    storyName: string;
};
export declare const AttachFilesControl: {
    (argTypes: IFileProps): JSX.Element;
    storyName: string;
    args: {
        removedOnClick: import('@storybook/addon-actions').HandlerFunction;
        commentedOnClick: import('@storybook/addon-actions').HandlerFunction;
        savedOnClick: import('@storybook/addon-actions').HandlerFunction;
        addFileOnClick: import('@storybook/addon-actions').HandlerFunction;
    };
};
export declare const AttachFilesWithoutTitle: {
    (): JSX.Element;
    storyName: string;
};
export declare const AttachFilesWithTitle: {
    (): JSX.Element;
    storyName: string;
};
export declare const AttachFilesList: {
    (): JSX.Element;
    storyName: string;
};
export declare const AttachFilesAddFileButton: {
    (): JSX.Element;
    storyName: string;
};
export declare const AttachFilesWithCheckboxes: {
    (): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=AttachFiles.stories.d.ts.map