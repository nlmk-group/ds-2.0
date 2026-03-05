import React from 'react';

import { Box, Button, IconAutoRenewReloadOutlined24, Spinner } from '@components/index';
import { useComments } from './hooks';
import { ICommentsProps } from 'components/Comments/types';
import { CommentCard, CommentCardEdit, CommentReplies } from '@components/Comments/subcomponents';

import s from './Comments.module.scss';

const Comments = ({
  comments,
  handleAddRootComment,
  handleAddReply,
  handleRefresh,
  isLoading = false
}: ICommentsProps) => {
  const {
    editingCommentId,
    replyingToCommentId,
    expandedReplies,
    toggleEditComment,
    replyToComment,
    cancelEdit,
    toggleReplies
  } = useComments();

  const handleCancel = (commentId: string) => {
    cancelEdit(commentId);
  };

  return (
    <Box gap={20} flexDirection="column" background="var(--steel-10)" className={s.wrapper}>
      {handleRefresh && (
        <Button startIcon={<IconAutoRenewReloadOutlined24 />} variant="secondary" onClick={handleRefresh}>
          Обновить
        </Button>
      )}

      {isLoading ? (
        <Box width="100%" height="100%" justifyContent="center" alignItems="center" className={s.loader}>
          <Spinner />
        </Box>
      ) : (
        <Box width="100%" height="100%" pl={handleRefresh ? 32 : 0} flexDirection="column" gap={20} className={s.comments}>
          {comments.map(comment => {
            const showParentReplies = expandedReplies.has(comment.id);

            return (
              <div key={comment.id}>
                <CommentCard
                  comment={comment}
                  isExpanded={showParentReplies}
                  isEditing={editingCommentId === comment.id}
                  toggleEditComment={() => toggleEditComment(comment.id)}
                  handleReplyBlock={() => replyToComment(comment.id)}
                  onSave={handleAddReply ? data => handleAddReply(comment.id, data) : undefined}
                  onCancel={() => handleCancel(comment.id)}
                  onToggleReplies={() => toggleReplies(comment.id)}
                  replyingToCommentId={replyingToCommentId}
                />

                {replyingToCommentId === comment.id && handleAddReply && (
                  <div className={s.editor}>
                    <CommentCardEdit
                      commentId={comment.id}
                      isReply
                      onSave={data => handleAddReply(comment.id, data)}
                      onCancel={() => handleCancel(comment.id)}
                    />
                  </div>
                )}

                {showParentReplies && comment.replies.length > 0 && (
                  <CommentReplies
                    replies={comment.replies}
                    isExpanded={showParentReplies}
                    toggleEditComment={toggleEditComment}
                    handleReplyBlock={replyToComment}
                    onSave={handleAddReply}
                    onCancel={handleCancel}
                    onToggleReplies={toggleReplies}
                    editingCommentId={editingCommentId}
                    replyingToCommentId={replyingToCommentId}
                    expandedReplies={expandedReplies}
                  />
                )}
              </div>
            );
          })}
        </Box>
      )}

      {handleAddRootComment && (
        <div style={{ marginTop: 20 }}>
          <CommentCardEdit isReply={false} onSave={handleAddRootComment} isLoading={isLoading} />
        </div>
      )}
    </Box>
  );
};

export default Comments;
