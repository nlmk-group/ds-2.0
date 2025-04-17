import React, { forwardRef, useContext } from 'react';

import { Checkbox, IconDoneCheckOutlined24, List, ListItem, Spinner, Typography } from '@components/.';
import clsx from 'clsx';

import styles from '../Select.module.scss';

import { SelectSharedProperties } from '..';
import { IMenu, ISelectOption, ISelectSharedProperties } from '../types';
import MenuItem from './MenuItem';

const Menu = forwardRef<HTMLDivElement, IMenu>(
  ({ availableOptionsCount, filteredOptions, multilineOption = false, isLoading = false }, ref) => {
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

    const renderContent = () => {
      if (isLoading) {
        return (
          <ListItem className={clsx(styles.item, styles['loading-item'])}>
            <div className={styles['loading-container']}>
              <Spinner />
            </div>
          </ListItem>
        );
      }

      if (!filteredOptions || filteredOptions.length === 0) {
        return (
          <ListItem className={styles.disabled}>
            <Typography variant="Body1-Medium">Ничего не найдено</Typography>
          </ListItem>
        );
      }

      return filteredOptions.map((option: ISelectOption) => (
        <MenuItem key={option.value} {...option} multilineOption={multilineOption} />
      ));
    };

    return (
      <List
        ref={ref}
        style={{
          maxHeight: `calc((var(--40-size) * ${scrollingItems}) + var(--16-space))`,
          minWidth: listMinWidth === undefined ? 'unset' : listMinWidth,
          position: withPortal ? 'static' : 'absolute'
        }}
      >
        {multiple && isAllSelectView && !isLoading && (
          <ListItem
            className={clsx(styles.item, {
              [styles.selected]: selectedValues?.length === availableOptionsCount,
              [styles.multiline]: multilineOption
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
            <div
              onClick={handleSelectAllClick}
              className={clsx(styles.label, { [styles.label__multiline]: multilineOption })}
            >
              <Typography variant="Body1-Medium">{allSelectText}</Typography>
            </div>
            <div className={styles['right-wrapper']}>
              {selectedValues?.length === availableOptionsCount && highlightSelected && (
                <IconDoneCheckOutlined24 color="primary" />
              )}
            </div>
          </ListItem>
        )}

        {renderContent()}
      </List>
    );
  }
);

Menu.displayName = 'Menu';

export default Menu;
