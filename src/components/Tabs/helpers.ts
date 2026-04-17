import { ETabsOrientation, ETabsTabPosition, ETabsIndicatorPosition } from './enums';

/** Вычисление позиции индикатора по умолчанию */
export function getDefaultIndicatorPosition(
  orientation: `${ETabsOrientation}`,
  tabPosition: `${ETabsTabPosition}`
): ETabsIndicatorPosition {
  if (orientation === ETabsOrientation.horizontal) {
    return ETabsIndicatorPosition.bottom;
  }
  return tabPosition === ETabsTabPosition.left
    ? ETabsIndicatorPosition.right
    : ETabsIndicatorPosition.left;
}
