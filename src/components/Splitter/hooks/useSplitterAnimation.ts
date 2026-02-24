import { RefObject, useEffect, useRef } from 'react';

export const useSplitterAnimation = (
  isShowBottomComponent: boolean,
  containerRef: RefObject<HTMLDivElement | null>,
  topPaneRef: RefObject<HTMLDivElement | null>,
  bottomPaneRef: RefObject<HTMLDivElement | null>
) => {
  const prevShowBottomRef = useRef(isShowBottomComponent);

  useEffect(() => {
    const bottomChanged = prevShowBottomRef.current !== isShowBottomComponent;

    if (
      bottomChanged &&
      containerRef.current &&
      topPaneRef.current &&
      bottomPaneRef.current
    ) {
      const container = containerRef.current;
      const topPane = topPaneRef.current;
      const bottomPane = bottomPaneRef.current;

      const transitionValue = 'height 0.3s ease, opacity 0.3s ease';
      container.style.transition = 'height 0.3s ease';
      topPane.style.transition = transitionValue;
      bottomPane.style.transition = transitionValue;

      const removeTransitions = () => {
        if (!container || !topPane || !bottomPane) return;
        container.style.transition = '';
        topPane.style.transition = '';
        bottomPane.style.transition = '';
      };

      const timeout = setTimeout(removeTransitions, 410);

      return () => clearTimeout(timeout);
    }
    prevShowBottomRef.current = isShowBottomComponent;
  }, [isShowBottomComponent]);
};
