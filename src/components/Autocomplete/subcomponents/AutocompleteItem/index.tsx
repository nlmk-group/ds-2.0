import React, { FC, MouseEvent } from 'react';

import { Box, ListItem, Tooltip } from '@components/index';
import clsx from 'clsx';

import { IAutocompleteItemProps } from './types';

import styles from './AutocompleteItem.module.scss';

/**
 * Компонент AutocompleteItem представляет собой элемент списка меню, который может содержать иконку и текст.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {ReactNode} props.children - Содержимое элемента меню.
 * @param {function} [props.onClick] - Обработчик клика, вызываемый при выборе элемента.
 * @param {string} props.value - Значение, связанное с элементом меню.
 * @param {boolean} [props.disabled=false] - Отключает возможность выбора элемента меню.
 * @param {string} [props.hint=''] - Текст тултипа для элемента.
 * @param {string} [props.className] - Дополнительный CSS-класс.
 * @param {boolean} [props.highlighted=false] - Внутренний проп для подсветки текущего элемента при фокусе или наведении с клавиатуры.
 * @returns {JSX.Element} Возвращает JSX элемент.
 */

const AutocompleteItem: FC<IAutocompleteItemProps> = ({
  children,
  onClick,
  value,
  className,
  disabled = false,
  hint = '',
  highlighted = false
}) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (!disabled && onClick) {
      onClick(value);
    }
  };

  return (
    <ListItem
      className={clsx(styles.item, className, { [styles.disabled]: disabled }, { [styles.highlighted]: highlighted })}
      onClick={handleClick}
      role="option"
      aria-disabled={disabled || undefined}
    >
      <Box>
        <Tooltip title={hint} delayShow={500}>
          <div className={styles['item-position']}>{children}</div>
        </Tooltip>
      </Box>
    </ListItem>
  );
};

export default AutocompleteItem;
