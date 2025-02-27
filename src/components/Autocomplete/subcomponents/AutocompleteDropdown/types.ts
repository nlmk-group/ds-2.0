import { IAutocompleteValue } from '../../types';

export interface IAutocompleteDropdownProps {
  isLoading: boolean;
  currentItems: IAutocompleteValue[] | null;
  inputValue: string;
  highlightedIndex: number;
  onSelectMenuItem: (item: IAutocompleteValue) => void;
  showCreateItem: boolean;
  createItemText: (value: string) => string;
  onCreateItem: (value: string) => void;
  noResultsText: string;
}
