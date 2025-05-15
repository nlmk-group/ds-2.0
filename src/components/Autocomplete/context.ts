import { createContext, ReactNode, RefObject } from 'react';

import { IAutocompleteValue } from './types';

interface AutocompleteContextProps {
  isOpen: boolean;
  disabled: boolean;
  helperText?: ReactNode;
  withPortal?: boolean;
  wrapperRef: RefObject<HTMLDivElement>;
  targetRef: RefObject<HTMLDivElement>;
  inputRef: RefObject<HTMLDivElement>;
  isLoading: boolean;
  showCreateItem?: boolean;
  onCreateItem?: (value: string) => void;
  currentItems: IAutocompleteValue[] | null;
  inputValue: string;
  highlightedIndex: number;
  selectedItems: IAutocompleteValue[] | null;
  createItemText: (value: string) => string;
  onSelectMenuItem: (item: IAutocompleteValue) => void;
  noResultsText: string;
  showTooltip: boolean;
  renderLabel?: (item: IAutocompleteValue) => ReactNode;
  portalContainerId: string;
  totalText: string;
  showTotalCount: boolean;
  showEmptyDropdown: boolean;
  handleClickAway: () => void;
}

export const AutocompleteContext = createContext<AutocompleteContextProps>({
  isOpen: false,
  disabled: false,
  withPortal: false,
  wrapperRef: { current: null },
  targetRef: { current: null },
  inputRef: { current: null },
  isLoading: false,
  showCreateItem: false,
  onCreateItem: () => {},
  currentItems: [],
  inputValue: '',
  highlightedIndex: -1,
  selectedItems: [],
  createItemText: (value: string) => `Добавить: ${value}`,
  onSelectMenuItem: () => {},
  noResultsText: '',
  showTooltip: false,
  renderLabel: undefined,
  portalContainerId: 'root',
  totalText: 'Всего:',
  showTotalCount: true,
  showEmptyDropdown: true,
  handleClickAway: () => {}
});
