import React, { FC, MouseEvent, useContext, useEffect, useRef } from 'react';

import { ListItem } from '@components/index';
import clsx from 'clsx';

import { IOptionItemProps } from './types';

import styles from './OptionItem.module.scss';

import { SelectContext } from '../../context';

const OptionItem: FC<IOptionItemProps> = ({
  value,
  label,
  children,
  disabled = false,
  className,
  style,
  isFocused,
  isSelected,
  onSelect
}) => {
  const { setSelectedOption, setSelectedLabel, setIsOpen, selectedOption } = useContext(SelectContext);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFocused && itemRef.current) {
      itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [isFocused]);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (disabled) return;

    if (onSelect) {
      onSelect();
    } else {
      setSelectedOption(value);
      setSelectedLabel(label || (typeof children === 'string' ? children : ''));
      setIsOpen(false);
    }
  };

  const itemStyles = {
    cursor: disabled ? 'default' : 'pointer',
    height: 'auto',
    ...style
  };

  const isItemSelected = isSelected !== undefined ? isSelected : selectedOption === value;

  return (
    <ListItem
      ref={itemRef}
      title={label}
      className={clsx(
        styles.item,
        {
          [styles.selected]: isItemSelected && value,
          [styles.focused]: isFocused,
          [styles.disabled]: disabled
        },
        className
      )}
      onClick={handleClick}
      style={itemStyles}
    >
      {children}
    </ListItem>
  );
};

export default OptionItem;
