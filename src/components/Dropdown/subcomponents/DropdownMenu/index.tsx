import React, { FC, useContext } from 'react';

import { DropdownContext } from '@components/Dropdown/context';
import { ClickAwayListener, List } from '@components/index';
import clsx from 'clsx';

import { IDropdownMenuProps } from './types';

import styles from './DropdownMenu.module.scss';

/**
 * Компонент DropdownMenu отображает меню с элементами, которое закрывается при клике вне его границ.
 *
 * @component
 * @param {object} props - Пропсы компонента.
 * @param {ReactNode} props.children - Элементы, которые будут отображаться в меню.
 * @returns {ReactNode|null} Возвращает JSX элемент или null, если меню закрыто.
 */
const DropdownMenu: FC<IDropdownMenuProps> = ({ children, withPortal = false }) => {
  const { isOpen, setIsOpen, buttonRef, menuStyle } = useContext(DropdownContext);
  const rect = buttonRef?.current?.getBoundingClientRect();
  const listStyle = withPortal
    ? { ...menuStyle, minWidth: rect?.width, top: rect?.bottom || 0, left: rect?.left || 0 }
    : menuStyle;

  /**
   * Примерное значение ширины кнопки, при которой нужно задавать минимальную ширину в абсолютных значениях
   */
  const isSmallContent = (rect?.width || 48) < 130;

  /**
   * Обработчик клика вне меню, закрывающий его.
   */
  const handleClickAway = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const menu = (
    <ClickAwayListener onClickAway={handleClickAway} excludeRef={buttonRef || undefined}>
      <List className={clsx(styles.menu, { [styles['small-content']]: isSmallContent })} style={listStyle}>
        {children}
      </List>
    </ClickAwayListener>
  );

  return isOpen ? menu : null;
};

export default DropdownMenu;
