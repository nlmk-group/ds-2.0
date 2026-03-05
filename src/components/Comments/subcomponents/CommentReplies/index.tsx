import React from 'react';
import { Box } from '@components/index';

import { CommentCard, CommentCardEdit } from '@components/Comments/subcomponents';
import { IComment, ICommentFormData } from '@components/Comments/types';

import s from './CommentReplies.module.scss';

interface CommentRepliesProps {
  replies: IComment[];
  isExpanded: boolean;
  toggleEditComment: (commentId: string) => void;
  handleReplyBlock: (commentId: string) => void;
  onSave?: (commentId: string, data: ICommentFormData) => void;
  onCancel: (commentId: string) => void;
  onToggleReplies: (commentId: string) => void;
  editingCommentId: string | null;
  replyingToCommentId: string | null;
  expandedReplies: Set<string>;
}

export const CommentReplies = ({
  replies,
  isExpanded,
  toggleEditComment,
  handleReplyBlock,
  onSave,
  onCancel,
  onToggleReplies,
  editingCommentId,
  replyingToCommentId,
  expandedReplies
}: CommentRepliesProps) => {
  if (replies.length === 0) {
    return null;
  }

  return (
    <div
      className={`${s.container} ${
        isExpanded ? s.comment_replies_expanded : s.comment_replies_collapsed
      }`}
    >
      <Box gap={20} flexDirection={'column'}>
        {replies.map(reply => {
          const showReplies = expandedReplies.has(reply.id);
          return (
            <div key={reply.id} className={s.reply}>
              <CommentCard
                comment={reply}
                isReply={true}
                isExpanded={showReplies}
                isEditing={editingCommentId === reply.id}
                toggleEditComment={() => toggleEditComment(reply.id)}
                handleReplyBlock={() => handleReplyBlock(reply.id)}
                onSave={onSave ? data => onSave(reply.id, data) : undefined}
                onCancel={() => onCancel(reply.id)}
                onToggleReplies={() => onToggleReplies(reply.id)}
                replyingToCommentId={replyingToCommentId}
              />

              {replyingToCommentId === reply.id && onSave &&  (
                <div className={s.form}>
                  <CommentCardEdit
                    commentId={reply.id }
                    initialContent=""
                    isReply={true}
                    onSave={data => onSave(reply.id, data)}
                    onCancel={() => onCancel(reply.id)}
                  />
                </div>
              )}

              {showReplies && reply.replies.length > 0 && (
                <CommentReplies
                  replies={reply.replies}
                  isExpanded={expandedReplies.has(reply.id)}
                  toggleEditComment={toggleEditComment}
                  handleReplyBlock={handleReplyBlock}
                  onSave={onSave}
                  onCancel={onCancel}
                  onToggleReplies={onToggleReplies}
                  editingCommentId={editingCommentId}
                  replyingToCommentId={replyingToCommentId}
                  expandedReplies={expandedReplies}
                />
              )}
            </div>
          );
        })}
      </Box>
    </div>
  );
};
