import React from 'react';

import { CommentCard, CommentCardEdit, CommentReplies } from '@components/Comments/subcomponents';
import { Box, Button, Icon, IconAutoRenewReloadOutlined24, Spinner, Typography } from '@components/index';
import clsx from 'clsx';
import { ICommentsProps } from 'components/Comments/types';

import s from './Comments.module.scss';

import { useComments } from './hooks';

const Comments = ({
  comments,
  handleAddRootComment,
  handleAddReply,
  handleRefresh,
  className,
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
  } = useComments(isLoading);

  const handleCancel = (commentId: string) => {
    cancelEdit(commentId);
  };

  return (
    <Box
      gap={20}
      flexDirection="column"
      background="var(--steel-10)"
      className={clsx(s.wrapper, className)}
      data-ui-comments
    >
      {handleRefresh && (
        <Button
          startIcon={<IconAutoRenewReloadOutlined24 />}
          variant="secondary"
          onClick={handleRefresh}
          data-ui-comments-refresh
        >
          Обновить
        </Button>
      )}

      {isLoading ? (
        <Box
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          className={s.loader}
          data-ui-comments-loader
        >
          <Spinner />
        </Box>
      ) : (
        <Box
          width="100%"
          height="100%"
          pl={handleRefresh ? 32 : 0}
          flexDirection="column"
          gap={20}
          className={s.comments}
          data-ui-comments-list
        >
          {comments.length > 0 ? (
            comments.map(comment => {
              const showParentReplies = expandedReplies.has(comment.id);

              return (
                <div key={comment.id} data-ui-comments-item data-comment-id={comment.id}>
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
                    <div className={s.editor} data-ui-comments-reply-editor data-comment-id={comment.id}>
                      <CommentCardEdit
                        commentId={comment.id}
                        isReply
                        onSave={data => handleAddReply(comment.id, data)}
                        onCancel={() => handleCancel(comment.id)}
                      />
                    </div>
                  )}

                  {showParentReplies && comment.replies.length > 0 && (
                    <div data-ui-comments-replies data-comment-id={comment.id}>
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
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <Box
              width="100%"
              height="100%"
              // pl={handleRefresh ? 32 : 0}
              justifyContent="center"
              alignItems="center"
              className={s.comments}
              data-ui-comments-empty
            >
              <Box gap={0} alignItems="center" height={120}>
                <Icon name="IconCancelOutlined16" htmlColor="var(--steel-70)" />
                <Typography variant="Body1-Medium" color="var(--steel-70)">
                  Комментариев пока нет
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      )}

      {handleAddRootComment && (
        <div data-ui-comments-root-editor>
          <CommentCardEdit isReply={false} onSave={handleAddRootComment} isLoading={isLoading} />
        </div>
      )}
    </Box>
  );
};

export default Comments;
