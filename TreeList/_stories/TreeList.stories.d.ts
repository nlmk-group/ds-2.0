import { default as React } from '../../../../node_modules/react';
import { TTreeListProps } from '../types';

declare const _default: {
    title: string;
    component: (prop: TTreeListProps) => React.JSX.Element;
    decorators: ((Story: any) => React.JSX.Element)[];
    parameters: {
        actions: {
            argTypesRegex: string;
        };
    };
};
export default _default;
export declare const TreeListDefault: {
    (argTypes: TTreeListProps): JSX.Element;
    args: {
        checkable: boolean;
        draggable: boolean;
        rowHeight: string;
    };
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
    storyName: string;
};
export declare const TreeListCheckableOnly: {
    (): JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
};
export declare const TreeListDraggableOnly: {
    (): JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
};
export declare const TreeListSimpleCheckboxes: {
    (): JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
};
export declare const TreeListSizes: {
    (): JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
};
//# sourceMappingURL=TreeList.stories.d.ts.map