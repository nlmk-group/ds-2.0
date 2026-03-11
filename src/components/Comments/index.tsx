import React from 'react';

import { CommentCard, CommentCardEdit, CommentReplies } from '@components/Comments/subcomponents';
import { Box, Button, Icon, IconAutoRenewReloadOutlined24, Spinner, Typography } from '@components/index';
import clsx from 'clsx';
import { ICommentsProps } from 'components/Comments/types';

import s from './Comments.module.scss';

import { useComments } from './hooks';

/**
 * Компонент списка комментариев с поддержкой:
 * - отображения корневых комментариев и вложенных ответов
 * - редактирования комментария
 * - открытия формы ответа
 * - раскрытия и сворачивания веток ответов
 * - обновления списка комментариев
 * - состояния загрузки
 * - добавления нового корневого комментария
 *
 * Внутреннее состояние компонента управляется хуком `useComments`.
 * При `isLoading=true` вместо списка отображается спиннер, а локальные
 * состояния редактирования, ответа и раскрытых веток могут быть сброшены
 * в зависимости от реализации хука.
 *
 * @param {ICommentsProps} props Свойства компонента.
 * @param {IComment[]} props.comments Массив корневых комментариев.
 * @param {(data: ICommentFormData) => void} [props.handleAddRootComment]
 * Колбэк добавления нового корневого комментария.
 * Если передан, под списком отображается форма создания комментария.
 * @param {(parentId: string, data: ICommentFormData) => void} [props.handleAddReply]
 * Колбэк добавления ответа на комментарий.
 * Если передан, становится доступна форма ответа для комментариев.
 * @param {() => void} [props.handleRefresh]
 * Колбэк обновления списка комментариев.
 * Если передан, в верхней части компонента отображается кнопка «Обновить».
 * @param {boolean} [props.isLoading=false]
 * Флаг состояния загрузки.
 * При `true` список комментариев заменяется индикатором загрузки.
 * @param {string} [props.className]
 * Дополнительный CSS-класс для корневого контейнера компонента.
 *
 * @returns {JSX.Element} Разметка компонента Comments.
 */

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
      width="100%"
      height="100%"
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
              const { id, replies } = comment;
              const showParentReplies = expandedReplies.has(id);

              return (
                <div key={id} data-ui-comments-item>
                  <CommentCard
                    comment={comment}
                    isExpanded={showParentReplies}
                    isEditing={editingCommentId === id}
                    toggleEditComment={() => toggleEditComment(id)}
                    handleReplyBlock={() => replyToComment(id)}
                    onSave={handleAddReply ? data => handleAddReply(id, data) : undefined}
                    onCancel={() => handleCancel(id)}
                    onToggleReplies={() => toggleReplies(id)}
                    replyingToCommentId={replyingToCommentId}
                  />

                  {replyingToCommentId === id && handleAddReply && (
                    <div className={s.editor} data-ui-comments-reply-editor>
                      <CommentCardEdit
                        commentId={id}
                        isReply
                        onSave={data => handleAddReply(id, data)}
                        onCancel={() => handleCancel(id)}
                      />
                    </div>
                  )}

                  {showParentReplies && replies.length > 0 && (
                    <div data-ui-comments-replies>
                      <CommentReplies
                        replies={replies}
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
