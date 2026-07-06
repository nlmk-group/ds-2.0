import React from 'react';

import { useCommentContext } from '@components/Comments/hooks';
import { ActionsMenu } from '@components/Comments/subcomponents';

export const ActionsSlot: React.FC = () => {
  const { comment, toggleEditComment } = useCommentContext();
  const { id, builtInActions, customActions = [] } = comment;

  const hasActions = !!builtInActions?.onEdit || !!builtInActions?.onDelete || customActions.length > 0;

  if (!hasActions) {
    return null;
  }

  return (
    <ActionsMenu
      comment={comment}
      builtInEdit={!!builtInActions?.onEdit}
      builtInDelete={!!builtInActions?.onDelete}
      onEdit={toggleEditComment}
      onDelete={() => builtInActions?.onDelete?.(id)}
      actions={customActions}
    />
  );
};
