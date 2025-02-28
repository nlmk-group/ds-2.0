import React, { FC } from 'react';

import { Box, Icon, Spinner, Typography } from '@components/index';
import MenuItem from '@components/Select/subcomponents/MenuItem';

import { IAutocompleteDropdownProps } from './types';

import styles from './AutocompleteDropdown.module.scss';

import AutocompleteItem from '../AutocompleteItem';

const AutocompleteDropdown: FC<IAutocompleteDropdownProps> = ({
  isLoading,
  currentItems,
  inputValue,
  highlightedIndex,
  onSelectMenuItem,
  showCreateItem,
  createItemText,
  onCreateItem,
  noResultsText
}) => {
  const hasItems = currentItems && currentItems.length > 0;

  return (
    <div className={styles['card']} data-ui-autocomplete-dropdown>
      {!isLoading && (
        <Box flexDirection="column" gap={0} data-ui-autocomplete-content>
          {showCreateItem && (
            <AutocompleteItem
              key="__create_item__"
              className={styles['menu-item']}
              onClick={() => {
                onCreateItem(inputValue);
              }}
              value={inputValue}
              highlighted={highlightedIndex === 0}
              data-ui-autocomplete-create-item
            >
              {createItemText(inputValue)}
            </AutocompleteItem>
          )}

          {hasItems ? (
            currentItems.map((item, index) => (
              <AutocompleteItem
                key={item.id}
                className={styles['menu-item']}
                onClick={() => onSelectMenuItem(item)}
                value={item.name || ''}
                highlighted={index === highlightedIndex}
                data-ui-autocomplete-item
              >
                {item.label}
              </AutocompleteItem>
            ))
          ) : (
            <Box flexDirection="column" data-ui-autocomplete-empty>
              <Box gap={8} flexDirection="row" className={styles['not-found-item']} data-ui-autocomplete-no-results>
                <Icon color="error" name="IconCancelOutlined16" containerSize={16} />
                <Typography variant="Caption-Medium" color="var(--steel-90)">
                  {noResultsText}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      )}

      {isLoading && (
        <MenuItem
          label={
            <Box data-testid="AUTOCOMPLETE_LOADING" justifyContent="center" data-ui-autocomplete-loading>
              <Spinner />
            </Box>
          }
          value=""
          disabled
        />
      )}
    </div>
  );
};

export default AutocompleteDropdown;
