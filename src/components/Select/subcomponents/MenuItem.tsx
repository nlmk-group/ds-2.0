import React, { FC, useContext } from 'react';

import { Checkbox, IconDoneCheckOutlined24, ListItem, Typography } from '@components/.';
import clsx from 'clsx';

import styles from '../Select.module.scss';

import { SelectSharedProperties } from '..';
import { getLabel } from '../helpers';
import { IMenuItem, ISelectSharedProperties } from '../types';

const MenuItem: FC<IMenuItem> = ({ label, value, disabled, iconLeft, iconRight, subLabel, multilineOption = false }) => {
  const { multiple, highlightSelected, withoutCheckbox, selectedValues, handleSelect, handleTypographyClick } =
    useContext<ISelectSharedProperties>(SelectSharedProperties);

  const notDisabledNotMultiple = !multiple && !disabled;
  const hasLeftElement = iconLeft || (multiple && !withoutCheckbox);
  const hasRightElement = iconRight;
  const isFullWidthLabel = !hasLeftElement && !hasRightElement;

  const selectedCondition = (): boolean => {
    if (multiple) {
      return selectedValues?.includes(value)
    }
    return selectedValues === value
  }

  return (
    <ListItem
      className={clsx(styles.item, {
        [styles['item-with-sub-label']]: subLabel,
        [styles.selected]: selectedCondition(),
        [styles.disabled]: disabled,
        [styles.multiline]: multilineOption
      })}
      key={value}
      onClick={() => {
        notDisabledNotMultiple && handleSelect(value, selectedValues?.includes(value));
      }}
      style={{ cursor: notDisabledNotMultiple ? 'pointer' : 'default' }}
      title={getLabel(label)}
    >
      {hasLeftElement && (
        <div className={styles['left-wrapper']}>
          {iconLeft && (
            <div
              className={clsx(
                styles['icon-wrapper'],
                selectedCondition() && styles['icon-selected']
              )}
              data-testid="left-icon"
            >
              {iconLeft}
            </div>
          )}
          {multiple && !withoutCheckbox && (
            <Checkbox
              className={styles.checkbox}
              checked={selectedValues?.includes(value)}
              disabled={disabled}
              onChange={() => handleSelect(value, selectedValues.includes(value))}
            />
          )}
        </div>
      )}
      <div className={isFullWidthLabel ?  styles['text-container-item-full-width'] : styles['text-container-item']}>
        <div className={clsx(styles.content, { [styles.content__multiline]: multilineOption })}>
          <Typography
            variant="Body1-Medium"
            onClick={event => handleTypographyClick(value, event)}
            className={clsx(styles.label, {
              [styles['label__disabled']]: disabled,
              [styles.label__multiline]: multilineOption
            })}
          >
            {label}
          </Typography>
        </div>
        {subLabel && (
          <div className={styles['sub-label-wrapper']} data-testid="sub-label">
            <Typography
              variant="Body2-Medium"
              className={styles['sub-label']}
              onClick={event => handleTypographyClick(value, event)}
            >
              {subLabel}
            </Typography>
          </div>
        )}
      </div>
      <div className={styles['right-wrapper']}>
        {hasRightElement && (
          <div
            className={clsx(
              styles['icon-wrapper'],
              selectedCondition() && styles['icon-selected']
            )}
            data-testid="right-icon"
          >
            {iconRight}
          </div>
        )}
        {selectedValues?.includes(value) && highlightSelected && (
          <div data-testid="highlight-icon">
            <IconDoneCheckOutlined24 color="primary" />
          </div>
        )}
      </div>
    </ListItem>
  );
};

export default MenuItem;
