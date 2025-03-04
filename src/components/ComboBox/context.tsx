import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

import { IContextProviderProps } from './types';

function getContext<T = string>(defaultState?: T) {
  const StateContext = createContext<T | null>(null);
  const DispatchContext = createContext<Dispatch<SetStateAction<T | null>> | null>(null);

  return {
    useState() {
      return useContext(StateContext);
    },
    useSetState() {
      return useContext(DispatchContext);
    },
    Provider({ children }: IContextProviderProps) {
      const [state, dispatch] = useState<T | null>(defaultState ?? null);
      return (
        <StateContext.Provider value={state}>
          <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </StateContext.Provider>
      );
    }
  };
}

const compose = (providers: (({ children }: IContextProviderProps) => JSX.Element)[]) => {
  const ComposedProviders = providers.reduce((Previous, Current) => {
    const ProviderComponent = ({ children }: IContextProviderProps) => (
      <Previous>
        <Current>{children}</Current>
      </Previous>
    );
    ProviderComponent.displayName = 'ComposedProvider';
    return ProviderComponent;
  });

  return ComposedProviders;
};

const DropdownHeight = getContext<{ minHeight: number; optimalHeight: number }>();
const DropdownWidth = getContext<number>();
const ComboBoxValue = getContext<{ id: string; label: string; [key: string]: any }[]>([]);
const SearchValue = getContext<string>('');

export const Provider = compose([
  DropdownHeight.Provider,
  DropdownWidth.Provider,
  ComboBoxValue.Provider,
  SearchValue.Provider
]);

export const { useState: useDropdownHeight, useSetState: useSetDropdownHeight } = DropdownHeight;
export const { useState: useDropdownWidth, useSetState: useSetDropdownWidth } = DropdownWidth;
export const { useState: useComboBoxValue, useSetState: useSetComboBoxValue } = ComboBoxValue;
export const { useState: useSearchValue, useSetState: useSetSearchValue } = SearchValue;
