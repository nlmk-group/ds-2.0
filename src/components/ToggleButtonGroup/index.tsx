import React, { Children, cloneElement, createContext, isValidElement, ReactNode, useEffect, useState } from 'react';

import { clsx } from 'clsx';

import { IButtonGroupPropertiesProps, IToggleButtonGroupItemWithProps, IToggleButtonGroupProps } from './types';

import styles from './ToggleButtonGroup.module.scss';

import { EToggleButtonGroupSizeMapping } from './enums';
import ToggleButton from './ToggleButton';

/**
 * Компонент ToggleButtonGroup представляет собой группу переключаемых кнопок.
 * @component
 * @param {Object} props - Свойства компонента ToggleButtonGroup
 * @param {string} [props.className=''] - Дополнительный CSS класс для группы кнопок
 * @param {('s'|'m')} [props.size='m'] - Размер кнопок в группе.
 * @param {boolean} [props.disabled=false] - Флаг, определяющий, отключена ли вся группа кнопок
 * @param {ReactNode} props.children - Дочерние элементы, которые должны быть компонентами ToggleButton
 * @param {CSSProperties} [props.style] - Inline стили для кастомизации компонента.
 * @returns {JSX.Element} Группа переключаемых кнопок
 */

export const ButtonGroupProperties = createContext<IButtonGroupPropertiesProps>({
  size: EToggleButtonGroupSizeMapping.m,
  disabled: false
});

const ToggleButtonGroup = ({
  className = '',
  size = EToggleButtonGroupSizeMapping.m,
  disabled = false,
  children,
  style
}: IToggleButtonGroupProps) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [childrenWithProps, setChildrenWithProps] = useState<ReactNode | ReactNode[]>(null);

  const handleToggle = (index: number) => {
    setActiveId(activeId === index ? null : index);
  };

  useEffect(() => {
    setChildrenWithProps(
      Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          const childProps = child.props as any;
          if (childProps.active) {
            setActiveId(index);
          }
          return cloneElement(child, {
            active: activeId === index,
            isLast: index === Children.toArray(children).length - 1,
            onToggle: () => handleToggle(index)
          } as IToggleButtonGroupItemWithProps);
        }
        return child;
      })
    );
  }, [activeId]);

  const defaultProperties = {
    size,
    disabled
  };

  return (
    <ButtonGroupProperties.Provider value={defaultProperties}>
      <div
        style={style}
        className={clsx(styles['toggle-button-group'], className)}
        data-ui-toggle-button-group
        data-testid="TOGGLE_BUTTON_WRAPPER"
      >
        {childrenWithProps}
      </div>
    </ButtonGroupProperties.Provider>
  );
};

ToggleButtonGroup.Button = ToggleButton;

export default ToggleButtonGroup;
