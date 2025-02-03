import React, { CSSProperties, FC, MouseEventHandler, ReactNode, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { EButtonSize } from '@components/Button/enums';
import { Button, IconChevronArrowDownOutlined16, IconChevronArrowDownOutlined24 } from '@components/index';
import clsx from 'clsx';

import { IDropdownProps } from './types';

import styles from './Dropdown.module.scss';

import { DropdownContext } from './context';
import { DropdownMenu } from './subcomponents';

/**
 * Компонент Dropdown предоставляет интерактивное выпадающее меню с настраиваемыми кнопками и элементами меню.
 * @component
 * @param {object} props - Пропсы компонента.
 * @param {ReactNode} props.children - Элементы, которые будут отображаться в меню.
 * @param {boolean} [props.disabled=false] - Отключает кнопку и возможность открытия меню.
 * @param {ReactNode} props.buttonChildren - Содержимое кнопки.
 * @param {string} [props.className] - Дополнительный класс для кнопки.
 * @param {EButtonSize} [props.size=EButtonSize.m] - Размер кнопки и меню.
 * @param {CSSProperties} [props.menuStyle] - Размер кнопки и меню.
 */

const Dropdown: FC<IDropdownProps> = ({
  children,
  disabled = false,
  buttonChildren,
  className,
  size = EButtonSize.m,
  menuStyle,
  withPortal = false,
  portalContainerId = 'root'
}: {
  children: ReactNode;
  disabled?: boolean;
  buttonChildren?: ReactNode;
  className?: string;
  size?: `${EButtonSize}`;
  menuStyle?: CSSProperties;
  withPortal?: boolean;
  portalContainerId?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const portalContainer = useMemo(() => document.getElementById(portalContainerId) as HTMLElement, [portalContainerId]);
  /**
   * Переключает состояние открытия/закрытия выпадающего меню.
   * @param {React.MouseEvent<HTMLButtonElement>} e - Событие клика мыши.
   */
  const toggleDropdown: MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setIsOpen(prev => !prev);
    }
  };

  const ChevronIcon = size === EButtonSize.xs ? IconChevronArrowDownOutlined16 : IconChevronArrowDownOutlined24;
  const Chevron = (
    <div
      className={clsx(styles.icon, styles['icon-rotate'], { [styles['icon-rotate-open']]: isOpen })}
      data-ui-dropdown-chevron-icon
    >
      <ChevronIcon />
    </div>
  );

  const getDropdownMenu = () => {
    const menu = withPortal ? (
      ReactDOM.createPortal(
        <DropdownMenu withPortal data-ui-dropdown-menu>
          {children}
        </DropdownMenu>,
        portalContainer
      )
    ) : (
      <DropdownMenu data-ui-dropdown-menu>{children}</DropdownMenu>
    );

    return isOpen ? menu : null;
  };

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, disabled, buttonChildren, buttonRef, size, menuStyle }}>
      <div className={styles.wrapper}>
        <Button
          ref={buttonRef}
          className={clsx(styles.button, className)}
          variant="secondary"
          onClick={toggleDropdown}
          disabled={disabled}
          size={size}
          iconButton={!buttonChildren ? Chevron : undefined}
          endIcon={buttonChildren ? Chevron : undefined}
          data-ui-dropdown-button
        >
          {buttonChildren}
        </Button>
        {getDropdownMenu()}
      </div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;
