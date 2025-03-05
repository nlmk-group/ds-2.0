import React, { Children, cloneElement, FC, isValidElement, ReactNode, useEffect, useState } from 'react';

import { Box } from '@components/index';
import clsx from 'clsx';

import type { ISegmentButtonGroupProps, ISegmentButtonProps } from './types';

import styles from './SegmentButtonGroup.module.scss';

import { SegmentButtonGroupContext } from './context';
import { ESegmentButtonGroupSizes } from './enums';

export const SegmentButtonGroup: FC<ISegmentButtonGroupProps> = ({
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

  useEffect(() => {
    setChildrenWithProps(
      Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          if (child.props.active) {
            setActiveId(index);
          }

          const childrenProps: ISegmentButtonProps = {
            active: activeId === index,
            children: child.props.children,
            toggleButton: () => handleToggle(index)
          };

          return cloneElement(child, childrenProps);
        }

        return child;
      })
    );
  }, [activeId]);

  return (
    <SegmentButtonGroupContext.Provider value={{ disabled, size }}>
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
