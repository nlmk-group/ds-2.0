import { EFill, EVariant, ESizes } from './enums';

export interface IcombinedOption {
  variant: EVariant;
  fill: EFill;
  size?: ESizes;
}

const variantMapping = Object.values(EVariant);
const fillMapping = Object.values(EFill);
const sizeMapping = Object.values(ESizes);

export const combinedOptions = (flag?: boolean) => {
  const arr: IcombinedOption[] = [];
  variantMapping.forEach((variant: EVariant) => {
    fillMapping.forEach((fill: EFill) => {
      if (flag) {
        sizeMapping.forEach((size: ESizes) => {
          arr.push({
            variant,
            fill,
            size
          })
        })
      } else {
        arr.push({
          variant,
          fill
        })
      }
    })
  });

  return arr;
};
