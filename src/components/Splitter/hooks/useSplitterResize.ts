import { useEffect, useRef, useState } from 'react';

import { ISplitterProps } from 'components/Splitter/types';
import { ESplitterOrientation } from 'components/Splitter/enums';
import { useSplitterAnimation } from '@components/Splitter/hooks/useSplitterAnimation';
import { getSplitterStyles } from '../helpers';

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

  const isVertical = orientation === ESplitterOrientation.vertical;

  const hasTopSize = typeof topComponentSize === 'number';
  const hasBottomSize = typeof bottomComponentSize === 'number' && isShowBottomComponent;
  const bothSizesSet = hasTopSize && hasBottomSize;
  const noSizesSet = !hasTopSize && !hasBottomSize;

  useEffect(() => {
    if (bothSizesSet) {
      setTopHeight((topComponentSize! / (topComponentSize! + bottomComponentSize!)) * 100);
    } else if (!isShowBottomComponent) {
      setTopHeight(100);
    }
  }, [topComponentSize, bottomComponentSize, isShowBottomComponent, bothSizesSet]);

  const {
    containerStyle,
    topSizeStyle,
    bottomSizeStyle
  } = getSplitterStyles(
    bothSizesSet,
    isVertical,
    noSizesSet,
    hasTopSize,
    hasBottomSize,
    isShowBottomComponent,
    topHeight,
    topComponentSize,
    bottomComponentSize
  );

  useSplitterAnimation(
    isShowBottomComponent,
    containerRef,
    topPaneRef,
    bottomPaneRef
  );

  return {
    containerRef,
    topPaneRef,
    bottomPaneRef,
    isVertical,
    topHeight,
    setTopHeight,
    containerStyle,
    topSizeStyle,
    bottomSizeStyle,
    bothSizesSet,
    noSizesSet
  };
};
