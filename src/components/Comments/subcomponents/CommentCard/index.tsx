import React from 'react';

import { CommentCardEdit, CommentCardView } from '@components/Comments/subcomponents';
import { IComment, ICommentFormData } from '@components/Comments/types';

interface CommentCardProps {
  comment: IComment;
  isReply?: boolean;
  isExpanded?: boolean;
  isEditing: boolean;
  toggleEditComment: () => void;
  handleReplyBlock: () => void;
  onSave?: (data: ICommentFormData) => void;
  onCancel: () => void;
  onToggleReplies: () => void;
  replyingToCommentId: string | null;
}

export const CommentCard = ({
  comment,
  isReply = false,
  isExpanded = false,
  isEditing = false,
  toggleEditComment,
  handleReplyBlock,
  onSave,
  onCancel,
  onToggleReplies,
  replyingToCommentId
}: CommentCardProps) => {
  if (isEditing && comment.builtInActions?.onEdit) {
    return (
      <CommentCardEdit
        commentId={comment.id}
        initialContent={comment.content}
        isReply={isReply}
        onSave={data => {
          toggleEditComment();
          if (comment.builtInActions?.onEdit) comment.builtInActions.onEdit(data);
        }}
        onCancel={onCancel}
      />
    );
  }

  return (
    <CommentCardView
      comment={comment}
      isExpanded={isExpanded}
      toggleEditComment={toggleEditComment}
      handleReplyBlock={handleReplyBlock}
      onToggleReplies={onToggleReplies}
      canReply={!!onSave}
      replyingToCommentId={replyingToCommentId}
    />
  );
};
