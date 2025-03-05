import { createContext, ReactNode, RefObject } from 'react';

import { EAutocompleteSize, IAutocompleteValue } from './types';

interface AutocompleteContextProps {
  isOpen: boolean;
  disabled: boolean;
  wrapperRef: RefObject<HTMLDivElement>;
  targetRef: RefObject<HTMLDivElement>;
  inputElementRef: RefObject<HTMLInputElement>;
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
  wrapperRef: { current: null },
  targetRef: { current: null },
  inputElementRef: { current: null },
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
