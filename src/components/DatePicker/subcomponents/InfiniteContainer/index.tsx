import React, { FC, useEffect, useState } from 'react';

import { Day } from '@components/DatePicker/subcomponents';

import { IInfiniteContainerProps, TValue } from './types';
import { generateUUID } from '@components/declaration';

export const InfiniteContainer: FC<IInfiniteContainerProps> = ({
  values,
  selectedTime,
  handleTimeClick,
  container,
  getSelected,
  ...otherProps
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [topPositions, setTopPositions] = useState<Array<TValue & { id: string }>>([]);

  useEffect(() => {
    const eventHandler = (e?: Event) => e && setScrollTop((e?.target as HTMLDivElement)?.scrollTop);
    container?.addEventListener('scroll', eventHandler, true);

    return () => {
      container?.removeEventListener('scroll', eventHandler, true);
    };
  }, [container]);

  useEffect(() => {
    const createBlock = () =>
      (values ?? []).map((value) => ({
        ...value,
        id: generateUUID()
      }));

    const firstBlock = createBlock();
    const matureBlock = createBlock();
    const lastBlock = createBlock();

    setTopPositions([...firstBlock, ...matureBlock, ...lastBlock]);
  }, [values]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!container) {
        return;
      }
      const { scrollHeight = 0, scrollTop = 0 } = container;
      const step = scrollHeight / 3;

      if (scrollTop > 2 * step) {
        container.scrollTo({ top: scrollTop - step + 20, behavior: 'instant' as ScrollBehavior });
        return;
      }

      if (container.scrollTop < step) {
        container.scrollTo({ top: scrollTop + step - 20, behavior: 'instant' as ScrollBehavior });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [scrollTop, container]);

  return (
    <>
      {topPositions.map(value => {
        const selected = Boolean(getSelected?.(value.value, selectedTime));

        return (
          <Day
            {...otherProps}
            id={value.id}
            key={value.value}
            selected={selected}
            onClick={() => handleTimeClick(value.value)}
            infiniteTimeScroll
          >
            {value.label}
          </Day>
        );
      })}
    </>
  );
};
