import { EBadgeColors } from '../../Badge/enums';
import { ISlideToggleProps, ISlideToggleWithButtonProps } from '../types';

declare const _default: import('@storybook/core/csf').ComponentAnnotations<import('@storybook/react/dist/types-5617c98e').R, ISlideToggleProps>;
export default _default;
export declare const SlideToggleDefault: {
    (args: ISlideToggleProps): JSX.Element;
    storyName: string;
    args: {
        title: string;
    };
};
export declare const SlideToggleSizes: {
    (args: ISlideToggleProps): JSX.Element;
    storyName: string;
    args: {
        title: string;
    };
};
export declare const SlideToggleWithButton: {
    (args: ISlideToggleWithButtonProps): JSX.Element;
    storyName: string;
    args: {
        title: string;
        badgeChildren: string;
        badgeColor: EBadgeColors;
    };
    argTypes: {
        badgeColor: {
            description: string;
            options: EBadgeColors[];
            control: {
                type: string;
            };
        };
        badgeChildren: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export declare const SlideToggleCustomized: {
    (args: ISlideToggleProps): JSX.Element;
    storyName: string;
    args: {
        className: string;
        title: string;
    };
};
//# sourceMappingURL=SlideToggle.stories.d.ts.map