import React, { Children, cloneElement, createContext, isValidElement, ReactNode, useEffect, useState } from 'react';

import { Box } from '@components/index';
import clsx from 'clsx';

import type { ISegmentButtonGroup, ISegmentButtonProperties, ISegmentButtonProps } from './types';

import styles from './SegmentButton.module.scss';

import { buttonColor } from './enums';
import SegmentButton from './SegmentButton';

export const SegmentButtonProperties = createContext<ISegmentButtonProperties>({
  compact: false,
  color: buttonColor.default,
  disabled: false
});

export const SegmentButtonGroup = ({
  className = '',
  compact = false,
  color = buttonColor.default,
  disabled = false,
  children
}: ISegmentButtonGroup) => {
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
            disabled: child.props.disabled || disabled,
            children: child.props.children,
            toggleButton: () => handleToggle(index)
          };

          return cloneElement(child, childrenProps);
        }

        return child;
      })
    );
  }, [activeId]);

  const defaultProperties = {
    compact,
    color,
    disabled
  };

  return (
    <SegmentButtonProperties.Provider value={defaultProperties}>
      <Box
        gap={0}
        borderRadius={4}
        width="fitContent"
        className={clsx(styles.segmentButtonGroup, className)}
        data-testid="SEGMENT_BUTTON_WRAPPER"
      >
        {childrenWithProps}
      </Box>
    </SegmentButtonProperties.Provider>
  );
};

SegmentButtonGroup.Button = SegmentButton;

export default SegmentButtonGroup;
