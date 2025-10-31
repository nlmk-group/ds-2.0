import React, { Children, cloneElement, FC, isValidElement, ReactNode, useEffect, useMemo, useState } from 'react';

import { Box } from '@components/index';
import clsx from 'clsx';

import type { ISegmentButtonGroupProps, ISegmentButtonProps } from './types';

import styles from './SegmentButtonGroup.module.scss';

import { SegmentButtonGroupContext } from './context';
import { ESegmentButtonGroupSizes } from './enums';

/**
 * Компонент `SegmentButtonGroup` представляет собой группу сегментированных кнопок.
 * Позволяет пользователям управлять активной кнопкой и переключать её состояние.
 *
 * @component
 * @example
 * <SegmentButtonGroup>
 *   <SegmentButton onClick={() => console.log('Clicked')}>Кнопка 1</SegmentButton>
 *   <SegmentButton onClick={() => console.log('Clicked')}>Кнопка 2</SegmentButton>
 * </SegmentButtonGroup>
 *
 * @param {ISegmentButtonGroupProps} props - Свойства компонента `SegmentButtonGroup`.
 * @param {string} [props.className] - Дополнительный CSS класс для стилизации группы кнопок.
 * @param {boolean} [props.disabled=false] - Флаг, отключающий всю группу кнопок.
 * @param {ESegmentButtonGroupSizes} [props.size="m"] - Размер группы кнопок (`s`, `m`, `l`).
 * @param {ReactNode} props.children - Дочерние элементы, представляющие кнопки внутри группы.
 *
 * @returns {JSX.Element} Компонент `SegmentButtonGroup`, оборачивающий `SegmentButton`.
 */
const SegmentButtonGroup: FC<ISegmentButtonGroupProps> = ({
  className,
  disabled,
  children,
  size = ESegmentButtonGroupSizes.m
}) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [childrenWithProps, setChildrenWithProps] = useState<ReactNode | ReactNode[]>(null);

  const handleToggle = (index: number) => {
    if (activeId === index) {
      setActiveId(null);
      return;
    }

    setActiveId(index);
  };

  const activeIndexFromProps = useMemo(() => {
    let result: number | null = null;
    Children.forEach(children, (child, index) => {
      if (isValidElement(child) && child.props.active && result === null) {
        result = index;
      }
    });
    return result;
  }, [children]);

  useEffect(() => {
    setActiveId(activeIndexFromProps);
  }, [activeIndexFromProps]);

  useEffect(() => {
    setChildrenWithProps(
      Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          const childrenProps: ISegmentButtonProps = {
            children: child.props.children,
            buttonIndex: index,
            toggleButton: () => handleToggle(index)
          };

          return cloneElement(child, childrenProps);
        }

        return child;
      })
    );
  }, [activeId, children]);

  return (
    <SegmentButtonGroupContext.Provider value={{ disabled, size, activeId }}>
      <Box
        gap={0}
        borderRadius={4}
        width="fitContent"
        className={clsx(styles.segmentButtonGroup, className)}
        data-ui-segment-button-group
        data-testid="SEGMENT_BUTTON_WRAPPER"
      >
        {childrenWithProps}
      </Box>
    </SegmentButtonGroupContext.Provider>
  );
};

export default SegmentButtonGroup;
