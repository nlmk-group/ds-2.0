import React from 'react';

import { useCommentContext } from '@components/Comments/hooks';
import { Typography } from '@components/index';

export const CommentAuthor = () => {
  const {
    comment: { author }
  } = useCommentContext();

  return <Typography variant="Body1-Bold">{author}</Typography>;
};

CommentAuthor.displayName = 'Comments.Author';
