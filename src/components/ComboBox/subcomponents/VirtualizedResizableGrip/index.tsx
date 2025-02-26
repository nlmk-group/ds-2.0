import React, { useState } from 'react';

import { IVirtualizedResizableGripProps } from './types';

import { useDropdownHeight } from '../../context';
import { IComboBoxOption } from '../../types';

const VIRTUALIZATION_CONSTANTS = {
  // Высота одного элемента списка
  ITEM_HEIGHT: 40,

  // Высота блока поиска
  SEARCH_BLOCK_HEIGHT: 64,

  // Высота блока "Выбрать все"
  CHECK_ALL_BLOCK_HEIGHT: 38,

  // Дефолтная высота контейнера
  DEFAULT_CONTAINER_HEIGHT: 200,

  // Дополнительный буфер для плавного скролла (количество дополнительных элементов)
  BUFFER_ITEMS: 1
} as const;

const VirtualizedResizableGrip = <T extends IComboBoxOption>({
  isCheckAll,
  isSearch,
  items,
  renderItem,
  classNameContainer
}: IVirtualizedResizableGripProps<T>) => {
  const dropdownHeight = useDropdownHeight();
  const [scrollTop, setScrollTop] = useState(0);

  const calculateContainerHeight = (): number => {
    let height = dropdownHeight?.optimalHeight ?? VIRTUALIZATION_CONSTANTS.DEFAULT_CONTAINER_HEIGHT;

    if (isSearch) {
      height -= VIRTUALIZATION_CONSTANTS.SEARCH_BLOCK_HEIGHT;
    }
    if (isCheckAll) {
      height -= VIRTUALIZATION_CONSTANTS.CHECK_ALL_BLOCK_HEIGHT;
    }

    return height;
  };

  const virtualContainerHeight = calculateContainerHeight();

  const startIndex = Math.floor(scrollTop / VIRTUALIZATION_CONSTANTS.ITEM_HEIGHT);
  const endIndex = Math.min(
    startIndex +
      VIRTUALIZATION_CONSTANTS.BUFFER_ITEMS +
      Math.ceil(virtualContainerHeight / VIRTUALIZATION_CONSTANTS.ITEM_HEIGHT),
    items.length
  );

  const visibleItems = items.slice(startIndex, endIndex);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    setScrollTop((event.target as HTMLDivElement).scrollTop);
  };

  return (
    <div
      style={{
        height: `${virtualContainerHeight}px`,
        overflowY: 'auto'
      }}
      onScroll={handleScroll}
      className={classNameContainer}
    >
      <div
        style={{
          height: `${items.length * VIRTUALIZATION_CONSTANTS.ITEM_HEIGHT}px`
        }}
      >
        <div
          style={{
            position: 'relative',
            height: `${visibleItems.length * VIRTUALIZATION_CONSTANTS.ITEM_HEIGHT}px`,
            top: `${startIndex * VIRTUALIZATION_CONSTANTS.ITEM_HEIGHT}px`
          }}
        >
          {visibleItems.map(renderItem)}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedResizableGrip;
