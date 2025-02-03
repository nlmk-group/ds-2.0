import React, { FC, MouseEvent, useContext } from 'react';

import { EButtonSize } from '@components/Button/enums';
import { DropdownContext } from '@components/Dropdown/context';
import { ListItem, Typography } from '@components/index';
import clsx from 'clsx';

import { IDropdownMenuItemProps } from './types';

import styles from './DropdownMenuItem.module.scss';

/**
 * Компонент DropdownMenuItem представляет собой элемент списка меню, который может содержать иконку и текст.
 *
 * @component
 * @param {object} props - Пропсы компонента.
 * @param {ReactNode} props.children - Содержимое элемента меню.
 * @param {function} [props.onClick] - Обработчик клика, вызываемый при выборе элемента.
 * @param {string} props.value - Значение, связанное с элементом меню.
 * @param {boolean} [props.disabled=false] - Отключает возможность выбора элемента меню.
 * @returns {ReactNode} Возвращает JSX элемент.
 */

const DropdownMenuItem: FC<IDropdownMenuItemProps> = ({ children, onClick, value, disabled = false }) => {
  const { setIsOpen, size } = useContext(DropdownContext);
  /**
   * Обработчик клика на элемент меню, закрывающий меню и вызывающий обработчик клика.
   *
   * @param {MouseEvent<HTMLDivElement>} event - Событие клика мыши.
   */
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (!disabled) {
      onClick && onClick(value);
      setIsOpen(false);
    }
  };

  return (
    <ListItem
      className={clsx(styles.item, { [styles.disabled]: disabled })}
      onClick={handleClick}
      data-ui-dropdown-menu-item
    >
      <Typography variant={size === EButtonSize.xs ? 'Body2-Medium' : 'Body1-Medium'}>
        <div>{children}</div>
      </Typography>
    </ListItem>
  );
};

export default DropdownMenuItem;
