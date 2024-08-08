import { EButtonFill, EButtonSizes, EButtonVariant } from './enums';

export interface ICombinedOption {
  variant: EButtonVariant;
  fill: EButtonFill;
  size?: EButtonSizes;
}

const variantMapping = Object.values(EButtonVariant);
const fillMapping = Object.values(EButtonFill);
const sizeMapping = Object.values(EButtonSizes);

export const combinedOptions = (flag?: boolean) => {
  const arr: ICombinedOption[] = [];
  variantMapping.forEach((variant: EButtonVariant) => {
    fillMapping.forEach((fill: EButtonFill) => {
      if (flag) {
        sizeMapping.forEach((size: EButtonSizes) => {
          arr.push({
            variant,
            fill,
            size
          });
        });
      } else {
        arr.push({
          variant,
          fill
        });
      }
    });
  });

  return arr;
};

export const variantsWithOneFill = new Set<EButtonVariant>([
  EButtonVariant.secondary,
  EButtonVariant.success,
  EButtonVariant.warning,
  EButtonVariant.error,
  EButtonVariant.info
]);
