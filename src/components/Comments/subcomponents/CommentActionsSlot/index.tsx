import React from 'react';

import { useCommentContext } from '@components/Comments/hooks';
import { CommentActionsMenu } from '@components/Comments/subcomponents';

export const CommentActionsSlot: React.FC = () => {
  const { comment, toggleEditComment } = useCommentContext();
  const { id, builtInActions, customActions = [] } = comment;

  const hasActions = !!builtInActions?.onEdit || !!builtInActions?.onDelete || customActions.length > 0;

  if (!hasActions) {
    return null;
  }

  return (
    <CommentActionsMenu
      comment={comment}
      builtInEdit={!!builtInActions?.onEdit}
      builtInDelete={!!builtInActions?.onDelete}
      onEdit={toggleEditComment}
      onDelete={() => builtInActions?.onDelete?.(id)}
      actions={customActions}
    />
  );
};
