import React, { FC, useEffect, useState } from 'react';
import { Day } from '@components/DatePicker/subcomponents';
import { InfiniteContainerProps, TValue } from './types'

export const InfiniteContainer: FC<InfiniteContainerProps> = ({values, selectedTime, handleMinuteClick, container, getSelected, ...otherProps}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [topPositions, setTopPositions] = useState<Array<TValue & {id: string}>>([])

  useEffect(() => {
    const eventHandler = (e?: Event ) => e && setScrollTop((e?.target as HTMLDivElement)?.scrollTop)
    container?.addEventListener('scroll', eventHandler, true);
  
    return () => {
      container?.removeEventListener('scroll', eventHandler, true);
    };
  }, [container]);

  useEffect(()=>{
    const createBlock = (prefix: string) => (values ?? []).map((value, index) => ({
      ...value,
      id: `${prefix}_${index}`
    }));
  

    const firstBlock = createBlock('first');
    const matureBlock = createBlock('mature');
    const lastBlock = createBlock('last');
    

    setTopPositions([...firstBlock, ...matureBlock, ...lastBlock])
  }, [values])

  useEffect(()=>{
    const timer = setTimeout(()=>{
      if (!container) {
        return;
      }
      const { scrollHeight = 0, scrollTop = 0 } = container;
      const step = scrollHeight / 3;
  
      if (scrollTop > 2*step) {
        container.scrollTo({ top: scrollTop - step + 20, behavior: 'instant' as ScrollBehavior})
        return
      }    
        
      if (container.scrollTop < step) {
        container.scrollTo({ top: scrollTop + step - 20, behavior: 'instant' as ScrollBehavior})
      }      
    }, 100)

    return () => {
      clearTimeout(timer);
    }

  }, [scrollTop, container])

  

  return (
    <>
      {topPositions.map((value) => {
        const selected = Boolean(getSelected?.(value.value, selectedTime))
        
        return (
          <Day
            {...otherProps}
            id={value.id}
            key={value.value}
            selected={selected}
            onClick={() => handleMinuteClick(value.value)}
            infiniteTimeScroll
          >
            {value.label}
          </Day>
        )})}
    </>
  )
}