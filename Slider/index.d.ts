import { default as React, PropsWithChildren } from '../../../node_modules/react';

export declare const Slider: {
    Control: React.FC<import('./subcomponents/Control/types').ISliderControlProps>;
    Rail: React.FC<import('./subcomponents/Rail/types').IControlRailProps>;
    Wrapper: ({ children }: PropsWithChildren) => React.JSX.Element;
    InputWrapper: ({ children }: PropsWithChildren) => React.JSX.Element;
    ControlWrapper: ({ children }: PropsWithChildren) => React.JSX.Element;
    Input: ({ setHover, ...props }: React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & import('./subcomponents/InputSlider/types').InputProps) => React.JSX.Element;
};
//# sourceMappingURL=index.d.ts.map