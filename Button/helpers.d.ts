import { EButtonFill, EButtonSizes, EButtonVariant } from './enums';

export interface ICombinedOption {
    variant: EButtonVariant;
    fill: EButtonFill;
    size?: EButtonSizes;
}
export declare const combinedOptions: (flag?: boolean) => ICombinedOption[];
export declare const variantsWithOneFill: Set<EButtonVariant>;
//# sourceMappingURL=helpers.d.ts.map