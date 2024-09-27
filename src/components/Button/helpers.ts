import { EButtonFill, EButtonSizes, EButtonVariant } from './enums';

export interface ICombinedOption {
  variant: EButtonVariant;
  fill: EButtonFill;
  size?: EButtonSizes;
}

const variantMapping = Object.values(EButtonVariant);
const fillMapping = Object.values(EButtonFill);
const sizeMapping = Object.values(EButtonSizes);

const { warning, success, error, clear, outline, solid } = EButtonFill;

export const unsupportedButtonVariants: Record<string, Record<string, EButtonFill>> = {
  [EButtonVariant.secondary]: { outline, clear },
  [EButtonVariant.grey]: { success, warning, error },
  [EButtonVariant.black]: { success, warning, error },
  [EButtonVariant.info]: { solid, outline }
};

export const combinedOptions = (flag?: boolean) => {
  const arr: ICombinedOption[] = [];

  variantMapping.forEach((variant: EButtonVariant) => {
    fillMapping.forEach((fill: EButtonFill) => {
      if (unsupportedButtonVariants[variant]?.[fill]) return;
      (flag ? sizeMapping : [undefined]).forEach(size => arr.push({ variant, fill, size }));
    });
  });

  return arr;
};
