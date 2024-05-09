import React, { forwardRef, useContext } from 'react';

import { Checkbox, IconDoneCheckOutlined24, List, ListItem, Typography } from '@components/.';
import clsx from 'clsx';

import styles from '../Select.module.scss';

import { SelectSharedProperties } from '..';
import { IMenu, ISelectOption, ISelectSharedProperties } from '../types';
import MenuItem from './MenuItem';

const Menu = forwardRef<HTMLDivElement, IMenu>(({ availableOptionsCount, filteredOptions }, ref) => {
  const {
    multiple,
    allSelectText,
    highlightSelected,
    isAllSelectView,
    scrollingItems,
    withoutCheckbox,
    selectedValues,
    listMinWidth,
    handleSelectAllClick,
    withPortal
  } = useContext<ISelectSharedProperties>(SelectSharedProperties);

  return (
    <List
      ref={ref}
      style={{
        maxHeight: `calc((var(--40-size) * ${scrollingItems}) + var(--16-space))`,
        minWidth: listMinWidth === undefined ? 'unset' : listMinWidth,
        position: withPortal ? 'static' : 'absolute'
      }}
    >
      {multiple && isAllSelectView && (
        <ListItem
          className={clsx(styles.item, {
            [styles.selected]: selectedValues?.length === availableOptionsCount
          })}
          title={allSelectText}
        >
          {!withoutCheckbox && (
            <div className={styles['left-wrapper']}>
              <Checkbox
                className={styles.checkbox}
                multiple
                checked={selectedValues?.length === availableOptionsCount}
                onChange={handleSelectAllClick}
              />
            </div>
          )}
          <div onClick={handleSelectAllClick} className={styles.label}>
            <Typography variant="Body1-Medium">{allSelectText}</Typography>
          </div>
          <div className={styles['right-wrapper']}>
            {selectedValues?.length === availableOptionsCount && highlightSelected && (
              <IconDoneCheckOutlined24 color="primary" />
            )}
          </div>
        </ListItem>
      )}
      {filteredOptions && filteredOptions.length > 0 ? (
        filteredOptions.map((option: ISelectOption) => <MenuItem key={option.value} {...option} />)
      ) : (
        <ListItem className={styles.disabled}>
          <Typography variant="Body1-Medium">Ничего не найдено</Typography>
        </ListItem>
      )}
    </List>
  );
});

export default Menu;
