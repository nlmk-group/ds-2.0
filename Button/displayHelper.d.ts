import { EFill, EVariant, ESizes } from './enums';
export interface ICombinedOption {
    variant: EVariant;
    fill: EFill;
    size?: ESizes;
}
export declare const combinedOptions: (flag?: boolean) => ICombinedOption[];
//# sourceMappingURL=displayHelper.d.ts.map