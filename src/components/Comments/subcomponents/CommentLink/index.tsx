import React from 'react';

import { useCommentContext } from '@components/Comments/hooks';
import { Link } from '@components/index';

export const CommentLink = () => {
  const {
    comment: { commentLink }
  } = useCommentContext();

  if (!commentLink) {
    return null;
  }

  return (
    <Link href={commentLink.url} target="_blank" size="body1">
      {commentLink.label}
    </Link>
  );
};

CommentLink.displayName = 'Comments.Link';
