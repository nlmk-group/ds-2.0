import { createContext, RefObject } from 'react';

import { IAutocompleteValue } from './types';

interface AutocompleteContextProps {
  isOpen?: boolean;
  disabled?: boolean;
  wrapperRef?: RefObject<HTMLDivElement> | null;
  isLoading?: boolean;
  showCreateItem?: boolean;
  onCreateItem?: (value: string) => void;
  currentItems?: IAutocompleteValue[] | null;
  inputValue?: string;
  highlightedIndex?: number;
  selectedItems?: IAutocompleteValue[] | null;
  createItemText?: (value: string) => string;
  onSelectMenuItem?: (item: IAutocompleteValue) => void;
  noResultsText?: string;
}
export const AutocompleteContext = createContext<AutocompleteContextProps>({
  isOpen: false,
  disabled: false,
  wrapperRef: null,
  isLoading: false,
  showCreateItem: false,
  onCreateItem: () => {},
  currentItems: [],
  inputValue: '',
  highlightedIndex: -1,
  selectedItems: [],
  createItemText: (value: string) => `Добавить: ${value}`,
  onSelectMenuItem: () => {},
  noResultsText: ''
});
