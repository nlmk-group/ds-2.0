import { useCallback, useEffect, useRef, useState } from 'react';

import { ISplitterProps } from '../types';
import { ESplitterOrientation } from '../enums';
import { clamp, getSplitterStyles } from '../helpers';

/**
 * Хук для управления размерами Splitter-панелей.
 *
 * Поддерживает 3 режима задания размеров:
 * 1) `topComponentSize` и `bottomComponentSize` заданы одновременно:
 *    - пропорция вычисляется как `top / (top + bottom)` и не зависит от размера контейнера.
 * 2) задан только один из размеров:
 *    - второй вычисляется из фактического размера контейнера (px -> %),
 *      и пересчитывается при изменении размеров контейнера (ResizeObserver),
 *      пока пользователь не сделал ручной ресайз.
 * 3) размеры не заданы:
 *    - используется дефолтное состояние и расчет/поведение определяется `getSplitterStyles`.
 *
 * При `isShowBottomComponent=false` нижняя панель считается скрытой, верхняя занимает 100%.
 *
 * @param props - Параметры Splitter.
 * @param props.orientation - Ориентация разделителя (`horizontal` или `vertical`).
 * @param props.topComponentSize - Размер верхней/левой панели в пикселях.
 * @param props.bottomComponentSize - Размер нижней/правой панели в пикселях.
 * @param props.isShowBottomComponent - Флаг показа нижней/правой панели.
 *
 * @returns Объект для привязки к DOM и управления размерами.
 * @returns.containerRef - ref контейнера Splitter, нужен для измерений и ResizeObserver.
 * @returns.topPaneRef - ref верхней/левой панели.
 * @returns.bottomPaneRef - ref нижней/правой панели.
 * @returns.isVertical - `true`, если ориентация вертикальная (разделение по ширине), иначе `false`.
 * @returns.topHeight - Текущий размер верхней/левой панели в процентах (0..100).
 * @returns.setTopHeight - Setter для `topHeight` (используется при ресайзе).
 * @returns.setDidUserResize - Setter флага ручного ресайза пользователем (отключает авто-пересчет).
 * @returns.containerStyle - inline-стили контейнера, рассчитанные `getSplitterStyles`.
 * @returns.topSizeStyle - inline-стили верхней/левой панели.
 * @returns.bottomSizeStyle - inline-стили нижней/правой панели.
 * @returns.bothSizesSet - `true`, если заданы оба размера (top и bottom).
 * @returns.noSizesSet - `true`, если не задан ни один размер.
 * @returns.oneSizeSet - `true`, если задан ровно один размер (top или bottom).
 */

export const useSplitterResize = (props: ISplitterProps) => {
  const {
    orientation = ESplitterOrientation.horizontal,
    topComponentSize,
    bottomComponentSize,
    isShowBottomComponent = true
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const topPaneRef = useRef<HTMLDivElement>(null);
  const bottomPaneRef = useRef<HTMLDivElement>(null);

  const [topHeight, setTopHeight] = useState<number>(48);
  const [didUserResize, setDidUserResize] = useState(false);

  const isVertical = orientation === ESplitterOrientation.vertical;

  const hasTopSize = typeof topComponentSize === 'number';
  const hasBottomSize = typeof bottomComponentSize === 'number' && isShowBottomComponent;

  const bothSizesSet = hasTopSize && hasBottomSize;
  const noSizesSet = !hasTopSize && !hasBottomSize;
  const oneSizeSet = (hasTopSize && !hasBottomSize) || (!hasTopSize && hasBottomSize);

  const computeTopHeightFromPx = useCallback(() => {
    if (!isShowBottomComponent) return;

    const container = containerRef.current;
    if (!container) return;

    const axisPx = isVertical ? container.clientWidth : container.clientHeight;
    if (!axisPx) return;

    if (hasTopSize) {
      setTopHeight(clamp((topComponentSize! / axisPx) * 100));
      return;
    }

    if (hasBottomSize) {
      setTopHeight(clamp(100 - (bottomComponentSize! / axisPx) * 100));
    }
  }, [
    isVertical,
    hasTopSize,
    hasBottomSize,
    topComponentSize,
    bottomComponentSize,
    isShowBottomComponent
  ]);

  useEffect(() => {
    if (bothSizesSet) {
      setTopHeight((topComponentSize! / (topComponentSize! + bottomComponentSize!)) * 100);
      return;
    }

    if (!isShowBottomComponent) {
      setTopHeight(100);
      return;
    }

    if (oneSizeSet && !didUserResize) {
      computeTopHeightFromPx();
    }
  }, [
    topComponentSize,
    bottomComponentSize,
    isShowBottomComponent,
    bothSizesSet,
    oneSizeSet,
    didUserResize,
    computeTopHeightFromPx
  ]);

  useEffect(() => {
    if (!oneSizeSet || didUserResize || !isShowBottomComponent) return;

    const el = containerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;

    const ro = new ResizeObserver(() => computeTopHeightFromPx());
    ro.observe(el);
    return () => ro.disconnect();
  }, [oneSizeSet, didUserResize, computeTopHeightFromPx, isShowBottomComponent]);

  const { containerStyle, topSizeStyle, bottomSizeStyle } = getSplitterStyles({
    bothSizesSet,
    oneSizeSet,
    isVertical,
    noSizesSet,
    isShowBottomComponent,
    topHeight,
    topComponentSize,
    bottomComponentSize
  });

  return {
    containerRef,
    topPaneRef,
    bottomPaneRef,
    isVertical,
    topHeight,
    setTopHeight,
    setDidUserResize,
    containerStyle,
    topSizeStyle,
    bottomSizeStyle,
    bothSizesSet,
    noSizesSet,
    oneSizeSet
  };
};
