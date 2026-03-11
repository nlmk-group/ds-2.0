import React from 'react';

import { CommentCard, CommentCardEdit } from '@components/Comments/subcomponents';
import { IComment, ICommentFormData } from '@components/Comments/types';
import { Box } from '@components/index';
import clsx from 'clsx';

import styles from './CommentReplies.module.scss';

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
      className={clsx(styles.container, {
        [styles.comment_replies_expanded]: isExpanded,
        [styles.comment_replies_collapsed]: !isExpanded
      })}
    >
      <Box gap={20} flexDirection={'column'}>
        {replies.map(reply => {
          const { id, replies: nestedReplies } = reply;
          const showReplies = expandedReplies.has(id);

          return (
            <div key={id} className={styles.reply}>
              <CommentCard
                comment={reply}
                isReply={true}
                isExpanded={showReplies}
                isEditing={editingCommentId === id}
                toggleEditComment={() => toggleEditComment(id)}
                handleReplyBlock={() => handleReplyBlock(id)}
                onSave={onSave ? data => onSave(id, data) : undefined}
                onCancel={() => onCancel(id)}
                onToggleReplies={() => onToggleReplies(id)}
                replyingToCommentId={replyingToCommentId}
              />

              {replyingToCommentId === id && onSave && (
                <div className={styles.form}>
                  <CommentCardEdit
                    commentId={id}
                    initialContent=""
                    isReply={true}
                    onSave={data => onSave(id, data)}
                    onCancel={() => onCancel(id)}
                  />
                </div>
              )}

              {showReplies && nestedReplies.length > 0 && (
                <CommentReplies
                  replies={nestedReplies}
                  isExpanded={showReplies}
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
