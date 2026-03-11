import React from 'react';

import { useCommentContext } from '@components/Comments/hooks';
import { Badge } from '@components/index';

export const CommentBadge = () => {
  const {
    comment: { badge }
  } = useCommentContext();

  if (!badge?.label) {
    return null;
  }

  return (
    <Badge color={badge.color} variant={badge.variant}>
      {badge.label}
    </Badge>
  );
};

CommentBadge.displayName = 'Comments.Badge';
