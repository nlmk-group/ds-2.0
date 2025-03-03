import { createContext, ReactNode, RefObject } from 'react';

import { EAutocompleteSize, IAutocompleteValue } from './types';

interface AutocompleteContextProps {
  isOpen: boolean;
  disabled: boolean;
  wrapperRef: RefObject<HTMLDivElement> | null;
  targetRef: RefObject<HTMLDivElement> | null;
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
  size?: `${EAutocompleteSize}`;
  showTooltip: boolean;
  renderLabel?: (item: IAutocompleteValue) => ReactNode;
}
export const AutocompleteContext = createContext<AutocompleteContextProps>({
  isOpen: false,
  disabled: false,
  wrapperRef: null,
  targetRef: null,
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
  size: EAutocompleteSize.m,
  showTooltip: false,
  renderLabel: undefined
});
