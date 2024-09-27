import { EButtonFill, EButtonSizes, EButtonVariant } from './enums';

export interface ICombinedOption {
    variant: EButtonVariant;
    fill: EButtonFill;
    size?: EButtonSizes;
}
export declare const unsupportedButtonVariants: Record<string, Record<string, EButtonFill>>;
export declare const combinedOptions: (flag?: boolean) => ICombinedOption[];
//# sourceMappingURL=helpers.d.ts.map