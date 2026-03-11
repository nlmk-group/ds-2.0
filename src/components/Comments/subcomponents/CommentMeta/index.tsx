import React from 'react';

import { formatDate } from '@components/Comments/helpers';
import { useCommentContext } from '@components/Comments/hooks';
import { Typography } from '@components/index';

export const CommentMeta = () => {
  const {
    comment: { createdAt, updatedAt }
  } = useCommentContext();

  return (
    <>
      <Typography variant="Body2-Medium" color="var(--steel-70)">
        {formatDate(createdAt)}
      </Typography>
      {updatedAt && (
        <Typography variant="Body2-Medium" color="var(--steel-70)">
          Изменен {formatDate(updatedAt)}
        </Typography>
      )}
    </>
  );
};

CommentMeta.displayName = 'Comments.CommentMeta';
