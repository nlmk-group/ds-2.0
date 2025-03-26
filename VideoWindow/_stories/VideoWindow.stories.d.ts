import { default as React } from '../../../../node_modules/react';
import { TVideoWindowProps } from '../types';

declare const _default: {
    title: string;
    component: ({ videoUrl, id, title, autoPlay, resizable, draggable, draggableStartPosition, onClose, style, className }: TVideoWindowProps) => React.JSX.Element;
    decorators: ((Story: any) => React.JSX.Element)[];
    parameters: {
        actions: {
            argTypesRegex: string;
        };
    };
};
export default _default;
export declare const VideoWindowDefault: {
    (argTypes: TVideoWindowProps): JSX.Element;
    args: {
        videoUrl: string;
        title: string;
        autoPlay: boolean;
        resizable: boolean;
        draggable: boolean;
    };
    storyName: string;
};
export declare const VideoWindowWithDragAndResize: {
    (argTypes: TVideoWindowProps): JSX.Element;
    args: {
        videoUrl: string;
        title: string;
    };
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
export declare const VideoWindowWithAutoPlay: {
    (argTypes: TVideoWindowProps): JSX.Element;
    args: {
        videoUrl: string;
        title: string;
    };
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
//# sourceMappingURL=VideoWindow.stories.d.ts.map