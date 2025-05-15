import { ReactNode } from '../../../../node_modules/react';
import { IModalProps } from '../types';

declare const _default: import('@storybook/core/csf').ComponentAnnotations<import('@storybook/react/dist/types-5617c98e').R, IModalProps>;
export default _default;
export declare const ModalDefault: {
    (argsTypes: IModalProps): ReactNode;
    storyName: string;
};
export declare const ModalScroll: {
    (argsTypes: IModalProps): ReactNode;
    storyName: string;
    args: {
        disablePageScroll: boolean;
    };
};
export declare const DraggableModal: {
    (argsTypes: IModalProps): ReactNode;
    storyName: string;
    args: {
        isDraggable: boolean;
    };
};
export declare const ResizableModal: {
    (argsTypes: IModalProps): ReactNode;
    storyName: string;
    args: {
        isResizable: boolean;
    };
};
//# sourceMappingURL=Modal.stories.d.ts.map