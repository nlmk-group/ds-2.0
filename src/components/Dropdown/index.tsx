import React, { FC, MouseEventHandler, ReactNode, useRef, useState } from 'react';

import { EButtonSizes } from '@components/Button/enums';
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
 * @param {string} props.buttonText - Текст, отображаемый в кнопке.
 * @param {string} [props.className] - Дополнительный класс для кнопки.
 * @param {ReactNode} props.startIcon - Иконка в начале кнопки Dropdown.
 * @param {EButtonSizes} [props.size=EButtonSizes.m] - Размер кнопки и меню.
 */

const Dropdown: FC<IDropdownProps> = ({
  children,
  disabled = false,
  buttonText,
  className,
  size = EButtonSizes.m,
  startIcon
}: {
  children: ReactNode;
  disabled?: boolean;
  buttonText: string;
  className?: string;
  size?: EButtonSizes;
  startIcon?: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
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
  const ChevronIcon = size === EButtonSizes.xs ? IconChevronArrowDownOutlined16 : IconChevronArrowDownOutlined24;
  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, disabled, buttonText, buttonRef, size }}>
      <Button
        ref={buttonRef}
        className={clsx(styles.button, className)}
        variant="secondary"
        onClick={toggleDropdown}
        disabled={disabled}
        size={size}
        startIcon={startIcon}
        endIcon={
          <div className={clsx(styles['icon-rotate'], { [styles['icon-rotate-open']]: isOpen })}>
            <ChevronIcon />
          </div>
        }
      >
        {buttonText}
      </Button>
      {isOpen && <DropdownMenu>{children}</DropdownMenu>}
    </DropdownContext.Provider>
  );
};

export default Dropdown;
