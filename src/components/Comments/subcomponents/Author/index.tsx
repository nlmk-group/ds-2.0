import React from 'react';

import { useCommentContext } from '@components/Comments/hooks';
import { Typography } from '@components/index';

export const Author = () => {
  const {
    comment: { author }
  } = useCommentContext();

  return <Typography variant="Body1-Bold">{author}</Typography>;
};

Author.displayName = 'Comments.Author';
