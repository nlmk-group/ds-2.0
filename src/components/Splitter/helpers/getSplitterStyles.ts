export const getSplitterStyles = (
  bothSizesSet: boolean,
  isVertical: boolean,
  noSizesSet: boolean,
  hasTopSize: boolean,
  hasBottomSize: boolean,
  isShowBottomComponent: boolean,
  topHeight: number,
  topComponentSize?: number,
  bottomComponentSize?: number
) => {
  const containerStyle: React.CSSProperties = {};
  if (bothSizesSet) {
    if (isVertical) {
      containerStyle.width = `${topComponentSize! + bottomComponentSize!}px`;
    } else {
      containerStyle.height = `${topComponentSize! + bottomComponentSize!}px`;
    }
  }

  let topSizeStyle: React.CSSProperties = {};
  let bottomSizeStyle: React.CSSProperties = {};

  if (bothSizesSet) {
    if (isVertical) {
      topSizeStyle = { width: `${topHeight}%` };
      bottomSizeStyle = { width: `${100 - topHeight}%` };
    } else {
      topSizeStyle = { height: `${topHeight}%` };
      bottomSizeStyle = { height: `${100 - topHeight}%` };
    }
  } else if (noSizesSet) {
    if (isVertical) {
      topSizeStyle = { width: `${topHeight}%` };
      bottomSizeStyle = { width: `${100 - topHeight}%` };
    } else {
      topSizeStyle = { height: `${topHeight}%` };
      bottomSizeStyle = { height: `${100 - topHeight}%` };
    }
  } else {
    if (hasTopSize) {
      if (isVertical) {
        topSizeStyle = { width: `${topComponentSize}px` };
      } else {
        topSizeStyle = { height: `${topComponentSize}px` };
      }
    } else {
      if (isVertical) {
        topSizeStyle = { width: 'auto' };
      } else {
        topSizeStyle = { height: 'auto' };
      }
    }

    if (hasBottomSize && isShowBottomComponent) {
      if (isVertical) {
        bottomSizeStyle = { width: `${bottomComponentSize}px` };
      } else {
        bottomSizeStyle = { height: `${bottomComponentSize}px` };
      }
    } else {
      if (isVertical) {
        bottomSizeStyle = { width: 'auto' };
      } else {
        bottomSizeStyle = { height: 'auto' };
      }
    }
  }

  if (!isShowBottomComponent) {
    bottomSizeStyle = { ...bottomSizeStyle, display: 'none' };
  }

  return {
    containerStyle,
    topSizeStyle,
    bottomSizeStyle
  };
};
