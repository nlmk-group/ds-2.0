import { CSSProperties } from 'react';

const HANDLE_HEIGHT = 12;

export interface IGetSplitterStylesParams {
  bothSizesSet: boolean;
  oneSizeSet: boolean;
  isVertical: boolean;
  noSizesSet: boolean;
  isShowBottomComponent: boolean;
  topHeight: number;
  topComponentSize?: number;
  bottomComponentSize?: number;
}

/**
 * Вычисляет CSS-стили для контейнера и двух панелей сплиттера.
 *
 * Функция учитывает:
 * 1. Ориентацию (Vertical/Horizontal).
 * 2. Режим отображения (процентный или фиксированный).
 * 3. Состояние видимости второй панели (схлопывание).
 *
 * @param {IGetSplitterStylesParams} params - Объект с флагами состояния и размерами.
 * @returns {{
 *   containerStyle: React.CSSProperties,
 *   topSizeStyle: React.CSSProperties,
 *   bottomSizeStyle: React.CSSProperties
 * }} Объект со стилями для родительского контейнера и дочерних панелей.
 *
 */

export const getSplitterStyles = ({
  bothSizesSet,
  oneSizeSet,
  isVertical,
  noSizesSet,
  isShowBottomComponent,
  topHeight,
  topComponentSize = 0,
  bottomComponentSize = 0
}: IGetSplitterStylesParams): {
    containerStyle: React.CSSProperties;
    topSizeStyle: React.CSSProperties;
    bottomSizeStyle: React.CSSProperties;
} => {
  const sizeProp = isVertical ? 'width' : 'height';

  const getContainerStyle = (): CSSProperties => {
    if (!isShowBottomComponent) {
      return topComponentSize ? { [sizeProp]: topComponentSize } : {};
    }

    if (bothSizesSet) {
      const totalSize = topComponentSize + bottomComponentSize + (isVertical ? 0 : HANDLE_HEIGHT);
      return { [sizeProp]: totalSize };
    }

    return {};
  };

  const getPanelStyles = () => {
    if (!isShowBottomComponent) {
      return {
        topSizeStyle: { [sizeProp]: '100%' } as CSSProperties,
        bottomSizeStyle: {
          [sizeProp]: 0,
          opacity: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        } as CSSProperties
      };
    }

    const isPercentMode = bothSizesSet || noSizesSet || oneSizeSet;

    return {
      topSizeStyle: {
        [sizeProp]: isPercentMode ? `${topHeight}%` : 'auto'
      } as CSSProperties,
      bottomSizeStyle: {
        [sizeProp]: isPercentMode ? `${100 - topHeight}%` : 'auto',
        opacity: 1,
        overflow: 'auto',
        pointerEvents: 'auto'
      } as CSSProperties
    };
  };

  const { topSizeStyle, bottomSizeStyle } = getPanelStyles();

  return {
    containerStyle: getContainerStyle(),
    topSizeStyle,
    bottomSizeStyle
  };
};
