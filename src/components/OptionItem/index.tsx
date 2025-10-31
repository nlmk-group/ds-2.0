import React, { FC, MouseEvent, useEffect, useRef } from 'react';

import { ListItem } from '@components/index';
import clsx from 'clsx';

import { IOptionItemProps, sizesMappingOptionItem } from './types';

import styles from './OptionItem.module.scss';

const OptionItem: FC<IOptionItemProps> = ({
  value,
  label,
  children,
  disabled = false,
  className,
  style,
  isFocused,
  isSelected = false,
  onSelect,
  size = sizesMappingOptionItem.m
}) => {
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
    }
  };

  const heightMap: Record<typeof sizesMappingOptionItem[keyof typeof sizesMappingOptionItem], number> = {
    [sizesMappingOptionItem.m]: 40,
    [sizesMappingOptionItem.s]: 32,
    [sizesMappingOptionItem.xs]: 28
  };

  const itemStyles = {
    cursor: disabled ? 'default' : 'pointer',
    height: `${heightMap[size]}px`,
    minHeight: `${heightMap[size]}px`,
    ...style
  };

  const isItemSelected = isSelected;

  const enhancedChildren = React.isValidElement(children) && typeof children.type !== 'string'
    ? React.cloneElement(children as React.ReactElement<any>, { isSelected: isItemSelected })
    : children;

  return (
    <ListItem
      ref={itemRef}
      title={label}
      className={clsx(
        styles.item,
        {
          [styles.selected]: isItemSelected && value,
          [styles.focused]: isFocused,
          [styles.disabled]: disabled,
          [styles['item-size-s']]: size === sizesMappingOptionItem.s,
          [styles['item-size-xs']]: size === sizesMappingOptionItem.xs
        },
        className
      )}
      onClick={handleClick}
      style={itemStyles}
      data-size={size}
      data-ui-option-item
    >
      {enhancedChildren}
    </ListItem>
  );
};

export default OptionItem;
