import React, { PropsWithChildren } from 'react';
export declare const Slider: {
    Control: React.FC<import("./subcomponents/Control/types").ISliderControlProps>;
    Rail: React.FC<import("./subcomponents/Rail/types").IControlRailProps>;
    Wrapper: ({ children }: PropsWithChildren) => JSX.Element;
    InputWrapper: ({ children }: PropsWithChildren) => JSX.Element;
    ControlWrapper: ({ children }: PropsWithChildren) => JSX.Element;
    Input: ({ setHover, ...props }: React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & import("./subcomponents/InputSlider/types").InputProps) => JSX.Element;
};
//# sourceMappingURL=index.d.ts.map