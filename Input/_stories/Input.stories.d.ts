import React from 'react';
import { TInputProps } from '../types';
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0fc72a6d").R, import("../types").IInputAdditionalProps & Omit<Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React.InputHTMLAttributes<HTMLInputElement>>, "size"> & Omit<Pick<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "key" | keyof React.TextareaHTMLAttributes<HTMLTextAreaElement>>, "size"> & {
    inputRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement> | undefined;
}>;
export default _default;
export declare const InputDefault: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputWithLabel: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputWithLabelAndHelperText: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputWithLabelHelperTextAndTextIcon: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputWithLabelHelperTextElement: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputDisabled: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputError: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputWarning: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputSuccess: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputCompact: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputMultilineDefault: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputMultilineWithLabel: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputMultilineWithLabelAndHelperText: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputMultilineResize: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputMultilineDisabled: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputWithColored: {
    (): JSX.Element;
    storyName: string;
};
export declare const InputMultilineError: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputMultilineWarning: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputMultilineSuccess: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputPseudoDefaultChecking: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
    args: {
        onChange: import("jest-mock").Mock<unknown, unknown[]>;
    };
    play({ args, canvasElement }: {
        args: any;
        canvasElement: any;
    }): Promise<void>;
};
//# sourceMappingURL=Input.stories.d.ts.map