import React, { Children, cloneElement, createContext, isValidElement, ReactNode, useEffect, useState } from 'react';

import { clsx } from 'clsx';

import { IButtonGroupProperties, IToggleButtonGroup, IToggleButtonGroupItemWithProps } from './types';

import styles from './ToggleButtonGroup.module.scss';

import { sizeMapping, statusMapping } from './enums';
import ToggleButton from './ToggleButton';

export const ButtonGroupProperties = createContext<IButtonGroupProperties>({
  size: sizeMapping.default,
  status: statusMapping.default
});

const ToggleButtonGroup = ({
  className = '',
  size = sizeMapping.default,
  status = statusMapping.default,
  children
}: IToggleButtonGroup) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [childrenWithProps, setChildrenWithProps] = useState<ReactNode | ReactNode[]>(null);

  const handleToggle = (index: number) => {
    setActiveId(activeId === index ? null : index);
  };

  useEffect(() => {
    setChildrenWithProps(
      Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          if (child.props.active) {
            setActiveId(index)
          }
          return cloneElement(child, {
            active: activeId === index,
            isLast: index === Children.toArray(children).length - 1,
            toggleButton: () => handleToggle(index)
          } as IToggleButtonGroupItemWithProps);
        }
        return child;
      })
    );
  }, [activeId]);

  const defaultProperties = {
    size,
    status
  };

  return (
    <ButtonGroupProperties.Provider value={defaultProperties}>
      <div className={clsx(styles.wrapper, className)} data-testid="TOGGLE_BUTTON_WRAPPER">
        {childrenWithProps}
      </div>
    </ButtonGroupProperties.Provider>
  );
};

ToggleButtonGroup.Button = ToggleButton;

export default ToggleButtonGroup;
