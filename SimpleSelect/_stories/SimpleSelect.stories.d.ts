import { customInputColors, sizesMappingInput } from '../../declaration';
import { ISelectProps } from '../types';
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0fc72a6d").R, ISelectProps>;
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