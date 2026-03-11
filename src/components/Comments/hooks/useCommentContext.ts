import { createContext, useContext } from 'react';

import { ICommentContextValue } from '@components/Comments/types';

const CommentContext = createContext<ICommentContextValue | null>(null);

export const CommentProvider = CommentContext.Provider;

export const useCommentContext = () => {
  const context = useContext(CommentContext);

  if (!context) {
    throw new Error('Comments compound components must be used inside <Comments.Item>');
  }

  return context;
};
