import { createContext, useContext } from 'react';

const LocaleContext = createContext<string>('en');

export const LocaleProvider = LocaleContext.Provider;

export const useLocale = (): string => useContext(LocaleContext);
