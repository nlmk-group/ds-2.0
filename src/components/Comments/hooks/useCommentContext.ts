import { createContext, useContext } from 'react';

import { ICommentContextValue } from '@components/Comments/types';

const CommentContext = createContext<ICommentContextValue<any> | null>(null);

export const CommentProvider = CommentContext.Provider;

export const useCommentContext = <TData = unknown>() => {
  const context = useContext(CommentContext) as ICommentContextValue<TData> | null;

  if (!context) {
    throw new Error('useCommentContext must be used within CommentProvider');
  }

  return context;
};
