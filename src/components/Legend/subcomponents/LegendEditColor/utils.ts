import { ILegendColor } from '../../types';

/**
 * Получить цвет элемента, в зависимости от состояния, и проверить валидность color.default
 */
export const getBackgroundColor = (
  color: ILegendColor,
  { isDisabled, isOpen, isHover }: { isDisabled: boolean; isOpen: boolean; isHover: boolean }
) => {
  const defaultColorVal = 'var(--steel-80)';

  // Проверяем валидность color.default
  if (color.default && 'supports' in CSS && !CSS.supports('color', color.default)) {
    return defaultColorVal;
  }

  const conditions = [
    { check: isDisabled, result: color.default },
    { check: isOpen, result: color.active },
    { check: isHover, result: color.hover }
  ];

  return conditions.find(cond => cond.check)?.result ?? color.default;
};
