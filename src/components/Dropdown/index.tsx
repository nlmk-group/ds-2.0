import React, { FC, MouseEventHandler, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { EButtonSize, EButtonVariant } from '@components/Button/enums';
import { Button, IconChevronArrowDownOutlined16, IconChevronArrowDownOutlined24 } from '@components/index';
import clsx from 'clsx';

import { IDropdownProps } from './types';

import styles from './Dropdown.module.scss';

import { DropdownContext } from './context';
import { DropdownMenu } from './subcomponents';

/**
 * Компонент Dropdown предоставляет интерактивное выпадающее меню с настраиваемыми кнопками и элементами меню.
 * @component
 * @param {IDropdownProps} props - Пропсы компонента.
 * @param {ReactNode} props.children - Элементы, которые будут отображаться в меню.
 * @param {boolean} [props.disabled=false] - Отключает кнопку и возможность открытия меню.
 * @param {ReactNode} [props.buttonChildren] - Содержимое кнопки.
 * @param {string} [props.className] - Дополнительный класс для кнопки.
 * @param {EButtonSize} [props.size=EButtonSize.m] - Размер кнопки и меню.
 * @param {EButtonVariant} [props.variant=EButtonVariant.secondary] - Вариант стиля кнопки.
 * @param {string} [props.color] - Цвет кнопки.
 * @param {ReactNode} [props.startIcon] - Иконка в начале кнопки.
 * @param {ReactNode} [props.iconButton] - Иконка для кнопки-иконки (переопределяет стандартный шеврон).
 * @param {string|number} [props.startBadge] - Бейдж в начале кнопки.
 * @param {string|number} [props.endBadge] - Бейдж в конце кнопки.
 * @param {CSSProperties} [props.menuStyle] - Кастомные стили меню.
 * @param {CSSProperties} [props.buttonStyle] - Кастомные стили кнопки.
 * @param {boolean} [props.withPortal=false] - Открытие выпадающего списка в портале.
 * @param {string} [props.portalContainerId='root'] - Контейнер для портала.
 * @returns {ReactElement | null} Компонент Dropdown.
 */

const Dropdown: FC<IDropdownProps> = ({
  children,
  disabled = false,
  buttonChildren,
  className,
  menuStyle,
  withPortal = false,
  portalContainerId = 'root',
  variant = EButtonVariant.secondary,
  size = EButtonSize.m,
  color,
  startIcon,
  startBadge,
  endBadge,
  iconButton,
  buttonStyle,
  ...buttonProps
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const portalContainer = document.getElementById(portalContainerId) as HTMLElement;

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
        <DropdownMenu data-ui-dropdown-menu-portal>
          {children}
        </DropdownMenu>,
        portalContainer
      )
    ) : (
      <DropdownMenu data-ui-dropdown-menu>{children}</DropdownMenu>
    );

    return isOpen ? menu : null;
  };

  const resolvedIconButton = iconButton || (!buttonChildren ? Chevron : undefined);
  const resolvedEndIcon = buttonChildren && !iconButton ? Chevron : undefined;

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, disabled, buttonChildren, buttonRef, size, menuStyle }}>
      <div className={styles.wrapper}>
        <Button
          type="button"
          ref={buttonRef}
          className={clsx(styles.button, { [styles['button--open']]: isOpen }, className)}
          variant={variant}
          color={color}
          onClick={toggleDropdown}
          disabled={disabled}
          size={size}
          startIcon={startIcon}
          startBadge={startBadge}
          endBadge={endBadge}
          iconButton={resolvedIconButton}
          endIcon={resolvedEndIcon}
          data-ui-dropdown-button
          {...buttonProps}
          style={buttonStyle}
        >
          <div data-ui-dropdown-button-children>{buttonChildren}</div>
        </Button>
        {getDropdownMenu()}
      </div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;
