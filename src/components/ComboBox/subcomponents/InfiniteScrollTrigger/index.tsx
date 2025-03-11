import React, { useEffect, useRef } from 'react';

import { IInfiniteScrollTriggerProps } from './types';

const InfiniteScrollTrigger = ({ isVirtualize, isLoading, infinityLoadingOptions }: IInfiniteScrollTriggerProps) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const callNextData = () => {
    const nextData = infinityLoadingOptions?.nextData;
    const isStopLoading = infinityLoadingOptions?.isStopLoading;
    if (nextData && !isLoading && !isStopLoading) {
      nextData();
    }
  };

  useEffect(() => {
    if (isVirtualize) {
      callNextData();
    }
  }, []);

  const addIntersectionObserver = (ref: HTMLDivElement | null) => {
    if (isVirtualize) {
      return;
    }
    if (ref) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
      };
      observer.current = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
        if (entry?.isIntersecting) {
          callNextData();
        }
      }, options);
      observer.current.observe(ref);
    } else {
      observer.current?.disconnect();
      observer.current = null;
    }
  };
  return <div ref={addIntersectionObserver} />;
}

export default InfiniteScrollTrigger;